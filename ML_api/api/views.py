from django.shortcuts import HttpResponse
from django.http import JsonResponse
from keras.models import load_model
import numpy as np
import json

# Create your views here.
def predict(req):
    if(req.method == "GET"):
        model = load_model("api/ML_model/model.h5")
    #     print(model.predict(np.array([[ 3.,  0.,  1., 15.,  0.,  0.],
    #    [ 4.,  0.,  1., 15.,  0.,  0.],
    #    [ 5.,  0.,  1., 15.,  0.,  0.],
    #    [ 6.,  0.,  1., 15.,  0.,  0.]])))
        data = json.loads(req.body.decode('utf-8'))
        return JsonResponse(data)

    return HttpResponse("Invalid request")