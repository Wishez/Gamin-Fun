# -*- encoding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from minecraft.models import MinecraftUser
from samp.models import SampUser
from django.middleware.csrf import get_token
# Create your views here.

def index(request):
    return render(
        request,
        'index.html',
        {}
    )
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
        site = data['site']

        isMinecraftSite = site == 'minecraft'
        isSampSite = site == 'samp'

        # Если регистрация на samp сервер
        if isSampSite:
            # То учитываем два дополнительных поля.
            name = data['name']
            surname = data['surname']
            # Возможно игрок с таким именем и фамилией уже существует
            # в реальной жизни мира San Andreas.
            if User.objects.filter(first_name__iexact=name).exists() and User.objects.filter(last_name__iexact=surname).exists():
                return HttpResponse('Игрок с таким именем и фамилией есть в мире San Andreas')
        # Проверка на существуещего пользователя
        if User.objects.filter(username=username).exists():
            # Если есть пользователь с таким именем,
            # возвращается уведомление об этом.
            return HttpResponse('Пользователь с таким именем пользователя уже существует')
        else:
            # Регистрируется один пользователь
            user = User(
                username=username,
                email=email
            )
            user.set_password(password)

            # В форме регистрации на samp сервер
            # есть первое и второе имя.
            if isSampSite:
                user.first_name = name
                user.last_name = surname
            user.save()

            # Создаются аккаунты  для двух игр
            if isMinecraftSite:
                MinecraftUser(user=user).save()
                server = 'Minecraft'
            elif isSampSite:
                SampUser(user=user).save()
                server = 'SAMP'


            subject =  'Успешная регистрация'
            message = 'Вы зарегистрировались под логином — %s, на %s сервере нашего проекта.' \
                      'Удачной охоты!' % (username, server)
            #user.email_user(subject, message)
            # Возвращается ответ об успешной регистрации.
            return HttpResponse('Вы успешно прошли регистрацию')
            # Посылается сообщение об успехе на почту
        return HttpResponse('Что-то пошло не так...')

def log_in(request):
    if request.method == 'GET':
        data = request.GET
        print('before username')
        username = data['username']
        password = data['password']
        print('after username')
        print('is username =====>', username)
        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)
            # Буду получать имя сайта, с которого сделан запрос
            site = data['site']
            # Есть ли у переменной user свойство id?
            if site == 'minecraft':
                siteUser = MinecraftUser.objects.filter(user=user.id)

            if site == 'samp':
                # if SampUser.objects.get(user=user.id).exist
                siteUser = SampUser.objects.filter(user=user.id)
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

def subscribe(request):

    if request.method == 'POST':
        data = request.POST
        # Получаем имя пользователя, пароль и новый email.
        quantity_monthes = data['quantityMonthes']
        username = data['username']
        site = data['site']


        user = User.objects.get(username=username)
        if site == 'minecraft':
            userSite = user.minecraftuser
        elif site == 'samp':
            userSite = user.sampuser
        # Пользователь подписывает и возвращается сообщение об успехе,
        # либо провале, из-за того, что не хватает денег на счету.
        # Но также это проверяется на стороне клиента.
        return JsonResponse(userSite.subscribe(quantity_monthes))
    # Ошибка сервера?
    return HttpResponse('Не удалось подписаться на сервер')

def replanish_balance(request):
    if request.method == 'POST':
        data = request.POST
        site = data['site']
        username = data['username']
        credits = data['quantityCredits']

        user = User.objects.get(username=username)

        if site == 'minecraft':
            siteUser = MinecraftUser.objects.get(user=user.id)
        elif site == 'samp':
            siteUser = SampUser.objects.get(user=user.id)

        siteUser.replanishBalance(credits)

        return HttpResponse(True)

    return HttpResponse(False)

def recover_password(request):
    if request.method == 'GET':
        data = request.GET
        email = data['email']
        site = data['site']
        user = User.objects.get(email=email)
        if user is not None:
            newPassword = User.objects.make_random_password()
            user.set_password(newPassword)
            #user.email_user('Новый пароль для %s аккаунта' % site, 'Ваш новый пароль %s' % newPassword)
            return HttpResponse('На почту %s был выслан новый пароль' % email)
        else:
            return HttpResponse('Аккаунта с таким email-ом не существует')
    return HttpResponse('Ошибка' )

def change_user_avatar(request):
    if request.method == 'POST' and request.FILES['newAvatar']:
        data =  request.POST
        avatar = request.FILES['newAvatar']
        username = data['username']

        print(avatar)
        site = data['site']

        user = User.objects.get(username=username)

        if site == 'minecraft':
            siteUser= user.minecraftuser
        elif site == 'samp':
            siteUser = user.sampuser

        siteUser.avatar.save('user_avatar', avatar)
        siteUser.save()

        response = {
            'avatar': siteUser.avatar.url,
        }

        return JsonResponse(response)
    return HttpResponse('Не удалось изменить аватар')