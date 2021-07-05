# Generated by Django 3.2.3 on 2021-07-05 22:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('email', models.CharField(max_length=50, primary_key=True, serialize=False, verbose_name='Email contacto')),
                ('nombre', models.CharField(max_length=50, verbose_name='Nombre contacto')),
                ('celular', models.CharField(max_length=50, verbose_name='Celular contacto')),
                ('asunto', models.CharField(max_length=50, verbose_name='Asunto contacto')),
                ('mensaje', models.CharField(max_length=50, verbose_name='Mensaje contacto')),
            ],
        ),
        migrations.CreateModel(
            name='Trabajador',
            fields=[
                ('email', models.CharField(max_length=50, primary_key=True, serialize=False, verbose_name='Email trabajador')),
                ('nombre', models.CharField(max_length=50, verbose_name='Nombre trabajador')),
                ('contra', models.CharField(max_length=50, verbose_name='Contra trabajador')),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('email', models.CharField(max_length=50, primary_key=True, serialize=False, verbose_name='Email usuario')),
                ('nombre', models.CharField(max_length=50, verbose_name='Nombre usuario')),
                ('contrasenha', models.CharField(max_length=25, verbose_name='Contraseña usuario')),
            ],
        ),
        migrations.CreateModel(
            name='Atencion',
            fields=[
                ('idAt', models.CharField(max_length=40, primary_key=True, serialize=False, verbose_name='Id')),
                ('titulo', models.CharField(max_length=50, verbose_name='Titulo atencion')),
                ('fecha', models.CharField(max_length=50, verbose_name='Fecha atencion')),
                ('tipo_vehiculo', models.CharField(max_length=50, verbose_name='Tipo vehiculo atencion')),
                ('marca', models.CharField(blank=True, max_length=50, null=True, verbose_name='Marca atencion')),
                ('modelo', models.CharField(blank=True, max_length=50, null=True, verbose_name='Modelo atencion')),
                ('tipo_atencion', models.CharField(max_length=50, verbose_name='Tipo atencion atencion')),
                ('descripcion', models.CharField(max_length=50, verbose_name='Descripcion atencion')),
                ('trabajador', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.trabajador')),
                ('usuario', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.usuario')),
            ],
        ),
    ]
