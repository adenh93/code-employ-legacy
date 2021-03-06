# Generated by Django 2.2.5 on 2019-09-25 09:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0004_added_type_property_to_location_state_code_model'),
    ]

    operations = [
        migrations.AlterField(
            model_name='locationstatecode',
            name='country',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='states', to='common.LocationCountryCode'),
        ),
        migrations.CreateModel(
            name='LocationCityCode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=255)),
                ('state', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='common.LocationStateCode')),
            ],
        ),
    ]
