from rest_framework import serializers
from core.models import Atencion

class AtencionSerializer(serializers.ModelSerializer):
    class Meta:
            model = Atencion
            fields = ['idAt','titulo','fecha','tipo_vehiculo','marca','modelo','tipo_atencion','descripcion','trabajador','usuario']