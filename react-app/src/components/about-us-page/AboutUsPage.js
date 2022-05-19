import leonImg from "../../images/leon.png";
import longImg from "../../images/long.png";
import vyImg from "../../images/vy.png";
import yunjaeImg from "../../images/Yunjae.png";
import trungImg from "../../images/Trung.jpg";

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="aboutus">
        <h5>The long (group)</h5>
        <p>
          we are a group of sleep deprived kids that just want to pass. one of
          us came up with the idea to make something food related (they were
          hungry during the meeting), which is how ‘cook for you’ came about.
          our objective was to create something interactive, easily accessible,
          and allows the user to enjoy themselves while using our website.
        </p>
        <br />
        <h5>the short (individual)</h5>
      </div>
      <br />
      <div className="row row-cols-2 text-center">
        <div className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={leonImg}
                  className="img-fluid rounded-start"
                  alt="liquidityCat"
                  style={{ textAlign: "center" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">leon</h5>
                  <p className="card-text">kitten</p>
                  <div className="list text-start ps-4">
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        has html - css - js - bootstrap experience through his
                        gap year
                      </li>
                      <li>always in a business mindset (blames his parents)</li>
                      <li>
                        takes part in projects for his parents’ web and software
                        company
                      </li>
                      <li> crypto enjoyer</li>
                      <li> draws fat cats in his free time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ height: "314px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={longImg}
                  className="img-fluid rounded-start"
                  alt="smileyCat"
                  style={{
                    height: "240px",
                    maxWidth: "260px",
                    textAlign: "center",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">long</h5>
                  <p className="card-text">doggo</p>
                  <div className="list text-start ps-4">
                    <ul style={{ listStyleType: "none" }}>
                      <li> cs nerd</li>
                      <li> really into competitive programming</li>
                      <li>
                        has an album of fat animals on his phone (187 pics)
                      </li>
                      <li>
                        wants to become a game and web/mobile app developer in
                        the future
                      </li>
                      <li> loves getting on people’s nerves</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ height: "314px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={vyImg}
                  className="img-fluid rounded-start"
                  alt="bears"
                  style={{
                    height: "292px",
                    maxWidth: "255px",
                    textAlign: "center",
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">vy</h5>
                  <p className="card-text">grep</p>
                  <div className="list text-start ps-4">
                    <ul style={{ listStyleType: "none" }}>
                      <li> zero experience in programming</li>
                      <li> trying her best</li>
                      <li> loves watching food videos</li>
                      <li> obsessive perfectionist</li>
                      <li> comes up with questionable interesting ideas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ height: "314px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={yunjaeImg}
                  className="img-fluid rounded-start"
                  alt="Catty"
                  style={{ height: "292px", maxWidth: "350px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Yunjae</h5>
                  <p className="card-text">gran</p>
                  <div className="list text-start ps-4">
                    <ul style={{ listStyleType: "none" }}>
                      <li> leader™</li>
                      <li> used to be a physics major</li>
                      <li> mic never works properly</li>
                      <li> good at time management</li>
                      <li> has never hurt a living being in her entire life</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3" style={{ height: "314px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={trungImg}
                  className="img-fluid rounded-start"
                  alt="Teleportation"
                  style={{ height: "292px", maxWidth: "350px" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">trung</h5>
                  <p className="card-text">enderman</p>
                  <div className="list text-start ps-4">
                    <ul style={{ listStyleType: "none" }}>
                      <li> self-taught</li>
                      <li> software engineer !!1!!!1!!11!!!</li>
                      <li> can and has disappeared for a whole week</li>
                      <li> has approximately 36 tabs opened at all times</li>
                      <li> knows everything about everything</li>
                      <li> texts like your grandfather</li>
                    </ul>
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

export default AboutUsPage;
