from django.contrib import admin
from .models import Atencion, Trabajador, Usuario, Contacto

# Register your models here.

admin.site.register(Trabajador)
admin.site.register(Usuario)
admin.site.register(Contacto)
admin.site.register(Atencion)