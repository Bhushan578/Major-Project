from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn import svm

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Load and preprocess the diabetes dataset
diabetes_dataset = pd.read_csv('diabetes.csv')
X = diabetes_dataset.drop(columns='Outcome', axis=1)
Y = diabetes_dataset['Outcome']
scaler = StandardScaler()
scaler.fit(X)
standardized_data = scaler.transform(X)

# Train the SVM classifier
classifier = svm.SVC(kernel='linear')
classifier.fit(standardized_data, Y)

@app.route('/', methods=['GET'])
def index():
    return 'Welcome to Diabetes Prediction API!'

@app.route('/predict', methods=['GET'])
def predict():
    # Get input data from the query parameter of the GET request
    input_data = request.args.get('input_data')

    # Split the input data string into a list of floats
    input_data_list = list(map(float, input_data.split(',')))

    # Convert the list to numpy array and reshape it for prediction
    input_data_array = np.asarray(input_data_list).reshape(1, -1)

    # Standardize the input data
    std_data = scaler.transform(input_data_array)

    # Make a prediction using the trained classifier
    prediction = classifier.predict(std_data)

    # Return the prediction as response
    if prediction[0] == 0:
        result = 'The person is not diabetic'
    else:
        result = 'The person is diabetic'

    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
