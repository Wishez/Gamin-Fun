from rest_framework import serializers
from minecraft.models import MinecraftNews

newsFields = (
    'id',
    'title',
    'text',
    'created_at',
)

class MinecraftNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model  =  MinecraftNews
        fields = newsFields

# class SampNewsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SampNews
#         fields = newsFields