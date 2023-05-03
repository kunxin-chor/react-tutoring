import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);

  // the `e` is the `event` parameter
  // all functions for handling events in react MUST be arrow functions
  const updateWeight = (e) => {
    setWeight(e.target.value);
  }

  const showBMI = () => {
    setButtonPressed(true);
    
  }

  const checkIfNumber = (number) => {
    if (parseFloat(number)) {
      return true;
    } else {
      return false;
    }
  }

  let heightError = null;
  if (!parseFloat(height)) {
    heightError = <div className="invalid-feedback d-block">
      Height must be a number
    </div>
  }

  const displayButton = () =>{
    if (parseFloat(weight) && parseFloat(height)) {
      return <button className="btn btn-primary mt-3" onClick={showBMI}>Calculate</button>
    }
  }

  return (
    <>
      <div className="container">
        <h1>BMI calculator</h1>
        {
          (!parseFloat(weight) || !parseFloat(height)) ? <div className="alert alert-danger">
             Can only calculate if both weight and height are valid number values
             </div> : null
        }
        <div>
          <label>Weight</label>
          <input type="text" className="form-control" value={weight} onChange={updateWeight} />

      
        { !checkIfNumber(weight) &&
            <div className="invalid-feedback d-block">
              Please enter only numbers
            </div>
        }
        </div>
        <div>
          <label>Height</label>
          <input type="text" className="form-control" value={height} onChange={e => setHeight(e.target.value)} />
          { heightError }
        </div>
        { displayButton() }
       {
          buttonPressed ?  <div class="alert alert-success">
          The BMI is {weight / height ** 2}
        </div> : null
       }
      </div>
    </>
  );
}

export default App;
