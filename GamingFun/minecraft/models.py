# Create your models here.
from django.utils.translation import ugettext_lazy as _
from django.db import models
from django.utils import timezone

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

    balance = models.IntegerField(_('Количество кредитов'))

    statusOptions = (
        (_('Оплачено'), 'Оплачено'),
        (_('Не оплачено'), 'Не оплачено'),
    )
    status = models.CharField(
        _('Статус подписки на сервер'),
        choices=statusOptions,
        max_length=10
    )
    avatar = models.FileField(
        _('Аватар игрока'),
        upload_to='avatars/users/'
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
    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'

# Пользователь может заходить под