from django.urls import path
from .views import procesar_atenciones, detalle_atencion
from .viewslogin import login

urlpatterns = [
    path('atenciones/', procesar_atenciones, name="procesar_atenciones"),
    path('atenciones/<id>', detalle_atencion, name="detalle_atencion"),
    path('login/', login, name="login")
]