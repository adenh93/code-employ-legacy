from django.http import Http404
from django.db.models import Q
from apps.common.utils import PagedResult
from ..enums import JobPositionType
from ..models import JobListing
from ..api.serializers import JobListingSearchFilterSerializer


class JobListingSelector():

    @staticmethod
    def get_job_listing_by_id(id: int) -> JobListing:
        try:
            return JobListing.objects.get(id=id)
        except JobListing.DoesNotExist:
            raise Http404(f"JobListing with id {id} could not be found")

    @staticmethod
    def get_paged_job_listings(filter: JobListingSearchFilterSerializer) -> PagedResult:
        query = Q()

        if 'keyword' in filter.data:
            query &= (
                Q(job_title__contains=filter.data['keyword']) |
                Q(description__contains=filter.data['keyword'])
            )
        if 'position_type' in filter.data:
            query &= Q(position_type=JobPositionType(filter.data['position_type']))
        if 'salary_min' in filter.data:
            query &= Q(salary__gte=filter.data['salary_min'])
        if 'salary_max' in filter.data:
            query &= Q(salary__lte=filter.data['salary_max'])
        if 'languages' in filter.data:
            query &= Q(languages__id__in=filter.data['languages'])

        job_listings = JobListing.objects.get_paginated(query, filter)
        record_count = JobListing.objects.all().count()

        return PagedResult(items=job_listings, record_count=record_count)