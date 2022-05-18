import { getAllRecipes } from "../../services/recipeService";

import RecipeCard from "../recipe/RecipeCard";
import AdvancedFilter from "../filters/AdvancedFilter";

function SearchResult() {
  const RecipeCards = () => {
    let resultRows = [];
    let recipes = [];
    let recipeCount = 0;
    let rowCount = 0;
    getAllRecipes().forEach((recipe) => {
      recipeCount++;
      recipes.push(
        <div key={recipe.id} className="col-sm-3">
          <RecipeCard recipe={recipe} />
        </div>
      );
      if (recipeCount === 4) {
        resultRows.push(
          <div key={rowCount} className="recipe-row row pe-4 ps-4 text-dark">
            {[...recipes]}
          </div>
        );
        recipes = [];
        recipeCount = 0;
        rowCount++;
      }
    });
    return resultRows;
  };

  return (
    <div className="border bg-light rounded main-content-section">
      <br />
      <h5 style={{ textAlign: "center" }}>Found 215 Recipes</h5>
      <div className="alert alert-warning text-center mx-5" role="alert">
        we found something <i className="fa fa-smile"></i>
      </div>
      <AdvancedFilter />
      {RecipeCards()}
      <br />
      <div className="button text-center text-dark">
        <a href="#0" className="btn btn-primary">
          Show more
        </a>
      </div>
      <br />
    </div>
  );
}

export default SearchResult;
