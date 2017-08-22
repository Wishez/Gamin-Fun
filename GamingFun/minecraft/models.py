# -*- encoding: utf-8 -*-
#import sys
#reload(sys)
#sys.setdefaultencoding('utf-8')
# Create your models here.
from django.utils.translation import ugettext_lazy as _
from django.db import models
from django.utils import timezone
from app.functions import subscribe, replanishBalance, user_directory_path
from robokassa.signals import success_page_visited, result_received
from django.dispatch import receiver
from django.shortcuts import redirect
from robokassa.models import SuccessNotification


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
        max_length=30,
        default='Не оплачено'

    )
    avatar = models.FileField(
        _('Аватар игрока'),
        upload_to=user_directory_path,
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
    last_payment_notification = models.OneToOneField(
        SuccessNotification,
        verbose_name=_('Последний платёж'),
        blank=True,
        null=True
    )

    # @receiver(result_received)
    # def setLastPayment(self, handler, InvId, OutSum, **kwargs):
    #     self.last_payment_notification = SuccessNotification.objcets.get(InvId=InvId)
    #     self.save()


    def subscribe(self, quantity_monthes=0):
        return subscribe(self, quantity_monthes)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'

        # Пользователь может заходить под