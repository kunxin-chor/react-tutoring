
import {useState} from 'react'
export default function RecipeForm(props) {
    const [title, setTitle] = useState(props.initialRecipe ? props.initialRecipe.title : "");
    // suppose that it is a comma delimited list
    const [ingredients, setIngredients] = useState(props.initialRecipe ? props.initialRecipe.ingredients.join(",") : "");

    const handleSubmit = () => {
        props.onSubmit(title, ingredients)
    }

    return <>
     <div className="form-group">
            <label>Title:</label>
            <input type="text" className="form-control" 
                      value={title}
                      onChange={e=>setTitle(e.target.value)}
                      
                      />            
        </div>
        <div className="form-group">
            <label>Ingredients</label>
            <input type="text" className="form-control" 
                    value={ingredients}
                    onChange={e=>setIngredients(e.target.value)}/>
        </div>
        <button onClick={handleSubmit}>{props.buttonLabel ? props.buttonLabel : "Submit"}</button>
    </>
}