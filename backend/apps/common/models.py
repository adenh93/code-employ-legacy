from django.db import models


class Tag(models.Model):
    title = models.TextField(null=False, max_length=40)


class LocationCountryCode(models.Model):
    code = models.TextField(null=False, max_length=10)
    name = models.TextField(null=False, max_length=255)


class LocationStateCode(models.Model):
    country = models.ForeignKey(
        LocationCountryCode,
        related_name='states',
        on_delete=models.CASCADE
    )
    code = models.TextField(null=False, max_length=10)
    name = models.TextField(null=False, max_length=255)
    type = models.TextField(null=False, max_length=255)


class LocationCityCode(models.Model):
    state = models.ForeignKey(
        LocationStateCode,
        on_delete=models.CASCADE
    )
    name = models.TextField(null=False, max_length=255)


class ProgrammingLanguage(models.Model):
    name = models.TextField(null=False, max_length=100)


class File(models.Model):
    file_bytes = models.BinaryField(null=False)
    created_date = models.DateTimeField(null=False, auto_now_add=True)
