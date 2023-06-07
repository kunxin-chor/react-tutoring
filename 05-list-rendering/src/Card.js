export default function Card(props) {
    return (<div className="card" key={props._id} style={{width:"18rem"}}>      
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <div className="card-text">
        <ul>
          <li>Calories: {props.calories}</li>
          <li>Nutigrade: {props.nutrigrade}</li>
        </ul>
      </div>
    </div>
  </div>)
}