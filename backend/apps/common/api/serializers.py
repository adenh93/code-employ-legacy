from rest_framework import serializers
from ..models import (
    ProgrammingLanguage,
    LocationStateCode,
    LocationCountryCode
)


class ProgrammingLanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLanguage
        fields = '__all__'


class LocationStateCodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocationStateCode
        fields = ['id', 'code', 'name', 'type']


class LocationCountryCodeSerializer(serializers.ModelSerializer):
    states = LocationStateCodeSerializer(many=True)

    class Meta:
        model = LocationCountryCode
        fields = '__all__'


class PaginationFilterSerializer(serializers.Serializer):
    current_page = serializers.IntegerField(default=1)
    items_per_page = serializers.IntegerField(default=15)
    order_by_column = serializers.CharField(max_length=100, default='id')
    order_direction = serializers.IntegerField(default=0)


class PagedResponseSerializer(serializers.Serializer):
    record_count = serializers.IntegerField()


class LookupCodeListSerializer(serializers.Serializer):
    programming_languages = ProgrammingLanguageSerializer(many=True)
    countries = LocationCountryCodeSerializer(many=True)
