from rest_framework import serializers
from ..models import JobListing, JobListingList
from ..enums import JobPositionType
from apps.company.api.serializers import CompanySerializer
from apps.common.api.serializers import (
    ProgrammingLanguageSerializer, PaginationFilterSerializer,
    PagedResponseSerializer, LocationStateCodeSerializer,
    LocationCountryCodeSerializer
)


class JobListingSerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    state = LocationStateCodeSerializer()
    country = LocationCountryCodeSerializer()
    languages = ProgrammingLanguageSerializer(many=True)

    class Meta:
        model = JobListing
        fields = '__all__'


class JobListingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobListingList
        fields = '__all__'


class JobListingEditSerializer(serializers.Serializer):
    company_id = serializers.IntegerField()
    job_title = serializers.CharField(max_length=255)
    description = serializers.CharField()
    position_type = serializers.IntegerField()
    contract_length = serializers.IntegerField(required=False)
    salary = serializers.IntegerField(required=False)
    salary_frequency = serializers.IntegerField(required=False)
    country = serializers.IntegerField()
    state = serializers.IntegerField()
    city = serializers.CharField(max_length=100)
    post_code = serializers.CharField(max_length=10)
    languages = serializers.ListField(
        child=serializers.IntegerField()
    )
    tags = serializers.ListField(
        child=serializers.CharField(max_length=40)
    )


class JobListingSearchFilterSerializer(PaginationFilterSerializer):
    keyword = serializers.CharField(
        max_length=100, allow_blank=True, default=None, allow_null=True)
    languages = serializers.ListField(
        child=serializers.CharField(),
        required=False
    )
    position_type = serializers.IntegerField(allow_null=True, default=None)
    salary_frequency = serializers.IntegerField(allow_null=True, default=None)
    salary_min = serializers.IntegerField(allow_null=True, default=None)
    salary_max = serializers.IntegerField(allow_null=True, default=None)


class JobListingSearchResponseSerializer(PagedResponseSerializer):
    items = JobListingListSerializer(many=True)


class JobListingPublishSerializer(serializers.Serializer):
    date_to_publish = serializers.DateTimeField()
    date_to_expire = serializers.DateField()
