from mixer.backend.django import mixer
from django.urls import reverse
from rest_framework.test import APITransactionTestCase, APIClient
from rest_framework.views import status
from ..models import ProgrammingLanguage, LocationCountryCode
from ..api.serializers import LookupCodeListSerializer


class LookupCodeListViewTest(APITransactionTestCase):
    client = APIClient()
    reset_sequences = True

    def setUp(self):
        mixer.cycle(3).blend(
            ProgrammingLanguage,
        )
        mixer.cycle(3).blend(
            LocationCountryCode
        )


class GetLookupCodesTests(LookupCodeListViewTest):

    def test_get_lookup_codes(self):
        """
        This test asserts that all lookup code records added during
        setUp will be retrieved and serialized when making a GET request
        to the codes/all endpoint.
        """

        response = self.client.get(
            reverse("lookup-codes-all")
        )

        expected_languages = ProgrammingLanguage.objects.all()
        expected_countries = LocationCountryCode.objects.all()
        serialised = LookupCodeListSerializer(
            {'programming_languages': expected_languages, 'countries': expected_countries})

        self.assertEqual(response.data, serialised.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
