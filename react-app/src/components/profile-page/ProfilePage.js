import avatar from "../../images/avatar.jpg";
import foodImg from "../../images/food2.jpg";
import Card from "../../shared/Card";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="container py-5">
      <Card>
        <div className="row">
          <div className="col-2 ps-5">
            <div>
              <img
                src={avatar}
                alt="avatar"
                className="rounded-circle img-fluid  border border-dark"
                style={{ width: "150px", marginBottom: "30px" }}
              />
            </div>
          </div>
          <div className="col-6 mt-3">
            <h5 className="my-3">@Random-Palico</h5>
            <p className="text-muted mb-1">Just some random chef on here :)</p>
          </div>
          <div className="col-4">
            <div>
              <div>
                <button className="belll">
                  <i className="fa fa-bell"></i>
                </button>
              </div>
              <div>
                <button className="upload">
                  <i className="fa fa-upload"></i>
                </button>
              </div>
              <div>
                <button className="settings">
                  <i className="fa fa-cog"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="nav nav-tabs profileNav" id="nav-tab" role="tablist">
            <button
              className="nav-link active text-dark"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Post
            </button>
            <button
              className="nav-link text-dark"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              bookmarks
            </button>
            <button
              className="nav-link text-dark"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              following
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <br />
            <div className="foodnames">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-2 ps-5">
                      <div>
                        <img
                          src={foodImg}
                          alt="avatar"
                          className="img-fluid  border border-2"
                          style={{ marginBottom: "30px" }}
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-4">
                      <h5 className="my-3">Recipe Name</h5>
                      <p className="text-muted mb-1">Description</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons">
                    <div className="col-sm-12 text-center">
                      <div>
                        <div>
                          <button className="heart">
                            <i className="fa-regular fa-heart"></i>
                          </button>
                        </div>
                        <div>
                          <button className="comment">
                            <i className="fa-regular fa-comment"></i>
                          </button>
                        </div>
                        <div>
                          <button className="share">
                            <i className="fa-solid fa-share-nodes"></i>
                          </button>
                        </div>
                        <div>
                          <button className="ellip1">
                            <i className="fa fa-ellipsis"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;
