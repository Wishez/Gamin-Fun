from django_cron import CronJobBase, Schedule
from .models import MinecraftUser
from django.utils import timezone
from threading import Thread

class WatchForUser(CronJobBase):
    RUN_EVERY_MINS = 5

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'minecraft.watch_for_user'

    def do(self):
        minecraft_users = MinecraftUser.objects.all()

        for user in minecraft_users:
            current_time = timezone.now()
            user_time = user.active_until
            if user_time and user_time <= current_time:
                thread = Thread(target=user.unsubscribe)
                thread.daemon = True
                thread.start()