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
                       ('text',),)
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
                       ('balance',),)
        }),
    )

admin.site.register(MinecraftNews, AdminNews)
admin.site.register(MinecraftUser, AdminUser)


