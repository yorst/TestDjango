from django.contrib import admin
from django.urls import path
from .views import index
from .views import atenciones
from .views import detalleTrabajo
# from  TestDjango import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', views.index, name="index"),
    # path('inicio', views.index, name="index"),
    # path('atenciones', views.atenciones, name="atenciones"),
    # path('detalle-trabajo', views.detalleTrabajo, name="detalleTrabajo")
    
    path('admin/', admin.site.urls),
    path('', index, name="index"),
    path('/index/', index, name="index"),
    path('/atenciones/', atenciones, name="atenciones"),
    path('/detalle-trabajo/', detalleTrabajo, name="detalleTrabajo")
]

