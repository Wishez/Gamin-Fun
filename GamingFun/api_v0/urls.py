from rest_framework.routers import DefaultRouter
from .views import  *

router = DefaultRouter()

router.register(r'minecraft/news', MinecraftNewsView, 'minecraft/news')#, 'minecraft/news')
router.register(r'samp/news', SampNewsView, 'samp/news')#, 'samp/news')

urlpatterns = router.urls