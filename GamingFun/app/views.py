# -*- encoding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from minecraft.models import MinecraftUser
from samp.models import SampUser
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
        print(site)
        isMinecraftSite = site == 'minecraft'
        isSampSite = site == 'samp'

        print(isSampSite, 'samp site')
        print(isMinecraftSite, 'minecraft site')
        # Если регистрация на samp сервер
        if isSampSite:
            # То учитываем два дополнительных поля.
            name = data['name']
            surname = data['surname']
            # Возможно игрок с таким именем и фамилией уже существует
            # в реальной жизни мира San Andreas.
            if User.objects.filter(first_name__iexact=name).exists() and User.objects.filter(last_name__iexact=surname).exists():
                return HttpResponse(False)
        # Проверка на существуещего пользователя
        if User.objects.filter(username=username).exists():
            # Если есть пользователь с таким именем,
            # возвращается уведомление об этом.
            return HttpResponse(False)
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
            print(user, 'it is user')
            if isMinecraftSite:
                MinecraftUser(user=user).save()
                server = 'Minecraft-a'
            elif isSampSite:
                SampUser(user=user).save()
                server = 'SAMP-a'
                print('samp user saved')


            return HttpResponse(True)
            subject =  'Успешная регистрация'
            message = 'Вы зарегистрировались как — %s на сервере %s нашего проекта.' \
                      'Удачной охоты!' % (username, server)


            # Посылается сообщение об успехе на почту
            #user.email_user(subject, message)

            # Возможно отправлю ответ с помощью оперетора yelld или как там его.

            # Возвращается ответ об успешной регистрации.
        return HttpResponse('')

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
        print(user , '\nis user')
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

        # Возвращение об успехе изменения пароля
        return HttpResponse(True)
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
        #  который ввёл пользователь, с текущим.
        if user is not None and user.check_password(oldPassword):
            # Изменение email-a
            user.email = newEmail
            # Сохранение новых данных пользователя.
            user.save()

        # Возвращение об успехе изменения email-a.
        return HttpResponse(True)
    # Не удалось поменять email
    return HttpResponse(False)

def subscribe(request):
    if request.method == 'POST':
        data = request.POST
        # Получаем имя пользователя, пароль и новый email.
        quantity_monthes = data['quantityMonthes']
        username = data['username']
        site = data['site']


        user = User.objects.get(username=username)
        if site == 'minecraft':
            userSite= MinecraftUser.objects.get(user=user.id)
        elif site == 'samp':
            userSite=SampUser.objects.get(user=user.id)
        # Пользователь подписывает и возвращается сообщение об успехе,
        # либо провале, из-за того, что не хватает денег на счету.
        # Но также это проверяется на стороне клиента.
        return HttpResponse(userSite.subscribe(quantity_monthes))
        # Не удалось поменять email
    return HttpResponse(False)

def replanishBalanace(request):
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