from django.db import models

# MODELO USUARIO

class Usuario(models.Model):
    email = models.CharField(primary_key=True, max_length=50, verbose_name='Email usuario')
    nombre = models.CharField(max_length=50, verbose_name='Nombre usuario')
    contrasenha = models.CharField(max_length=25 , verbose_name='Contraseña usuario')

    def __str__(self):
        return self.email

    def __str__(self):
        return self.contrasenha

    def __str__(self):
        return self.nombre


# MODELO CONTACTO
class Contacto(models.Model):
    email = models.CharField(primary_key=True, max_length=50, verbose_name='Email contacto')
    nombre = models.CharField(max_length=50, verbose_name='Nombre contacto')
    celular = models.CharField(max_length=50, verbose_name='Celular contacto')
    asunto = models.CharField(max_length=50, verbose_name='Asunto contacto')
    mensaje = models.CharField(max_length=50, verbose_name='Mensaje contacto')

    def __str__(self):
        return self.email

    def __str__(self):
        return self.nombre

    def __str__(self):
        return self.celular
    
    def __str__(self):
        return self.asunto

    def __str__(self):
        return self.mensaje



# MODELO TRABAJADOR

class Trabajador(models.Model):
    email = models.CharField(primary_key=True, max_length=50, verbose_name='Email trabajador')
    nombre = models.CharField(max_length=50, verbose_name='Nombre trabajador')
    contra = models.CharField(max_length=50, verbose_name='Contra trabajador')

    def __str__(self):
        return self.email

    def __str__(self):
        return self.contra

    def __str__(self):
        return self.nombre
    
    def __str__(self):
        return self.rut



# MODELO ATENCIONES

class Atencion(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, null=True)
    trabajador = models.ForeignKey(Trabajador, on_delete=models.CASCADE, null=True)
    idAt = models.CharField(primary_key=True, max_length=40, verbose_name='Id')
    titulo = models.CharField(max_length=50, verbose_name='Titulo atencion')
    fecha = models.CharField(max_length=50, verbose_name='Fecha atencion')
    tipo_vehiculo = models.CharField(max_length=50, verbose_name='Tipo vehiculo atencion')
    marca = models.CharField(null=True, blank=True, max_length=50, verbose_name='Marca atencion')
    modelo = models.CharField(null=True, blank=True, max_length=50, verbose_name='Modelo atencion')
    tipo_atencion = models.CharField(max_length=50, verbose_name='Tipo atencion atencion')
    descripcion = models.CharField(max_length=50, verbose_name='Descripcion atencion')
    # mecanico = models.CharField(max_length=50, verbose_name='Mecanico atencion')
    # imagen = models.ImageField(verbose_name='Mecanico atencion')

    def str(self):
        return self.idAt

    def str(self):
        return self.titulo

    def str(self):
        return self.fecha

    def str(self):
        return self.tipo_vehiculo

    def str(self):
        return self.marca

    def str(self):
        return self.modelo

    def str(self):
        return self.tipo_atencion

    def str(self):
        return self.descripcion