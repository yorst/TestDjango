from django.contrib import admin
from django.urls import path
from . import views
from .views import index
from .views import atenciones
from .views import detalleTrabajo
from .views import modificarAtencion
# from  TestDjango import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', views.index, name="index"),
    # path('inicio', views.index, name="index"),
    # path('atenciones', views.atenciones, name="atenciones"),
    # path('detalle-trabajo', views.detalleTrabajo, name="detalleTrabajo")
    
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('index.html/', views.index, name="index"),
    path('atenciones.html/', views.atenciones, name="atenciones"),
    path('atenciones.html/detalleTrabajo.html/', views.detalleTrabajo, name="detalleTrabajo"),
    path('atenciones.html/modificarAtencion.html/', views.modificarAtencion, name="modificarAtencion")
]
