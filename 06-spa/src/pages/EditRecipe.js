import RecipeForm from "../components/RecipeForm"
export default function EditRecipe(props) {

    const handleEdit = (title, ingredients) =>{
    
        props.onEditRecipe({
            _id: props.recipe._id,
            title: title,
            ingredients: ingredients
        })
    }

    return <>
       <h1>Edit Recipe</h1>
       <RecipeForm 
            initialRecipe={props.recipe}
            onSubmit={handleEdit}
            buttonLabel="Update"/>
    </>
}