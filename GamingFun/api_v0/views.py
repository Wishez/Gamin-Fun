from rest_framework import viewsets
from .serializers import *
# Create your views here.

class MinecraftNewsView(viewsets.ReadOnlyModelViewSet):
    queryset =  MinecraftNews.objects.all()
    serializer_class = MinecraftNewsSerializer

# class SampNewsView(viewsets.ReadOnlyModelViewSet):
#     queryset =  SampNews.objects.all()
#     serializer_class = SampNewsSerializer