from typing import List
from datetime import datetime, timedelta
from django.http import Http404
from django.db.models import Q
from apps.core.managers import PagedResult
from ..enums import JobPositionType, JobListingState, SalaryFrequency
from ..models import JobListing, JobListingList
from ..api.serializers import JobListingSearchFilterSerializer


class JobListingSelector():

    @staticmethod
    def get_job_listing_by_id(id: int) -> JobListing:
        try:
            return JobListing.objects.get(id=id)
        except JobListing.DoesNotExist:
            raise Http404(f"JobListing with id {id} could not be found")

    @staticmethod
    def get_job_listings_by_status(status: JobListingState) -> List[JobListing]:
        return JobListing.objects.filter(status=status).all()

    @staticmethod
    def get_job_listings_ready_for_publish() -> List[JobListing]:
        return JobListing.objects.filter(
            Q(status=JobListingState.PREPUBLISH) &
            Q(date_to_publish__lte=datetime.now())
        )

    @staticmethod
    def get_job_listings_ready_for_expiry() -> List[JobListing]:
        return JobListing.objects.filter(
            Q(status=JobListingState.PUBLISHED) &
            Q(date_to_expire__lte=datetime.now())
        )

    @staticmethod
    def get_job_listings_ready_for_archive() -> List[JobListing]:
        return JobListing.objects.filter(
            (Q(status=JobListingState.CLOSED) |
             Q(status=JobListingState.EXPIRED)) &
            Q(date_closed__lte=(datetime.now() - timedelta(days=30)))
        )

    @staticmethod
    def get_paged_job_listings(filter: JobListingSearchFilterSerializer) -> PagedResult:
        query = Q()
        if filter.data['keyword']:
            query &= (
                Q(job_title__icontains=filter.data['keyword']) |
                Q(description__icontains=filter.data['keyword'])
            )
        if filter.data['position_type']:
            query &= Q(position_type=JobPositionType(
                filter.data['position_type']))
        if filter.data['salary_frequency']:
            query &= Q(salary_frequency=SalaryFrequency(
                filter.data['salary_frequency']
            ))
        if filter.data['salary_min']:
            query &= Q(salary__gte=filter.data['salary_min'])
        if filter.data['salary_max']:
            query &= Q(salary__lte=filter.data['salary_max'])
        if 'languages' in filter.data:
            query &= Q(languages__contained_by=filter.data['languages'])

        return JobListingList.objects.get_paginated(query, filter)
