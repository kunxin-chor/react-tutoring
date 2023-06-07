import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card";
function App() {

  const [fruits] = useState(["apples", "oranges", "bananas", "pineapples", "apples"]);
  const [drinks, setDrinks] = useState([
    {
      "_id": 1,
      "name":"Coke Zero",
      "calories": 0,
      "nutrigrade":"A"
    },
    {
      "_id": 2,
      "name":"Coke",
      "calories": 200,
      "nutrigrade": "C"
    },
    {
      "_id": 3,
      "name":"Milo",
      "calories": 300,
      "nutrigrade": "E"
    }
  ])

  // when we have an array of JSX elements, and we display it by making it part of an
  // expression, each of them will be processed in sequence
  const arr = [<p>Apples</p>, <p>Oranges</p>, <p>Bananas</p>, <p>Pineapples</p>]  

  const printFruits = () => {
    let output = [];
    for (let i = 0; i < fruits.length; i++) {
      output.push(<li key={i}>{fruits[i]}</li>)
    }
    return output;
  }

  return (
    <>
    <ul>
     {printFruits()}
    </ul>

    <ol>
      {/* return the array [<li>apples</li>, <li>oranges</li>...] 
          When using keys, it's important that every key in the list is unique      
      */}
      {
        fruits.map( (f,index) => <li key={index}>{f}</li>)        
      }
    </ol>

    {
      // drinks.map( d=> <Card _id={d._id}
      //                       name={d.name}
      //                       calories={d.calories}
      //                       nutrigrade={d.nutrigrade}/>)

      // Rendering a list of component
      drinks.map( d => <Card {...d} />)
    }

    </>
  );
}

export default App;
