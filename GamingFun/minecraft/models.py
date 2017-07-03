# Create your models here.
from django.utils.translation import ugettext_lazy as _
from django.db import models
from django.utils import timezone
from datetime import datetime

class MinecraftNews(models.Model):
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

class MinecraftUser(models.Model):

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
        max_length=10,
        default='Не оплачено'

    )
    avatar = models.FileField(
        _('Аватар игрока'),
        upload_to='avatars/users/',
        default='/media/avatars/users/default_avatar.png'
    )
    active_until = models.DateTimeField(
        _('Дата окончания подписки'),
        blank=True,
        null=True
    )

    registered_at = models.DateTimeField(
        _('Зарегистрировался'),
        auto_now=True
    )

    def subscribe(self, quantity_monthes=0):
        if quantity_monthes == 6:
            pass
        elif quantity_monthes == 12:
            pass
        else:
            if self.creadits >= (quantity_monthes * 150):
                self.status = 'Оплачено'

                # Расчитай скидку 13% и вычти стоимость из общей суммы баланса пользователя
                # Сделай рассчёты для всех пользователей - расчёты их времени подписки и кредитов
                # Для уже оплативших пользователей и новеньких.
                def getSubscribeTime(self=self):
                    currActiveTime = self.active_until
                    year = currActiveTime.year
                    month = currActiveTime.month
                    day = currActiveTime.day
                    hour = currActiveTime.hour
                    minute = currActiveTime.minute

                    if quantity_monthes == 12:
                        self.active_until = datetime(year + 1, month, day, hour, minute)
                    elif quantity_monthes == 6:
                        pass

                if self.active_until is not None:
                    pass
                else:
                    self.active_until = timezone.now()





    #def

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'

# Пользователь может заходить под