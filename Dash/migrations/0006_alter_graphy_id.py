# Generated by Django 3.2.15 on 2022-10-06 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dash', '0005_auto_20221006_2211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='graphy',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
