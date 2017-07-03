# -*- encoding: utf-8 -*-

from django.contrib import admin
from minecraft.admin import AdminNews, AdminUser
from .models import *
# Register your models here.

admin.site.register(SampNews, AdminNews)
admin.site.register(SampUser, AdminUser)
