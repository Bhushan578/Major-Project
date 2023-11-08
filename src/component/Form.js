import React, { useState } from 'react';
import axios from 'axios';
import '../Screens/index.css';

const Form = () => {
    const [formData, setFormData] = useState({
        Pregnancies: '',
        Glucose: '',
        BloodPressure: '',
        SkinThickness: '',
        Insulin: '',
        BMI: '',
        DiabetesPedigreeFunction: '',
        Age: '',
    });
    const [prediction, setPrediction] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form an array from input data
        const inputArray = Object.values(formData);

        // Make a GET request to the Flask endpoint
        try {
            const response = await axios.get(
                `http://localhost:5000/predict?input_data=${inputArray.join(',')}`
            );

            // Handle the response here (for example, set a state with the prediction result)
            const result = response.data.prediction;
            console.log(result);
            setPrediction(result);

            // Redirect to the new page with the prediction result as a URL parameter
            window.location.href = `/prediction?result=${result}`;
        } catch (error) {
            // Handle errors if any
            console.error(error);
        }
    };

    return (
        <div>
            <div style={{ padding: 60 }}>
                <h1 style={{ textAlign: 'center', fontSize: 50 }}>Diabetes Survey Form</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={handleSubmit}>  
                    <label style={{ fontSize: 20 }}>
                        Pregnancies:
                        <input
                            type="number"
                            name="Pregnancies"
                            value={formData.Pregnancies}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <label style={{ fontSize: 20 }}>
                        Glucose:
                        <input
                            type="number"
                            name="Glucose"
                            value={formData.Glucose}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <label style={{ fontSize: 20 }}>
                        BloodPressure:
                        <input
                            type="number"
                            name="BloodPressure"
                            value={formData.BloodPressure}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <label style={{ fontSize: 20 }}>
                        SkinThickness:
                        <input
                            type="number"
                            name="SkinThickness"
                            value={formData.SkinThickness}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <label style={{ fontSize: 20 }}>
                        Insulin:
                        <input
                            type="number"
                            name="Insulin"
                            value={formData.Insulin}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <label style={{ fontSize: 20 }}>
                        BMI:
                        <input
                            type="number"
                            name="BMI"
                            value={formData.BMI}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <label style={{ fontSize: 20 }}>
                        DiabetesPedigreeFunction:
                        <input
                            type="number"
                            name="DiabetesPedigreeFunction"
                            value={formData.DiabetesPedigreeFunction}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <label style={{ fontSize: 20 }}>
                        Age:
                        <input
                            type="number"
                            name="Age"
                            value={formData.Age}
                            onChange={handleInputChange}
                            style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeft: 0, borderRight: 0, marginLeft: 10 }}
                        />
                    </label><br />
                    <button
                        type="submit"
                        style={{
                            marginTop: 20,
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingRight: 20,
                            paddingLeft: 20,
                            fontSize: 20,
                            fontWeight: 600,
                            border: 0,
                            backgroundColor: '#000',
                            color: '#ffff',
                            borderRadius: 20,
                        }}
                    >
                        Predict
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
