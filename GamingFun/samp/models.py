# -*- encoding: utf-8 -*-

# Create your models here.
from django.utils.translation import ugettext_lazy as _
from django.db import models
from django.utils import timezone
from datetime import datetime

# Create your models here.
class SampNews(models.Model):
    title = models.CharField(
        _('Заголовок'),
        max_length=300
    )
    text = models.TextField(
        _('Новостной текст'),
        max_length=4096
    )

    created_at = models.DateTimeField(
        _('Дата создания'),
        default=timezone.now
    )

    def __str__(self):
        return self.title
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

class SampUser(models.Model):

    user =  models.OneToOneField(
        'auth.User',
        verbose_name=_('Аккаунт пользователя'),
        unique=True
    )

    balance = models.IntegerField(
        _('Количество кредитов'),
        default='0'
    )

    statusOptions = (
        (_('Оплачено'), 'Оплачено'),
        (_('Не оплачено'), 'Не оплачено'),
    )
    status = models.CharField(
        _('Статус подписки на сервер'),
        choices=statusOptions,
        max_length=30,
        default='Не оплачено'

    )
    avatar = models.FileField(
        _('Аватар игрока'),
        upload_to='avatars/users/',
        default='avatars/default/default_avatar.jpg'
    )
    active_until = models.DateTimeField(
        _('Дата окончания подписки'),
        blank=True,
        null=True
    )
    # Дата регистраци, по которой сортируются модели
    registered_at = models.DateTimeField(
        _('Зарегистрировался'),
        auto_now=True
    )

    def replanishBalance(self, credits):
        # Пополнение баланса на указанное колличество кредитов.
        self.balance += credits
        # Сохранение изменённого состояния.
        self.save()
    # Подписывает пользователя по его желанию
    def subscribe(self, quantity_monthes=0):

        # Проверка количества кредитов
        if self.balance >= (quantity_monthes * 150):
            # Подписка активированна - нужно добавить к текущему времени
            # выбранное количество месяцев
            if self.active_until is not None:
                # Подписка продливается.
                self.increaceSubscribeTime(quantity_monthes)
                # Оплата подписки
                self.payForSubscribe(quantity_monthes)
            # Подписка не активированна - время окончание подписки нет.
            # Нужно установить начальное время приобретения подписки.
            else:
                # Подписка активируется.
                self.active_until = timezone.now()
                self.increaceSubscribeTime(quantity_monthes)
                # Оплата подписки
                self.payForSubscribe(quantity_monthes)
                # Статус активируемой подписки
                self.status = 'Оплачено'
            # Сохраняются измённые данные.
            self.save()
            # Транзакция прошла успешно.
            return True
        # Не хватает денег на счету.
        return False

    # Функция, расчитывающая только время истечения подписки,
    # принимающая модель пользователя и выбранные им коли-
    # чество месяцев.
    def increaceSubscribeTime(self, quantity_monthes):
        currActiveTime = self.active_until
        year = currActiveTime.year
        month = currActiveTime.month
        day = currActiveTime.day
        hour = currActiveTime.hour
        minute = currActiveTime.minute

        # Выбранны чётко 12 месяцев
        if quantity_monthes == 12:
            year += 1
        # Если не чётко 12 месяцев
        else:
            # Но в сумме больше, чем 12
            if month + quantity_monthes > 12:
                # Подписка окончится в следующем году
                year += 1
                # Но не в первом месяце.
                month = month - quantity_monthes
            # Ровно 12-й месяц  означает истечение подписки
            # первого месяца следующего года.
            elif month + quantity_monthes == 12:
                year += 1
                month = 1
            else:
                # Окончание подписки в текущем году.
                month += quantity_monthes
        # Присвоение расчитанного времени окончание подписки
        # рассчитоваемого времени окончания подписки игрока.
        self.active_until = datetime(year, month, day, hour, minute)


    # Оплата игроком подписки, с возможной скидкой.
    def payForSubscribe(self, quantity_monthes):
        # При покупки нескольки месяцев, даётся скидка
        # Если быть точнее 12m - 13%, 6m - 7%
        # Подписка стоит 150 рублей.
        if quantity_monthes == 12:
            self.balance -= (quantity_monthes * 150) - ((150 / 100 * 13) * quantity_monthes)
        if quantity_monthes == 6:
            self.balance -= (quantity_monthes * 150) - - ((150 / 100 * 7) * quantity_monthes)
        else:
            self.balance -= quantity_monthes * 150


    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'