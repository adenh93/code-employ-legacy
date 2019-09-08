# Generated by Django 2.2.5 on 2019-09-07 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('job_listing', '0007_move_job_listing_response_models_to_job_listing_response_app'),
    ]

    operations = [
        migrations.RunSQL(
            [("""
                CREATE OR REPLACE VIEW job_listing_joblistinglistview AS
                SELECT
                joblisting.id,
                company.legal_name AS company_name,
                joblisting.job_title,
                joblisting.description,
                joblisting.position_type,
                joblisting.contract_length,
                joblisting.salary,
                joblisting.salary_frequency,
                array(SELECT pl.name
                    FROM job_listing_joblistinglanguage AS jll
                    INNER JOIN common_programminglanguage AS pl
                    ON pl.id = jll.language_id
                    AND jll.job_listing_id = joblisting.id) AS languages,
                joblisting.city,
                statecode.name AS state_name,
                countrycode.name AS country_name,
                joblisting.post_code,
                array(SELECT tag.title
                    FROM job_listing_joblistingtag AS jlt
                    INNER JOIN common_tag AS tag
                    ON tag.id = jlt.tag_id
                    AND jlt.job_listing_id = joblisting.id) AS tags,
                joblisting.created_date
                FROM job_listing_joblisting AS joblisting
                INNER JOIN company_company AS company
                    ON company.id = joblisting.company_id
                INNER JOIN common_locationstatecode AS statecode
                    ON statecode.id = joblisting.state_id
                INNER JOIN common_locationcountrycode AS countrycode
                    ON countrycode.id = joblisting.country_id
            """)],
            [("DROP VIEW IF EXISTS job_listing_joblistinglistview;")]
        )
    ]