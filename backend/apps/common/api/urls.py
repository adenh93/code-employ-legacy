from django.urls import path
from .views import (
    LookupCodeListView
)


urlpatterns = [
    path('codes/all',
         LookupCodeListView.as_view(), name="lookup-codes-all"),
]
