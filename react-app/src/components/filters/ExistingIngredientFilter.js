function ExistingIngredientFilter(props) {
  return (
    <div
      className="card"
      style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)" }}
    >
      <div className="card-header">
        <h3>
          {props.ingredientType}
          <img
            src={props.image}
            className="rounded-circle img-fluid  border border-dark"
            style={{ width: "80px", marginLeft: "20px" }}
            alt="ingredient_image"
          />
        </h3>
      </div>
      <div className="card-body cb">
        {props.ingredients.map((ingredient, index) => {
          return (
            <button
              key={index}
              type="button"
              className="btn btn-secondary btn-lg"
              style={{ margin: "5px" }}
            >
              {ingredient.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ExistingIngredientFilter;
