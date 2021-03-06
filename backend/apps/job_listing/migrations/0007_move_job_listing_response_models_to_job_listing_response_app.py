# Generated by Django 2.2.4 on 2019-08-18 07:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('job_listing', '0006_add_closed_date_and_rename_expiry_date_publish_date_on_job_listing_model')
    ]

    database_operations = [
        migrations.AlterModelTable('JobListingResponse', 'job_listing_response_joblistingresponse'),
        migrations.AlterModelTable('JobListingResponseOutcome', 'job_listing_response_joblistingresponseoutcome'),
        migrations.AlterModelTable('JobListingResponseDocument', 'job_listing_response_joblistingresponsedocument')
    ]

    state_operations = [
        migrations.DeleteModel('JobListingResponse'),
        migrations.DeleteModel('JobListingResponseOutcome'),
        migrations.DeleteModel('JobListingResponseDocument')
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=database_operations,
            state_operations=state_operations
        )
    ]
