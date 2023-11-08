import React from 'react';
import NON from '../img/NON.gif';
import Yes from '../img/Yes.gif'
const Prediction = () => {
    const result = new URLSearchParams(window.location.search).get('result');
    let img; 
    if (result === 'The person is not diabetic') {
        img = <img src={NON} style={{width:500,height:250,marginLeft:550}} />
    } else if (result === 'The person is diabetic') {
        img = <img src={Yes} style={{ width: 500, height: 250, marginLeft: 550 }} />
    }
    return (
        <div>
            <h3 style={{ textAlign: 'center', }}><u>Prediction Result</u></h3>
            <p style={{ textAlign: 'center', fontSize: 30 }}>{result}</p>
            {img}
        </div>
    );
};

export default Prediction;
