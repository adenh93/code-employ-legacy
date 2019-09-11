from mixer.backend.django import mixer
from django.urls import reverse
from rest_framework.test import APITransactionTestCase, APIClient
from rest_framework.views import status
from ..models import ProgrammingLanguage
from ..api.serializers import ProgrammingLanguageSerializer


class ProgrammingLanguageListViewTest(APITransactionTestCase):
    client = APIClient()
    reset_sequences = True

    def setUp(self):
        mixer.cycle(3).blend(
            ProgrammingLanguage,
        )


class GetProgrammingLanguagesTests(ProgrammingLanguageListViewTest):

    def test_get_programming_languages(self):
        """
        This test asserts that all ProgrammingLanguage records added during
        setUp will be retrieved and serialized when making a GET request
        to the programming-languages/all endpoint.
        """

        response = self.client.get(
            reverse("programming-languages-all")
        )

        expected = ProgrammingLanguage.objects.all()
        serialised = ProgrammingLanguageSerializer(expected, many=True)

        self.assertEqual(response.data, serialised.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
