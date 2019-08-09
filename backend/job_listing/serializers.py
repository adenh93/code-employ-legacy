from rest_framework import serializers
from company.serializers import CompanySerializer
from common.serializers import (
    LocationSerializer, ProgrammingLanguageSerializer
)
from .models import JobListing


class JobListingSerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    location = LocationSerializer()
    languages = ProgrammingLanguageSerializer(many=True)

    class Meta:
        model = JobListing
        fields = '__all__'
