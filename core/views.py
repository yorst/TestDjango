from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'core/index.html')

def atenciones(request):
    return render(request,'core/atenciones.html')

def detalleTrabajo(request):
    return render(request,'core/detalleTrabajo.html')