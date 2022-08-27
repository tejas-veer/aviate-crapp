

import imp
from django.shortcuts import render,HttpResponse


# from django.http import JsonResponse
# from rest_framework.parsers import JSONParser
# from django.views.decorators.csrf import csrf_exempt

# from rest_framework.decorators import api_view
# from rest_framework.response import Response 
# from rest_framework import status

# from rest_framework.decorators import APIView
# from django.http import Http404

# from rest_framework import generics
# Create your views here.
from .models import candidateModel
from django.contrib.auth.models import User
from .serializers import CandidateSerializer,UserSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import BasicAuthentication,TokenAuthentication

def index(request):
    return HttpResponse('<h2> Welecome to Candidate System API </h2> Access API : <a href="https://candidate-system.herokuapp.com/api/candi/">https://candidate-system.herokuapp.com/api/candi/<a/>')

class CandidateModelViewSet(ModelViewSet):
    # authentication_classes = [TokenAuthentication]
    queryset = candidateModel.objects.all()
    serializer_class = CandidateSerializer

class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


'''
class CandidateList(generics.ListCreateAPIView):
    queryset = candidateModel.objects.all()
    serializer_class = CandidateSerializer

class CandidateDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = candidateModel.objects.all()
    serializer_class = CandidateSerializer

'''


'''
class CandidateList(APIView):
    def get(self , request):
        candidates = candidateModel.objects.all()
        serial = CandidateSerializer(candidates , many=True)
        return Response(serial.data)

    def post(self , request):
        print(request)
        serial = CandidateSerializer(data=request.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data ,status=status.HTTP_201_CREATED)
        else:
            return Response( serial.errors , status=s----tatus.HTTP_400_BAD_REQUEST)

class CandidateDetails(APIView):

    def get_object(self , id):
        try:
            candidate = candidateModel.objects.get(id=id)
            return candidate
        except:
            raise Http404
    
    def get(self , request , id):
        serial = CandidateSerializer(self.get_object(id))
        return Response(serial.data)

    def put(self ,request , id):
        serial = CandidateSerializer(self.get_object(id) , data=request.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data)
        else:
            Response(serial.errors , status=status.HTTP_400_BAD_REQUEST)

    def delete(self , request , id):
        self.get_object(id).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

'''

'''
def candidate_list(request):
    if request.method == 'GET':
        candidates = candidateModel.objects.all()
        serial = CandidateSerializer(candidates , many=True)
        return Response(serial.data)

    elif request.method == 'POST':
        print(request)
        serial = CandidateSerializer(data=request.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data ,status=status.HTTP_201_CREATED)
        else:
            return Response( serial.errors , status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','PUT' , 'DELETE'])
def candidate_details(request , id):

    try:
        candidate = candidateModel.objects.get(id=id)
    except:
        return HttpResponse('NOT FOUND',status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serial = CandidateSerializer(candidate)
        return Response(serial.data)

    elif request.method == 'PUT':
        serial = CandidateSerializer(candidate , data=request.data)
        if serial.is_valid():
            serial.save();
            return Response(serial.data)
        else:
            return Response(serial.errors , status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        candidate.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

'''

