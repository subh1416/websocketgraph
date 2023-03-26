from django.urls import path
#now import the views.py file into this code
from . import views
urlpatterns=[
  path('', views.main_view, name='main_view'),
  
 
]