# Generated by Django 3.2.15 on 2022-08-27 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('candidateApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='candidatemodel',
            name='status',
            field=models.CharField(blank=True, choices=[('Accepted', 'Accepted'), ('Rejected', 'Rejected'), ('Applied', 'Applied')], default='Applied', max_length=8),
        ),
    ]
