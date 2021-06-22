from django.shortcuts import render
from .models import Atencion, Contacto, Usuario, Trabajador

# Create your views here.

def index(request):
    return render(request,'core/index.html')

def atenciones(request):
    atencion = Atencion.objects.all()
    datos = {
        'atenciones': atencion
    }

    # formulario = {
    #     'form': 
    # }

    return render(request,'core/atenciones.html', datos)

def detalleTrabajo(request):
    return render(request,'core/detalleTrabajo.html')
