# Generated by Django 2.2.4 on 2019-08-09 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0001_initial'),
        ('applicant', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='applicant',
            name='date_of_birth',
        ),
        migrations.AddField(
            model_name='applicant',
            name='languages',
            field=models.ManyToManyField(through='applicant.ApplicantLanguage', to='common.ProgrammingLanguage'),
        ),
    ]
