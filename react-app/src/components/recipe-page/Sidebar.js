import { getAllIngredients } from "../../services/ingredientService";

import dessertImg from "../../assets/dessert.jpeg";
import meatsImg from "../../assets/meats.png";
import vegetablesImg from "../../assets/vegetables.png";

import ExistingIngredientFilter from "../filters/ExistingIngredientFilter";
import IngredientFilter from "../filters/IngredientFilter";

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
        <div className="pe-3 ps-3">
          <ExistingIngredientFilter
            ingredientType="Dessert & Snack"
            image={dessertImg}
            ingredients={getAllIngredients("dessert & snack")}
          />
        </div>
        <br />
        <div className="pe-3 ps-3">
          <ExistingIngredientFilter
            ingredientType="Vegetables"
            image={vegetablesImg}
            ingredients={getAllIngredients("vegetables")}
          />
        </div>
        <br />
        <div className="pe-3 ps-3">
          <ExistingIngredientFilter
            ingredientType="Meats"
            image={meatsImg}
            ingredients={getAllIngredients("meats")}
          />
        </div>
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
