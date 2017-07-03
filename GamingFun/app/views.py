# -*- encoding: utf-8 -*-

from django.shortcuts import render
from django.http import HttpResponse
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
        username = data['username']
        password = data['password']
        email = data['email']
        site = data['site']
        # Проверка на существуещего пользователя
        if User.objcects.all(username=username) is not None:
            # Если есть пользователь с таким именем,
            # возвращается уведомление об этом.
            return HttpResponse(False)
        else:
            # Регистрируется один пользователь
            user = User(
                username=username,
                password=password,
                email=email
            )

            # В форме регистрации на samp сервер
            # есть первое и второе имя.
            if site == 'samp':
                user.fist_name = data['name']
                user.last_name = data['surname']

            user.save()

            # Создаются аккаунты  для двух игр
            if site == 'minecraft':
                MinecraftUser(user=user).save()
                server = 'Minecraft-a'

            if site == 'samp':
                SampUser(user=user).save()
                server = 'SAMP-a'

            subject =  'Успешная регистрация'
            message = 'Вы зарегистрировались как — %s на сервере %s нашего проекта.' \
                      'Удачной охоты!' % (username, server)
            # Посылается сообщение об успехе на почту
            user.email_user(subject, message)
            # Возвращается ответ об успешной регистрации.
            return HttpResponse(True)

def logIn(request):
    if request.method == 'POST':
        data = request.POST

        username = data['username']
        password = data['password']

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
                userData = MinecraftUser.objects.get(user=user.id)

            if site == 'samp':
                userData = SampUser.objects.get(user=user.id)
            # Возвращаются данные пользователе
            return HttpResponse(userData)
     # Не удалось залогинисться.
    return HttpResponse(False)

def logOut(request):
    logout(request)
    return HttpResponse(True)

def changePassword(request):
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

def changeEmail(request):
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

        if site == 'samp':
            userSite=SampUser.objects.get(user=user.id)
        # Пользователь подписывает и возвращается сообщение об успехе,
        # либо провале, из-за того, что не хватает денег на счету.
        # Но также это проверяется на стороне клиента.
        return HttpResponse(userSite.subscribe(quantity_monthes))
        # Не удалось поменять email
    return HttpResponse(False)