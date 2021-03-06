# Generated by Django 2.2.4 on 2019-08-09 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.TextField(max_length=255, unique=True)),
                ('password_hash', models.TextField(max_length=255)),
                ('first_name', models.TextField(max_length=255)),
                ('surname', models.TextField(max_length=255)),
                ('account_type', models.TextField(max_length=100)),
                ('date_inactive', models.DateTimeField(default=None, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
