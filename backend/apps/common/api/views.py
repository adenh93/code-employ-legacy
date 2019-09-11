from rest_framework.response import Response
from rest_framework.views import APIView
from ..business.selectors import ProgrammingLanguageSelector, LocationSelector
from .serializers import ProgrammingLanguageSerializer, LookupCodeListSerializer


class LookupCodeListView(APIView):
    def get(self, request):
        languages = ProgrammingLanguageSelector.get_programming_languages()
        countries = LocationSelector.get_country_codes()
        serialized = LookupCodeListSerializer(
            {'programming_languages': languages, 'countries': countries})
        return Response(serialized.data)
