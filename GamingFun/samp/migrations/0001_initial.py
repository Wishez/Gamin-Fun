# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-05 12:38
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='SampNews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=300, verbose_name='Заголовок')),
                ('text', models.TextField(max_length=4096, verbose_name='Новостной текст')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания')),
            ],
            options={
                'verbose_name': 'Новость',
                'verbose_name_plural': 'Новости',
            },
        ),
        migrations.CreateModel(
            name='SampUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('balance', models.IntegerField(default='0', verbose_name='Количество кредитов')),
                ('status', models.CharField(choices=[('Оплачено', 'Оплачено'), ('Не оплачено', 'Не оплачено')], default='Не оплачено', max_length=30, verbose_name='Статус подписки на сервер')),
                ('avatar', models.FileField(default='/media/avatars/users/default_avatar.png', upload_to='avatars/users/', verbose_name='Аватар игрока')),
                ('active_until', models.DateTimeField(blank=True, null=True, verbose_name='Дата окончания подписки')),
                ('registered_at', models.DateTimeField(auto_now=True, verbose_name='Зарегистрировался')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Аккаунт пользователя')),
            ],
            options={
                'verbose_name': 'Игрок',
                'verbose_name_plural': 'Игроки',
            },
        ),
    ]
