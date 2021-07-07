from django.shortcuts import render
from core.models import Atencion
from rest_framework.response import Response
from .serializers import AtencionSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework import status

@csrf_exempt
@api_view(['GET','POST'])

def procesar_atenciones(request):
    if request.method == 'GET':
        atenciones = Atencion.objects.all()
        serializer = AtencionSerializer(atenciones, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AtencionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT','DELETE'])
def detalle_atencion(request, id):
    try:
        atencion = Atencion.objects.get(idAt=id)
    except Atencion.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = AtencionSerializer(atencion)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = AtencionSerializer(atencion,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data) 

    if request.method == 'DELETE':
        atencion.delete()
        return Response(status.HTTP_204_NO_CONTENT)