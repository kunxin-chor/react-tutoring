import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import ShowAll from "./pages/ShowAll";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
function App() {

  const [page, setPage] = useState('show');
  const [recipes, setRecipes] = useState([
    {
      "_id": 1,
      "title": "Chicken Rice",
      "ingredients": ["rice", "chicken stock", "chicken breast"]
    },
    {
      "_id": 2,
      "title": "Duck Rice",
      "ingredients": ["rice", "duck stock", "duck meat"]
    }
  ])
  const [recipeToEdit, setRecipeToEdit] = useState({});
  
  const addRecipe = (recipe) => { 
    setRecipes([...recipes, {
      "_id": Math.floor(Math.random() * 10000 + 1),
      "title": recipe.title,
      "ingredients": recipe.ingredients.split(",")
    }]);
    setPage('show');
  }

  const beginEditRecipe = (id) => {
    const recipe = recipes.find( r => r._id === id);
    setRecipeToEdit(recipe);
    setPage('edit');

  }

  const editRecipe = (recipe) => {
    const index = recipes.findIndex( r => r._id === recipe._id);
    setRecipes([...recipes.slice(0, index), {
      _id: recipe._id,
      title: recipe.title,
      ingredients: recipe.ingredients.split(",")
    }, ...recipes.slice(index+1)])
    setPage('show')
  }

  const renderPage = () => {
    if (page === "show") {
      return <ShowAll recipes={recipes} onEdit={beginEditRecipe}/>
    } else if (page === "add") {
      return <AddRecipe addRecipe={addRecipe}/>
    } else if (page === "edit") {
      return <EditRecipe recipe={recipeToEdit} onEditRecipe={editRecipe}/>
    }
  }

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>setPage('show')}>Show All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={()=>setPage('add')}>Add</a>
              </li>              
            </ul>
          </div>

        </nav>
        <h1>Recipe Database</h1>
        {renderPage()}
      </div>
    </>
  );
}

export default App;
