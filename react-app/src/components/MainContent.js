function MainContent() {
  return (
    <div className="col-sm-8">
      <div className="border bg-light rounded sidebMain">
        <br />
        <h5 style={{ textAlign: "center" }}>Found 215 Recipes</h5>
        <div className="alert alert-warning text-center mx-5" role="alert">
          we found something :)
        </div>
        <br />
        <div className="rounded ps-3">
          <div
            className="btn-group mr-2  px-2"
            role="group"
            aria-label="First group"
          >
            <button type="button" className="btn btn-secondary">
              Bleh
            </button>
          </div>
          <div
            className="btn-group mr-2 px-2"
            role="group"
            aria-label="Second group"
          >
            <button type="button" className="btn btn-secondary">
              Bleh
            </button>
          </div>
          <div className="btn-group px-2" role="group" aria-label="Third group">
            <button type="button" className="btn btn-secondary">
              Bleh
            </button>
          </div>
          <div
            className="btn-group px-2"
            role="group"
            aria-label="Fourth group"
          >
            <button type="button" className="btn btn-secondary">
              Bleh
            </button>
          </div>
        </div>
        <br />
        <div className="modal fade  " id="view">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="view">
                  Food <title></title>
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
                            <h5>food name</h5>
                            <p>
                              {" "}
                              <b> Description:</b> blah blah blah blah blah blah
                              blah blah blah blah blah blah blah blah blah blah
                              blah blah blah blah blah blah blah blah
                            </p>
                            <p>
                              {" "}
                              <b>Cuisine:</b> abc
                            </p>
                            <p>
                              {" "}
                              <b> Culture:</b> xyz{" "}
                            </p>
                          </div>
                          <div
                            className="alert alert-warning text-center"
                            role="alert"
                          >
                            Good for people in bad mood (e.g., sad, sorrow,
                            unconfident)
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
                              <div
                                className="progress"
                                style={{ height: "1px" }}
                              >
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
                                <div className="card">
                                  <div className="card-body">
                                    Carbohydrates:
                                    <br />
                                    <br />
                                    Proteins:
                                    <br />
                                    <br />
                                    Fats:
                                    <br />
                                    <br />
                                    Vitamins:
                                    <br />
                                    <br />
                                    Minerals:
                                    <br />
                                    <br />
                                    etc.
                                  </div>
                                </div>
                                <br />
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
                            <label className="col-form-label">
                              Write Review:
                            </label>
                            <textarea
                              className="form-control"
                              id="message-text"
                            ></textarea>
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
        <div className="row pe-4 ps-4 text-dark">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row pe-4 ps-4 text-dark">
          <div className="col-sm-3 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="button text-center text-dark">
          <a href="#0" className="btn btn-primary">
            Show more
          </a>
        </div>
        <br />
      </div>
      <br />
      <div className="border bg-light rounded sidebMain">
        <br />
        <h5 style={{ textAlign: "center" }}>Personal Suggestion</h5>
        <br />
        <div className="row pe-4 ps-4 text-dark">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="button text-center">
          <a href="#0" className="btn btn-primary">
            Show more
          </a>
        </div>
        <br />
      </div>
      <br />
      <div className="border bg-light rounded sidebMain">
        <br />
        <h5 style={{ textAlign: "center" }}>Top Match (Today)</h5>
        <br />
        <div className="row pe-4 ps-4 text-dark">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">food</h5>
                <p className="card-text">
                  food food food food food food food food food
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#view"
                  className="btn btn-primary"
                >
                  view content
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="button text-center">
          <a href="#0" className="btn btn-primary">
            Show more
          </a>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
}

export default MainContent;
