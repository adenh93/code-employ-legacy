# Generated by Django 2.2.4 on 2019-08-18 01:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_listing', '0005_add_expiry_date_publish_date_and_status_columns_to_job_listing_model'),
    ]

    operations = [
        migrations.RenameField(
            model_name='joblisting',
            old_name='posted_date',
            new_name='created_date',
        ),
        migrations.RenameField(
            model_name='joblisting',
            old_name='publish_date',
            new_name='date_to_publish',
        ),
        migrations.RemoveField(
            model_name='joblisting',
            name='expiry_date',
        ),
        migrations.AddField(
            model_name='joblisting',
            name='closed_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='joblisting',
            name='date_to_expire',
            field=models.DateField(null=True),
        ),
    ]
