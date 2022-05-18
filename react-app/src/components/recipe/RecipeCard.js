import "./RecipeCard.css";

import Card from "../../shared/Card";
import RecipeDialog from "./RecipeDialog";

function RecipeCard(props) {
  const month = props.recipe.updatedOn.toLocaleString("en-US", {
    month: "long",
  });
  const day = props.recipe.updatedOn.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = props.recipe.updatedOn.getFullYear();

  return (
    <Card className="shadow">
      <img
        className="card-img-top"
        src={props.recipe.image}
        alt="recipe_image"
      />
      <h5 className="card-title">
        <a href={props.recipe.link}>{props.recipe.name}</a>
      </h5>
      <p className="card-text">{props.recipe.shortDescription}</p>
      <p className="card-text">
        <small className="text-muted">
          {day}/{month}/{year}
        </small>
      </p>
      <button
        data-bs-toggle="modal"
        data-bs-target={"#view-" + props.recipe.id}
        className="btn btn-primary"
      >
        view content
      </button>
      <RecipeDialog recipe={props.recipe} />
    </Card>
  );
}

export default RecipeCard;
