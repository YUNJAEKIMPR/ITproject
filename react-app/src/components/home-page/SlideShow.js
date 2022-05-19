import React, { useEffect, useState } from "react";
import "./SlideShow.css";
import crispyChickenImg from "../../images/crispychicken.png";
import honeybunsImg from "../../images/Honeybuns.png";
import eggSandImg from "../../images/eggSand.png";

const SlideShow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    if (slideIndex > 3) {
      setSlideIndex(1);
    }
    if (slideIndex < 1) {
      setSlideIndex(3);
    }
  }, [slideIndex]);

  const plusSlides = () => {
    setSlideIndex((currentState) => currentState + 1);
  };

  const minusSlides = () => {
    setSlideIndex((currentState) => currentState - 1);
  };

  const showSlide1 = () => {
    setSlideIndex(1);
  };

  const showSlide2 = () => {
    setSlideIndex(2);
  };

  const showSlide3 = () => {
    setSlideIndex(3);
  };

  return (
    <div>
      <div className="slideshow-container">
        <div
          className={`mySlides ${slideIndex === 1 && "show"} ${
            slideIndex !== 1 && "hide"
          }`}
        >
          <div className="card mb-3 topcard" style={{ maxWidth: "4000px" }}>
            <div className="row g-0">
              <div className="col-md-4 Image">
                <img
                  src={crispyChickenImg}
                  className="img-fluid rounded-start"
                  style={{ height: "280px", width: "600px", padding: "0px" }}
                  alt="slide_image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1>Crispy Chicken With Za’atar-Olive Rice</h1>
                  <br />
                  <h6 className="text-start">
                    Not only is ground chicken or turkey a fast-cooking
                    weeknight superstar, but the fat leftover from crisping it
                    up can get work done. Case in point, this low-lift one-pan
                    dish. The leftover fat is used to blister olives that then
                    get mixed with cooked rice (or any other cooked grain you’ve
                    got) and chopped greens like spinach, kale, or chard.
                    Za’atar provides another layer of flavor. Be sure to check
                    the ingredient list on your blend and season accordingly—if
                    it includes salt, you might not need to add any extra.
                  </h6>
                  <br />
                  <h6>
                    The simple and fresh flavors are perfect for weeknight
                    dinners
                  </h6>
                  <br />
                  <h6 className="card-text align-bottom">
                    <a href="https://www.bonappetit.com/recipe/crispy-chicken-with-zaatar-olive-rice">
                      View more
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mySlides ${slideIndex === 2 && "show"} ${
            slideIndex !== 2 && "hide"
          }`}
        >
          <div className="card mb-3 topcard" style={{ maxWidth: "4000px" }}>
            <div className="row g-0">
              <div className="col-md-4 Image">
                <img
                  src={honeybunsImg}
                  className="img-fluid rounded-start"
                  style={{ height: "280px", width: "600px", padding: "0px" }}
                  alt="slide_image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1>Honey Buns</h1>
                  <br />
                  <h6>
                    These homemade honey buns are a cross between a donut and a
                    cinnamon roll. They have a swirl of cinnamon in them and can
                    be both fried and baked. They make a great breakfast or just
                    a sweet treat to have on hand.
                  </h6>
                  <br />
                  <h6>
                    It uses a water-based roux called tangzhong that’s used in
                    milk bread recipes. Water and flour are cooked together and
                    thickened before being cooled and mixed into the dough. The
                    gelatinization of the flour during this cooking process is
                    what helps the dough retain moisture, making the buns extra
                    tender. The buns are then baked at a high temperature,
                    caramelizing and crisping the edges while leaving the center
                    pillowy soft.
                  </h6>
                  <br />
                  <h6 className="card-text align-bottom">
                    <a href="https://www.epicurious.com/recipes/food/views/honey-buns">
                      view more
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mySlides ${slideIndex === 3 && "show"} ${
            slideIndex !== 3 && "hide"
          }`}
        >
          <div className="card mb-3 topcard" style={{ maxWidth: "4000px" }}>
            <div className="row g-0">
              <div className="col-md-4 Image">
                <img
                  src={eggSandImg}
                  className="img-fluid rounded-start"
                  style={{ height: "280px", width: "600px", padding: "0px" }}
                  alt="slide_image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1>fancy egg salad sandwich</h1>
                  <br />
                  <p>
                    This is not your typical egg salad sandwich. This is a
                    high-class, tantalizingly tasty Fancy Egg Sandwich that
                    takes the classic egg salad game to the next level. Even
                    with its added fanciness it is still quick, easy, and tastes
                    like it's from a cafe! The homemade mayo is creamier and
                    more flavorful than anything you’ll find in a jar. The eggs
                    are still fluffy and savory, pairing so well with the
                    crunchy chives and the mayo. Fancy Egg Salad Sandwich
                    spreads perfectly over your favorite bread and will become
                    one of your favorite lunches after just one bite.
                  </p>
                  <br />
                  <br />
                  <h6 className="card-text">
                    <a href="https://www.abeautifulplate.com/high-maintenance-egg-salad-sandwich/">
                      View more
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="prev"
          onClick={minusSlides}
          style={{ textDecoration: "none" }}
          href="#0"
        >
          &#10094;
        </a>
        <a
          className="next"
          onClick={plusSlides}
          style={{ textDecoration: "none" }}
          href="#0"
        >
          &#10095;
        </a>
      </div>
      <div style={{ textAlign: "center" }}>
        <span
          className={`dot ${slideIndex === 1 && "active"}`}
          onClick={showSlide1}
        ></span>
        <span
          className={`dot ${slideIndex === 2 && "active"}`}
          onClick={showSlide2}
        ></span>
        <span
          className={`dot ${slideIndex === 3 && "active"}`}
          onClick={showSlide3}
        ></span>
      </div>
    </div>
  );
};

export default SlideShow;
