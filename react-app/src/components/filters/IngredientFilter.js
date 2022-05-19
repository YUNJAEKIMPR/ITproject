function IngredientFilter() {
  return (
    <div>
      <h5 className="text-center">what do you want to cook?</h5>
      <div className="alert alert-warning text-center mx-5" role="alert">
        let us know more about you
      </div>
      <div className="row">
        <div className="col-6">
          <div className="px-3 text-center">How do you feel today?</div>
        </div>
        <div className="col-6">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              style={{ width: "160px" }}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose mood
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#0">
                  😁 Very Happy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  😃 Happy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  😔 Sad
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  😥 Very Sad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="px-3 text-center">type of food</div>
        </div>
        <div className="col-6">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              style={{ width: "160px" }}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose type
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#0">
                  fast food
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  fresh
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  pastry
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  rice
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  dessert
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="px-3 text-center">cuisine</div>
        </div>
        <div className="col-6">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              style={{ width: "160px" }}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose cuisine
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#0">
                  Vietnamese
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  Western
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  International
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="px-3 text-center">flavor</div>
        </div>
        <div className="col-6">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle "
              style={{ width: "160px" }}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Choose flavor
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#0">
                  Sweet
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  Sour
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  Salty
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  Bitter
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#0">
                  Savory
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="px-3 text-center">Are you on the diet?</div>
        </div>
        <div className="col-6">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label">yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label">no</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngredientFilter;
