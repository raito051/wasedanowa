from django.db import models

class Event_Model(models.Model):
    name = models.CharField(max_length=255)
    images = models.CharField(max_length=100)
    
class Event_Motion_Model(models.Model):
    name = models.CharField(max_length=255)
    images = models.CharField(max_length=100)
