from django.urls import path
from .consumers import GraphConsumer
from Dash import consumers


ws_urlpatterns = [
    path('ws/Dash/', GraphConsumer.as_asgi()),
    # path('ws/Dash',consumers.TableData.as_asgi())
    
]