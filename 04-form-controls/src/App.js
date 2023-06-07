import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  const [name, setName] = useState("");

  // ask for their age group (children, young adult,  middle-age adults, elderly)
  const [ageGroup, setAgeGroup] = useState("");

  // ask for hobbies via checkboxes
  const [hobbies, setHobbies] = useState([]);

  // country
  const [country, setCountry] = useState('sg');

  const selectAgeGroup = e => {
    setAgeGroup(e.target.value);
  }

  const getIfChecked = radioButtonValue => ageGroup === radioButtonValue;

  const updateHobbies = e => {
    // the following doesn't work because we are supposed to update a state via the `set` function
    // so we should be using the `setHobbies` function

    // hobbies.push(e.target.value); // React only knows that a state has changed when it's memory address has changed
    // setHobbies(hobbies); 
    
    // The correct steps for updating an array in react

    // // 1. clone the original array (create a new totally new copy)
    // const cloned = hobbies.slice();  // slice will create a new array; it will recreate the entire array if not any given arguments
    // // 2. modify the clone
    // cloned.push(e.target.value);
    // // 3. replace the clone into the state
    // setHobbies(cloned);

    if (hobbies.includes(e.target.value)) {
      // remove the unchecked item

      // // 1. clone the original array
      // const cloned = hobbies.slice();

      // // 2. remove the unchecked item from the array (need know its index)
      // const indexToRemove = hobbies.findIndex( selectedHobby => selectedHobby === e.target.value);

      // cloned.splice(indexToRemove, 1); // splice has two arguments: first argument is where to start deleting
      //                                   // second argument: how many to delete

      // // replace the existing array with the cloned one
      // setHobbies(cloned);

      // we use filter to create a new array
      // so if the curren the hobby that we are looking at is not one we want to delete
      // return true so that it will be inside the modified array
      // const modified = hobbies.filter( h => h !== e.target.value);
      // setHobbies(modified);
      
      const indexToRemove = hobbies.findIndex(selectedHobby => selectedHobby === e.target.value);
      // const left = hobbies.slice(0, indexToRemove);  // use slice to extract an array from the start index to end index, the end index is not inclusive
      // const right = hobbies.slice(indexToRemove+1); // if we omit second arugment, slice will go all the way to the end
      // const combined = [...left, ...right];
      // setHobbies(combined);
      setHobbies([...hobbies.slice(0, indexToRemove), ...hobbies.slice(indexToRemove+1)]);
    } else {
      const modified = [...hobbies, e.target.value];
      setHobbies(modified);
    }

  }

  return (
    <>
      <div className="container">
        <h1>Survey Form</h1>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control"/>
        </div>
        <div className="form-group mt-3">
          <label>Age Group:</label><br/>
          {/* Two way binding with radio buttons. We need to set checked to be true or false depending on the `age group` state */}
          <input type="radio" name="age-group" value="children" onChange={selectAgeGroup} checked={getIfChecked("children")}/><label>Children (less than 18 yrs)</label><br/>
          <input type="radio" name="age-group" value="young-adults" onChange={selectAgeGroup} checked={getIfChecked("young-adults")}/><label>Young Adults (18 - 29 yrs)</label><br/>
          <input type="radio" name="age-group" value="middle-age-adults" onChange={selectAgeGroup} checked={getIfChecked('middle-age-adults')}/><label>Middle Age Adults (30 - 49 yrs)</label><br/>
          <input type="radio" name="age-group" value="seniors" onChange={selectAgeGroup} checked={getIfChecked('seniors')}/><label>Seniors (50 and above yrs old)</label>
        </div>
        <div className="form-group mt-3">
          <label>Hobbies</label>
          <div>
            <input type="checkbox" name="hobbies" value="running" className="form-check-input me-1" onChange={updateHobbies}/><label>Running</label><br/>
            <input type="checkbox" name="hobbies" value="sleeping" className="form-check-input me-1" onChange={updateHobbies}/><label>Sleeping</label><br/>
            <input type="checkbox" name="hobbies" value="swimming" className="form-check-input me-1" onChange={updateHobbies}/><label>Swimming</label><br/>
            <input type="checkbox" name="hobbies" value="reading" className="form-check-input me-1" onChange={updateHobbies}/><label>Reading</label><br/>
          </div>
        </div>
        <div className="mt-1">
          <label>Country</label>
          <select className="form-control" value={country} onChange={e => setCountry(e.target.value)}>
            <option value="sg">Singapore</option>
            <option value="my">Malaysia</option>
            <option value="in">Indonesia</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default App;
