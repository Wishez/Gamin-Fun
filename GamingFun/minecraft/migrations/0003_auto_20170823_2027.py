# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-08-23 17:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('minecraft', '0002_minecraftuser_last_payment_notification'),
    ]

    operations = [
        migrations.AddField(
            model_name='minecraftnews',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение'),
        ),
        migrations.AddField(
            model_name='minecraftnews',
            name='image1',
            field=models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение'),
        ),
        migrations.AddField(
            model_name='minecraftnews',
            name='image2',
            field=models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение'),
        ),
        migrations.AddField(
            model_name='minecraftnews',
            name='image3',
            field=models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение'),
        ),
        migrations.AddField(
            model_name='minecraftnews',
            name='image4',
            field=models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение'),
        ),
        migrations.AddField(
            model_name='minecraftnews',
            name='image5',
            field=models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение'),
        ),
        migrations.AddField(
            model_name='minecraftnews',
            name='image6',
            field=models.ImageField(blank=True, null=True, upload_to='news/', verbose_name='Изображение'),
        ),
    ]
