from django.urls import path
from .views import (
    ProgrammingLanguageListView
)


urlpatterns = [
    path('programming-languages/all',
         ProgrammingLanguageListView.as_view(), name="programming-languages-all"),
]
