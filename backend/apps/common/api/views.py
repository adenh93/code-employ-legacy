from rest_framework.response import Response
from rest_framework.views import APIView
from ..business.selectors import ProgrammingLanguageSelector
from .serializers import ProgrammingLanguageSerializer


class ProgrammingLanguageListView(APIView):
    def get(self, request):
        search_response = ProgrammingLanguageSelector.get_programming_languages()
        serialized = ProgrammingLanguageSerializer(search_response, many=True)
        return Response(serialized.data)
