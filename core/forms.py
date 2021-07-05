from .models import Atencion, Usuario, Trabajador, Contacto
from django.forms import ModelForm
from django import forms

class ContactoForm(ModelForm):
    class Meta:
        model = Contacto
        fields = ['email', 'nombre', 'celular', 'asunto', 'mensaje']

class UsuarioForm(ModelForm):
    class Meta:
        model = Usuario
        fields = ['email', 'nombre', 'contrasenha']

class ModificarForm(ModelForm):
    class Meta:
        model = Atencion
        fields = ['idAt','titulo','fecha','tipo_vehiculo','marca','modelo','tipo_atencion','descripcion','trabajador','usuario']