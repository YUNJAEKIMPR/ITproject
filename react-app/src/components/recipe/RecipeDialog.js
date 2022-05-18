import Card from "../../shared/Card";

const RecipeDialog = (props) => {
  return (
    <div className="modal fade" id={"view-" + props.recipe.id}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="view">
              {props.recipe.name} <title></title>
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
                      <h5>general</h5>
                      <div className="foodescript ps-4">
                        <h5>{props.recipe.name}</h5>
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
                      <div className="row">
                        <div className="col-12">
                          <div className="ingreps">
                            <h5>Ingredients</h5>
                            <div className="row  ps-4">
                              <div className="col-sm-6">
                                <div className="card">
                                  <div className="card-body">
                                    <p>ingredients 1</p>
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault"
                                    />
                                    <label className="form-check-label"></label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="card">
                                  <div className="card-body">
                                    <p>ingredients 2</p>
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault"
                                    />
                                    <label className="form-check-label"></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="Steps">
                        <h5>Steps</h5>
                        <div className="position-relative m-4">
                          <div className="progress" style={{ height: "1px" }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <button
                            type="button"
                            className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                            style={{ width: "2rem", height: "2rem" }}
                          >
                            1
                          </button>
                          <button
                            type="button"
                            className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
                            style={{ width: "2rem", height: "2rem" }}
                          >
                            2
                          </button>
                          <button
                            type="button"
                            className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
                            style={{ width: "2rem", height: "2rem" }}
                          >
                            3
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <h5>Nutrients</h5>
                      <div className="nutrients">
                        <div className="row ps-4">
                          <div className="col-sm-12">
                            <Card>
                              {props.recipe.nutrient.map((item) => {
                                return (
                                  <div key={item.key}>
                                    {item.key}:{item.value}
                                    <br />
                                    <br />
                                  </div>
                                );
                              })}
                            </Card>
                          </div>
                        </div>
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
