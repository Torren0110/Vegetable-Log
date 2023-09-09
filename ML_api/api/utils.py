from keras.models import load_model
import numpy as np
import pandas as pd

MODEL = load_model("api/ML_model/model.h5")

def preprocess(data):
    data = data.copy()

    data['Vegetable'] = data['Vegetable'].replace({
        'cabage': 1,
        'radish': 2,
        'potato': 3,
        'tomato ': 4,
        'peas': 5,
        'pumkin': 6,
        'cucumber': 7,
        'pointed grourd ': 8,
        'Raddish': 9,
        'Bitter gourd': 10,
        'onion': 11,
        'ginger': 12,
        'garlic': 13,
        'califlower': 14,
        'brinjal': 15,
        'okra': 16,
        'chilly': 17,
    })

    data['Disaster'] = data['Disaster'].replace({'false' : 0,'true' : 1})

    data['Month'] = data['Month'].replace({
        'jan' : 1,
        'feb':2 ,
        'mar':3,
        'apr':4,
        'may':5,
        'jun':6 ,
        'jul':7,
        'aug':8,
        'sep':9,
        'oct':10,
        'nov':11,
        'dec' : 12,
        ' ' : np.NaN
    })

    data['Month'] = data['Month'].fillna(data['Month'].mode()[0])

    data['Vegetable condition'] = data['Vegetable condition'].replace({'fresh' : 0,'avarage':1,'scrap':2})

    data['Season'] = data['Season'].replace({'winter' : 0,'summer':1,'spring':2,'autumn': 3,'monsoon':4})

    return data

def makePrediction(data):
    data = pd.DataFrame({
        "Vegetable": data["name"],
        "Season": data['season'],
        "Month": data['month'],
        "Temp" : [int(data['temp'])],
        "Disaster": data['disaster'],
        "Vegetable condition": data['condition']
    })

    data = preprocess(data)


    res = int(MODEL.predict(data.values)[0][0])

    return res