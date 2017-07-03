from django.db import models
from minecraft.models import *
# Create your models here.
class SampNews(MinecraftNews):
    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

class SampUser(MinecraftUser):
    class Meta:
        verbose_name = 'Игрок'
        verbose_name_plural = 'Игроки'
