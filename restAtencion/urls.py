from django.urls import path
from .views import procesar_atenciones, detalle_atencion

urlpatterns = [
    path('atenciones/', procesar_atenciones, name="procesar_atenciones"),
    path('atenciones/<id>', detalle_atencion, name="detalle_atencion")
]