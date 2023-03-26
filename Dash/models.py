from django.db import models

# Create your models here.
class Data(models.Model):
    Temperature= models.IntegerField()
    Battery = models.IntegerField()
    Gyro = models.IntegerField()
    Current = models.IntegerField()
    Time=models.IntegerField()
    
    