import moon from "../images/moon.png";
import "./JoinUs.css";

function JoinUs() {
  return (
    <div>
      <div className="Right">
        <div className="moon">
          <img src={moon} id="icon" style={{ width: 30, height: 30 }} alt="" />
        </div>
        <div>
          <button
            className="joinbtn"
            data-bs-toggle="modal"
            data-bs-target="#sign-up"
          >
            Join us!
          </button>
        </div>
      </div>
      <div className="join">
        <div id="sign-up" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign up</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="Signup">
                  <label>
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                  />

                  <label>
                    <b>First name</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="fname"
                    required
                  />

                  <label>
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lname"
                    required
                  />

                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    required
                  />

                  <label>
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                  />

                  <label>
                    <b>Confirm Password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cpsw"
                    required
                  />

                  <button type="submit" className="submit">
                    Join now!
                  </button>
                  <label className="alacc">
                    <p>
                      Already have an account? <button>Login!</button>
                    </p>
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
