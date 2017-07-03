# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-03 17:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('minecraft', '0003_auto_20170703_1152'),
    ]

    operations = [
        migrations.AlterField(
            model_name='minecraftuser',
            name='avatar',
            field=models.FileField(default='/media/avatars/users/default_avatar.png', upload_to='avatars/users/', verbose_name='Аватар игрока'),
        ),
        migrations.AlterField(
            model_name='minecraftuser',
            name='balance',
            field=models.IntegerField(default='0', verbose_name='Количество кредитов'),
        ),
        migrations.AlterField(
            model_name='minecraftuser',
            name='status',
            field=models.CharField(choices=[('Оплачено', 'Оплачено'), ('Не оплачено', 'Не оплачено')], default='Не оплачено', max_length=10, verbose_name='Статус подписки на сервер'),
        ),
    ]
