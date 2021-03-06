# Generated by Django 2.2.5 on 2019-09-21 04:20

import apps.job_listing.enums
import django.contrib.postgres.fields
from django.db import migrations, models
import enumchoicefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('job_listing', '0008_add_job_listing_list_database_view'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobListingList',
            fields=[
                ('id', models.BigIntegerField(primary_key=True, serialize=False)),
                ('company_name', models.TextField()),
                ('job_title', models.TextField()),
                ('description', models.TextField()),
                ('position_type', enumchoicefield.fields.EnumChoiceField(enum_class=apps.job_listing.enums.JobPositionType, max_length=8)),
                ('contract_length', models.IntegerField()),
                ('salary', models.IntegerField()),
                ('salary_frequency', enumchoicefield.fields.EnumChoiceField(enum_class=apps.job_listing.enums.SalaryFrequency, max_length=12)),
                ('languages', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), size=None)),
                ('city', models.TextField()),
                ('state_name', models.TextField()),
                ('country_name', models.TextField()),
                ('post_code', models.TextField()),
                ('tags', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), size=None)),
                ('created_date', models.DateTimeField()),
            ],
            options={
                'db_table': 'job_listing_joblistinglistview',
                'managed': False,
            },
        ),
        migrations.AddField(
            model_name='joblisting',
            name='published_date',
            field=models.DateField(null=True),
        ),
    ]
