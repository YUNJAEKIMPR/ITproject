import "./HomePage.css";
import SlideShow from "./SlideShow";
import article1Img from "../../images/article1.jpg";
import dietImg from "../../images/diet.png";
import breadImg from "../../images/bread.jpg";
import famImg from "../../images/fam.jpg";
import godRImg from "../../images/godR.png";

const HomePage = () => {
  return (
    <div>
      <SlideShow />

      <div className="row">
        <div className="sidebar">
          <h2>Articles</h2>
          <br />
          <div className="articles">
            <div className="card text-dark">
              <img
                src={article1Img}
                className="card-img"
                alt="..."
                style={{ opacity: "0.3", height: "280px", width: "100%" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title">should you try the keto diet?</h4>
                <p className="card-text">
                  It's advertised as a weight-loss wonder, but this eating plan
                  is actually a medical diet that comes with serious risks.
                </p>
                <h6 className="card-text">
                  <a href="https://www.health.harvard.edu/staying-healthy/should-you-try-the-keto-diet">
                    View more{" "}
                  </a>
                </h6>
                <br />
                <p className="card-text text-muted">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <br />
          <div className="articles">
            <div className="card text-dark">
              <img
                src={dietImg}
                className="card-img"
                alt="..."
                style={{ opacity: "0.3", height: "280px", width: "100%" }}
              />
              <div className="card-img-overlay">
                <h4 className="card-title">
                  9 popular weight loss diets reviewed
                </h4>
                <p className="card-text">
                  there are many weight loss diets out there. some focus on
                  reducing your appetite, while others restrict calories, carbs,
                  or fat...
                </p>
                <h6 className="card-text">
                  <a href="https://www.healthline.com/nutrition/9-weight-loss-diets-reviewed ">
                    View more
                  </a>
                </h6>
                <br />
                <p className="card-text text-muted">Last updated 10 mins ago</p>
              </div>
            </div>
          </div>
          <br />
          <div className="button text-center">
            <a href="#0" className="btn btn-primary">
              Show more
            </a>
          </div>
        </div>

        <div className="main">
          <h2>What's new today?</h2>
          <br />
          <div className="topNews">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={breadImg}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">
                      Tips for Baking With Whole Grains
                    </h5>
                    <p className="card-text">
                      Simply swapping the whole-grain flour of your choice into
                      a recipe developed for all-purpose flour, won't give you
                      the results you're hoping for. Try these expert tips for
                      fluffy, tasty whole-grain goods.
                    </p>
                    <h6 className="card-text">
                      <a href="https://health.usnews.com/health-news/blogs/eat-run/slideshows/tips-for-baking-with-whole-grains">
                        View more
                      </a>
                    </h6>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated on April 14, 2022
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="topNews">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={famImg}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">
                      How to Become a Meal Prep Expert
                    </h5>
                    <p className="card-text">
                      These 15 tips can help you make healthy food faster.
                    </p>
                    <h6 className="card-text">
                      <a href="https://health.usnews.com/wellness/food/slideshows/meal-prep-tips-for-healthy-eating">
                        View more
                      </a>
                    </h6>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated on March 23, 2022
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="topNews">
            <div className="card mb-3" style={{ width: "100%" }}>
              <div className="row g-0">
                <div className="col-md-3">
                  <img
                    src={godRImg}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">
                      Gordon Ramsay shares video of mother’s hilarious response
                      to his food
                    </h5>
                    <p className="card-text">
                      In the clip, the 55-year-old celebrity chef asked his
                      mother to have “a little taste” of a topping that he made
                      for one of his dishes. As Cosgrove tried the food, she
                      made an unpleasant look on her face.
                    </p>
                    <h6 className="card-text">
                      <a href="https://www.independent.co.uk/life-style/health-and-families/gordon-ramsay-mother-tastes-food-b2049220.html">
                        View more
                      </a>
                    </h6>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated on April 01 2022
                      </small>
                    </p>
                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
