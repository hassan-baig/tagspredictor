# app.py
from flask import Flask, request
import json
import joblib
import numpy as np
from flask_cors import CORS, cross_origin  

app = Flask(__name__,
            static_url_path='',
            static_folder='client/build')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# List all models names (Add more models in the list)
models = [
    'LinearSVCOneVsRest',
    'LinearSVCModel'
]


def predict_tag(question, model, multi_labelled):
    loaded_model = joblib.load('ml_model/' + model +'.pkl')
    if(multi_labelled):
        order = np.argsort(loaded_model.predict_proba(question), axis=1)[:,-3:]
        prediction = loaded_model.classes_[order]
        return prediction
    else: 
        prediction = loaded_model.predict(question)
        return prediction



@app.route('/')
def root():
    return app.send_static_file('index.html')


@app.route('/api/predictor', methods=['POST'])
@cross_origin()
def predict():
    try:
        data = request.get_json()
        questions = data['questions']
        multi_labelled = None
        model = "LinearSVCModel"
        if('multi_labelled' in data): 
            multi_labelled = data['multi_labelled']
        if('model' in data and len(data['model']) > 0 ): 
            model = data['model']

        if questions and len(questions) > 0:
            predicted_tags = predict_tag(questions, model, multi_labelled)
            
            prediction = []
            i = 0
            for tag in predicted_tags:
                prediction.append({
                    'question': questions[i],
                    'tag': tag if isinstance(tag, str) else tag.tolist()
                })
                i = i + 1

            return {
                'error' : '0',
                'message' : 'Successfull',
                'prediction' : prediction
            }, 300
        else:
            return  {
                'error' : '1',
                'message': 'Invalid Parameters'                
            }, 401
    except Exception as e:
        return {
            'error' : '2',
            "message": str(e)
        }, 500



if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)