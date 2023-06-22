export default function ShowAll(props) {
    return <>
        <h2>All Recipes</h2>
        {
            props.recipes.map(r =>
                <div className="card mt-2">
                    <div className="card-body">
                        <h4 className="card-title">{r.title}</h4>
                        <ul>
                            {r.ingredients.map(i => <li>{i}</li>)}
                        </ul>
                        <button className="mt-3 btn btn-primary" onClick={()=>{
                            // tell the parent the id of the recipe which is being edited
                            props.onEdit(r._id)
                        }}>Edit</button>
                    </div>
                </div>
            )
        }

    </>
}