# -*- encoding: utf-8 -*-

from django.contrib import admin
from .models import *
# Register your models here.

class AdminNews(admin.ModelAdmin):
    list_display = ('title', 'created_at',)
    list_filter = ('title', 'created_at',)
    search_fields = ('title', 'created_at',)
    ordering = ('-created_at',)
    date_hierarchy = 'created_at'
    fieldsets = (
        (None, {
            'fields': (('title', 'created_at'),
                       ('text',),
                       ('image', 'image1', 'image2',),
                       ('image3', 'image4', 'image5', 'image6',),)
        }),
    )


class AdminUser(admin.ModelAdmin):
    list_display = ('user', 'status', 'balance', 'active_until', 'registered_at')
    list_filter = ('user', 'registered_at', 'status', 'active_until')
    search_fields = ('user', 'registered_at', 'status')
    ordering = ('-registered_at',)
    date_hierarchy = 'registered_at'
    fieldsets = (
        (None, {
            'fields': (('user',),
                       ('avatar',),

                       )
        }),
        ('Подписка', {
            'fields': (('status', 'active_until',),
                       ('balance', 'last_payment_notification',),)
        }),
    )

admin.site.register(MinecraftNews, AdminNews)
admin.site.register(MinecraftUser, AdminUser)


