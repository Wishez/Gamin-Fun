from rest_framework import serializers
from minecraft.models import MinecraftNews
from samp.models import SampNews

newsFields = (
    'id',
    'title',
    'text',
    'created_at',
)
class MinecraftNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model  =  MinecraftNews
        fields = (
            'id',
            'title',
            'text',
            'created_at',
        )

class SampNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SampNews
        fields = (
            'id',
            'title',
            'text',
            'created_at',
        )