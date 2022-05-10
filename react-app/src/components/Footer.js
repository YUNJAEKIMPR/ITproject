function Footer() {
  return (
    <footer className="bg-light overflow-hidden border-top">
      <div className="row p-3 p-0">
        <div className="col-12">
          <div className="Contact">
            <h6 className="mb-4">Contact us</h6>
            <p>
              <i className="fas fa-phone mr-3"></i> (+84) 28 3776 1369
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i>{" "}
              enquiriescookforyou@hub.com
            </p>
            <p>
              <i className="fas fa-home mr-3"></i> 702 nguyen van linh st, dist
              7, hcm
            </p>
          </div>
        </div>
        <div className="row">
          <div className="Follow">
            <h6 className="mb-4">Follow us</h6>
            <a
              className="btn btn-primary btn-floating border-0"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              className="btn btn-primary btn-floating border-0"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-primary btn-floating border-0"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-primary btn-floating border-0 "
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-primary btn-floating border-0"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-primary btn-floating border-0"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-lg-start p-3 .footer-bottom"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        ©2022&nbsp;
        <a className="text-primary text-decoration-none fw-bold" href="#0">
          cook4you.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
