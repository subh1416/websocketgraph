# Generated by Django 3.2.15 on 2022-10-06 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dash', '0003_alter_graph_time'),
    ]

    operations = [
        migrations.CreateModel(
            name='Graphs',
            fields=[
                ('id', models.IntegerField(help_text='primary key', primary_key=True, serialize=False)),
                ('Temperature', models.IntegerField(verbose_name='Temperature')),
                ('Time', models.IntegerField(verbose_name='Time')),
            ],
        ),
        migrations.DeleteModel(
            name='Graph',
        ),
    ]
