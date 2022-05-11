import { getPersonalSuggestion } from "../services/recipeService";
import RecipeCard from "./RecipeCard";

function PersonalSuggestion() {
  const RecipeCards = () => {
    let resultRows = [];
    let recipes = [];
    let recipeCount = 0;
    let rowCount = 0;
    getPersonalSuggestion().forEach((recipe) => {
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
      <h5 style={{ textAlign: "center" }}>Personal Suggestion</h5>
      <br />
      {RecipeCards()}
      <br />
      <div className="button text-center">
        <a href="#0" className="btn btn-primary">
          Show more
        </a>
      </div>
      <br />
    </div>
  );
}

export default PersonalSuggestion;
