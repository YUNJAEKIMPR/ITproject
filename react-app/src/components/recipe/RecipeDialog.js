import Card from "../../shared/Card";
import RecipeInstruction from "./RecipeInstruction";

const RecipeDialog = (props) => {
  return (
    <div className="modal fade" id={"view-" + props.recipe.id}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <img
              src={props.recipe.image}
              className="rounded-circle img-fluid  border border-dark"
              style={{ width: "80px", marginRight: "20px" }}
              alt="recipe_image"
            />
            <h5 className="modal-title" id="view">
              {props.recipe.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5>General</h5>
                      <Card>
                        <div className="foodescript ps-4">
                          <p>
                            <b> Description:</b> {props.recipe.description}
                          </p>
                          <p>
                            <b>Cuisine:</b> {props.recipe.cuisine}
                          </p>
                          <p>
                            <b> Culture:</b> {props.recipe.culture}
                          </p>
                        </div>
                        <div
                          className="alert alert-warning text-center"
                          role="alert"
                        >
                          {props.recipe.mood}
                        </div>
                      </Card>
                      <br />
                      <div className="row">
                        <h5>Ingredients</h5>
                        <Card>
                          <ul className="list-group list-group-flush">
                            {props.recipe.ingredients.map(
                              (ingredient, index) => {
                                return (
                                  <li key={index} className="list-group-item">
                                    {ingredient}
                                  </li>
                                );
                              }
                            )}
                          </ul>
                        </Card>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <h5>Nutrients</h5>
                      <div className="nutrients">
                        <div className="row ps-4">
                          <div className="col-sm-12">
                            <Card>
                              {props.recipe.nutrient.map(({ key, value }) => {
                                return (
                                  <div key={key}>
                                    {key}:{value}
                                    <br />
                                    <br />
                                  </div>
                                );
                              })}
                            </Card>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="Steps">
                        <h5>Steps</h5>
                        <br />
                        <RecipeInstruction
                          instructions={props.recipe.instructions}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="reviewsOthers">
                    <h5>Review</h5>
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="card">
                          <div className="card-body">
                            This is some text within a card body.
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="card">
                          <div className="card-body">
                            This is some text within a card body.
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="card">
                          <div className="card-body">
                            This is some text within a card body.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="type">
                    <form>
                      <div className="mb-3">
                        <label className="col-form-label">Stars:</label>
                        <div className="ratings">
                          <i className="fa fa-star rating-color"></i>
                          <i className="fa fa-star rating-color"></i>
                          <i className="fa fa-star rating-color"></i>
                          <i className="fa fa-star rating-color"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="col-form-label">Write Review:</label>
                        <textarea className="form-control"></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDialog;
