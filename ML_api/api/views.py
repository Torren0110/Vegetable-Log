from django.shortcuts import HttpResponse
from django.http import JsonResponse
from .utils import makePrediction

# Create your views here.
def predict(req):
    if(req.method == "GET"):
        return JsonResponse({"data": makePrediction(req.GET)})

    return HttpResponse("Invalid request")