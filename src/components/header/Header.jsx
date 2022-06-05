import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar-section">
        <div className="nav-above">
          <div className="container">
            <div className="social-icons">
              <Link to="#">
                <i className="fab fa-facebook" />
              </Link>
              <Link to="#">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#">
                <i className="fab fa-discord" />
              </Link>
            </div>
            <div className="social-langController dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                LANGUAGE
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    English
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    korean
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid nav-main">
          <div className="navbar-container">
            <div className="nav-toggle">
              <div className="cart">
                <div
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i className="fas fa-bars" />
                </div>
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex={-1}
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      Menu
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <ul>
                      <li>
                        <Link to="index.html">Home</Link>
                      </li>
                      <li>
                        <Link to="about.html">About</Link>
                      </li>
                      <li>
                        <Link to="productLists.html">Stores</Link>
                      </li>
                      <li>
                        <Link to="#">Categories</Link>
                      </li>
                      <li>
                        <Link to="#">Blogs</Link>
                      </li>
                      <li>
                        <hr />
                        <form method="post">
                          <input
                            type="text"
                            className="textbox"
                            placeholder="Search"
                          />
                          <input
                            title="Search"
                            defaultValue=""
                            type="submit"
                            className="button"
                          />
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <form method="post">
                <input type="text" className="textbox" placeholder="Search" />
                <input
                  title="Search"
                  defaultValue=""
                  type="submit"
                  className="button"
                />
              </form>
            </div>
            <div className="nav-brand">Meo's Store</div>
            <div className="nav-userContainer">
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user" />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="cart">
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i className="fas fa-shopping-bag" />
                  <div className="cart-sup">
                    <div>0</div>
                  </div>
                </div>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Shopping Bag</h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">...</div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-bottom">
            <ul>
              <li>
                <Link to="index.html">Home</Link>
              </li>
              <li>
                <Link to="about.html">About</Link>
              </li>
              <li>
                <Link to="productLists.html">Stores</Link>
              </li>
              <li>
                <Link to="#">Categories</Link>
              </li>
              <li>
                <Link to="#">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
