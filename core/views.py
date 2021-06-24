from django.shortcuts import render
from .models import Atencion, Contacto, Usuario, Trabajador
from core.forms import UsuarioForm

# Create your views here.

def index(request):
    return render(request,'core/index.html')

def atenciones(request):
    atencion = Atencion.objects.all()

    datos = {
        'atenciones': atencion,
        'formPrueba': UsuarioForm()
    }

    if request.method == 'POST':
        formularioPrueba = UsuarioForm(request.POST)
        #if validacionUsuarioNuevo(formularioPrueba.email, formularioPrueba.contrasenha, formularioPrueba.nombre):
        if formularioPrueba.is_valid:
            formularioPrueba.save()
            datos['mensaje'] = "registro exitoso"
        else:
            datos['mensaje'] = "formulario no encontrado"
        # else:
        #     datos['mensaje'] = "datos inválidos"
    return render(request,'core/atenciones.html', datos)

def detalleTrabajo(request):
    return render(request,'core/detalleTrabajo.html')

def validacionUsuarioNuevo(email, contraseña, nombre):
    if len(contraseña) > 4 and len(nombre) > 3:
        #REVISAR MAIL
        if not isinstance(email, str) or not email or '@' not in email:
            return False
        
        body, domain = email.rsplit('@', 1)

        match_body = body_regex.match(body)
        match_domain = domain_regex.match(domain)

        if not match_domain:
            try:
                domain_encoded = domain.encode('idna').decode('ascii')
            except UnicodeError:
                return False
            match_domain = domain_regex.match(domain_encoded)

        return (match_body is not None) and (match_domain is not None)
    else:
        return false