from .models import Atencion, Usuario, Trabajador, Contacto
from django.forms import ModelForm
from django import forms

class ContactoForm(ModelForm):
    class Meta:
        model = Contacto
        fields = ['email', 'nombre', 'celular', 'asunto', 'mensaje']

# class PruebaForm(ModelForm):
#     class Meta:
#         model = Contacto
#         fields = ['email', 'nombre', 'celular', 'asunto', 'mensaje']