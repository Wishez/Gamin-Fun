# -*- encoding: utf-8 -*-

from minecraft.models import MinecraftUser
from django.dispatch import receiver
from django.db.models.signals import post_delete

@receiver(post_delete, sender=MinecraftUser)
def delete_user(sender, instance, *args, **kwargs):
    if instance.user:
        instance.user.delete()