# -*- encoding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from minecraft.models import MinecraftUser
from django.views.decorators.csrf import csrf_exempt
from .functions import loggingData
# Create your views here.
@csrf_exempt
def get_user_last_payment(request):
    if request.method == 'GET':
        data = request.GET

        username = data['username']
        notification = User.objects.get(username=username).minecraftuser.last_payment_notification
        send_data = {
            'OutSum': int(notification.OutSum)
        }

        log_data = 'username: %s' % username
        loggingData('get_user_last_payment', log_data)

        return JsonResponse(send_data)

    return HttpResponse('Внутренняя ошибка сервера')


def index(request):
    return render(
        request,
        'index.html',
        {}
    )

@csrf_exempt
def register(request):

    if request.method == 'POST':

        data = request.POST

        password = data['password']
        repeated_password = data['repeatedPassword']
        # Проверяем тождество паролей, после чего либо работа продолжается,
        # либо пользователь пойдёт отождествлять пароли.
        if password != repeated_password:
            return HttpResponse('Пароли не совпадают')
        username = data['username']
        email = data['email']

        # Проверка на существуещего пользователя
        if User.objects.filter(username=username).exists():
            # Если есть пользователь с таким именем,
            # возвращается уведомление об этом.
            return HttpResponse('Пользователь с таким именем пользователя уже существует')
        elif User.objects.filter(email=email).exists():
            return HttpResponse('Пользователь с таким email-ом уже существует')
        else:
            # Регистрируется один пользователь
            user = User(
                username=username,
                email=email
            )
            user.set_password(password)
            user.save()

            # Создаются аккаунты  для двух игр

            MinecraftUser(user=user).save()

            server = 'Minecraft'
            subject =  'Успешная регистрация'
            message = 'Вы зарегистрировались под логином — %s, на %s сервере нашего проекта.' \
                      'Удачной охоты!' % (username, server)
            user.email_user(subject, message)
            # Возвращается ответ об успешной регистрации.
            return HttpResponse('Вы успешно прошли регистрацию')
            # Посылается сообщение об успехе на почту
        return HttpResponse('Что-то пошло не так...')

def log_in(request):
    if request.method == 'GET':
        data = request.GET

        username = data['username']
        password = data['password']

        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)

            siteUser = MinecraftUser.objects.filter(user=user.id)

            # Если есть аккаунт, то не факт, что пользователь
            # логинится на нужном сайте. Он, может быть, очень рассееный
            # или же у него случилось что-то плохое и он решил поиграть
            # в какую-нибудь игру, чтобы на время уйти из реальности.
            if siteUser.exists():
                siteUser = siteUser[0]
                userData = {
                    'avatar': siteUser.avatar.url,
                    'email': siteUser.user.email,
                    'balance': siteUser.balance,
                    'status': siteUser.status,
                    'activeUntil': siteUser.active_until,
                    'name': siteUser.user.first_name,
                    'sureface': siteUser.user.last_name
                }
                # Возвращаются данные пользователе

                return JsonResponse(userData)

     # Не удалось залогинисться.
    return HttpResponse('')

def log_out(request):
    logout(request)
    return HttpResponse(True)

@csrf_exempt
def change_password(request):
    if request.method == 'POST':
        data = request.POST
        # Получаем имя пользователя и пароль,
        username = data['username']
        oldPassword = data['oldPassword']
        newPassword = data['newPassword']
        user = User.objects.get(username=username)

        # На стороне клиента проходит валидация
        # старого пароля.
        # Но всё же, на всякий случай проверяется сатрый пароль,
        #  который ввёл пользователь, с текущим.
        if user is not None and user.check_password(oldPassword):
            # Изменение пароля
            user.set_password(newPassword)
            # Сохраняем изменение.
            user.save()
            return HttpResponse('Пароль был успешно изменён')
        else:
            return HttpResponse('Не удалось изменить пароль')
        # Возвращение об успехе изменения пароля
    # Не удалось поменять пароль
    return HttpResponse(False)

@csrf_exempt
def change_email(request):
    if request.method == 'POST':
        data = request.POST
        # Получаем имя пользователя, пароль и новый email.
        username = data['username']

        oldPassword = data['password']
        newEmail = data['newEmail']

        user = User.objects.get(username=username)

        # На стороне клиента проходит валидация
        # старого пароля.
        # Но всё же, на всякий случай проверяется сатрый пароль,
        # который ввёл пользователь, с текущим.
        if user is not None and user.check_password(oldPassword):
            # Изменение email-a
            user.email = newEmail
            # Сохранение новых данных пользователя.
            user.save()
            # Возвращение сообщение об успехе изменения email-a.
            return HttpResponse('Email успешно изменён')
        else:
            # Возвращение сообщение об не успехе изменения email-a.
            return HttpResponse('Не удалось изменить email')
    # Не удалось поменять email
    return HttpResponse('Не удалось изменить email.')

@csrf_exempt
def subscribe(request):

    if request.method == 'POST':
        data = request.POST
        # Получаем имя пользователя, пароль и новый email.
        quantity_monthes = data['quantityMonthes']
        username = data['username']
        user = User.objects.get(username=username)

        userSite = user.minecraftuser

        return JsonResponse(userSite.subscribe(quantity_monthes))
    # Ошибка сервера?
    return HttpResponse('Не удалось подписаться на сервер')


@csrf_exempt
def recover_password(request):
    if request.method == 'POST':
        data = request.POST
        email = data['email']
        site = data['site']
        if User.objects.filter(email=email).exists():
            newPassword = User.objects.make_random_password()
            user = User.objects.get(email=email)

            user.set_password(newPassword)
            subj = 'Новый пароль для %s аккаунта' % site
            message = 'Ваш новый пароль %s' % newPassword

            user.email_user(subj, message)
            return HttpResponse('На почту %s был выслан новый пароль' % email)
        else:
            return HttpResponse('Аккаунта с таким email-ом не существует')
    return HttpResponse('Ошибка' )

@csrf_exempt
def change_user_avatar(request):
    if request.method == 'POST' and request.FILES['newAvatar']:
        data =  request.POST
        avatar = request.FILES['newAvatar']
        username = data['username']

        user = User.objects.get(username=username)


        siteUser= user.minecraftuser


        siteUser.avatar.save('user_avatar', avatar)
        siteUser.save()

        response = {
            'avatar': siteUser.avatar.url,
        }

        return JsonResponse(response)
    return HttpResponse('Не удалось изменить аватар')