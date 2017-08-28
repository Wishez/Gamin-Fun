from rest_framework.routers import DefaultRouter
from .views import  *

router = DefaultRouter()

router.register(r'minecraft/news', MinecraftNewsView, 'minecraft/news')

urlpatterns = router.urls