import { Link } from "react-router-dom";
import Logo from "../Images/mdhlogo.png";
import "./Styles.css";

function Footer() {
  return (
    <div className="container bg-light">
      <footer className="py-3 ">
        {/* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <Link to="/" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Home</li>
          </Link>
          <Link to="/recordList" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Catalog</li>
          </Link>
          <Link to="/Create" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Submit SCPs</li>
          </Link>
          <Link to="/Contact" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">Contact</li>
          </Link>
          <Link to="/About" className="nav-item text-decoration-none">
            <li className="nav-link px-2 text-muted">About</li>
          </Link>
          <li>
            <a
              href="https://scp-wiki.wikidot.com/"
              className="nav-link px-2 text-muted"
              target="_blank"
              rel="noreferrer"
            >
              Big Brother Site
            </a>
          </li>
        </ul> */}
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img
                src={Logo}
                style={{ height: "80px", width: "80px" }}
                alt="scp logo"
              />
            </Link>
          </div>
          <div className="col-md-4">
            <p className="text-center text-muted">
              <p className="text-center text-muted mdh">
                © 2022 MDH Gaming Limited
              </p>
              <p className="trademark">
                Developed by Arrow To The Knee Productions
              </p>
            </p>
          </div>
          <div className="col-md-4">
            <ul className="nav justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.instagram.com/mdhgaming_nz/"
                >
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-muted"
                  href="https://www.facebook.com/mdhgamingNZ/"
                >
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
