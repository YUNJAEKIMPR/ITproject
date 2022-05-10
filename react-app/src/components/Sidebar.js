import ExistingIngredientFilter from "./ExistingIngredientFilter";
import IngredientFilter from "./IngredientFilter";

function Sidebar() {
  return (
    <div className="col-sm-4">
      <div className="border bg-light rounded sidebar-text">
        <br />
        <IngredientFilter />
        <br />
        <div className="alert alert-warning text-center mx-5" role="alert">
          ingredient that you already have
        </div>
        <ExistingIngredientFilter />
        <br />
        <ExistingIngredientFilter />
        <br />
        <div className="button text-center">
          <a href="#0" className="btn btn-primary">
            Show more
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Sidebar;
