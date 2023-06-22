
import RecipeForm from "../components/RecipeForm"
export default function AddRecipe(props) {  

    const handleAddRecipe = (title, ingredients) => {
        props.addRecipe({
            title, ingredients
        })
    }

    return (<>
    <h2>Add New Recipe</h2>
       <RecipeForm onSubmit={handleAddRecipe}
                   buttonLabel="Create"/>
    </>)
}