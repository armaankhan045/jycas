import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./customcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ProfileComponent from "../views/ProfileComponent";
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Button } from "reactstrap";
import { Fragment } from "react";
import Taxation from "../Components/Taxation";
import BusinessSupport from "../Components/BusinessSupport";
import WhoWeAre from "../Components/WhoWeAre";

import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const WhoWeServe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);
  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="fixed-top2 bg-defalut-one ">
      <div className="grand-parents">
        <nav className="navbar navbar-expand-lg">
          <div className="d-flex justify-content-around w-100">
            <img
              className="jy-logo  mx-auto ms-3"
              src={require("../Components/images/logo_2 1.png")}
              alt="React Logo"
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mx-3"></span>
            </button>
          </div>
          <div
            className="w-100 collapse navbar-collapse mx-auto "
            id="navbarNav"
          >
            <ul className="navbar-nav active mx-1 mx-auto">
              <li className="nav-item">
                <a class="nav-link " href="/" style={{ fontWeight: "" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  class="nav-link "
                  href="/OncampusProgram"
                  style={{ fontWeight: "" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item nav-link ">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </button>
                  <ul class="p-2 dropdown-menu">
                    <li className="m-0 p-0 w-100">
                      <a class="m-0  dropdown-item" href="/AuditAssurance">
                        Audit & Assurance
                      </a>
                    </li>
                    <li className="m-0 p-0 w-100">
                      <a
                        class="m-0 dropdown-item"
                        type="button"
                        href="/Taxation"
                      >
                        Taxation
                      </a>
                    </li>
                    <li className="m-0 p-0 w-100">
                      <a
                        class="m-0 dropdown-item"
                        type="button"
                        href="/BusinessSupport"
                      >
                        Business Support
                      </a>
                    </li>
                    <li className="m-0 p-0 w-100">
                      <a
                        class="m-0 dropdown-item"
                        href="/ManagementConsultancy"
                      >
                        Management Consultancy
                      </a>
                    </li>
                    <li className="m-0 p-0 w-100">
                      <a
                        class="m-0 dropdown-item"
                        type="button"
                        href="/InternationalTransections"
                      >
                        International Transections
                      </a>
                    </li>
                    <li className="m-0 p-0 w-100">
                      <a
                        class="m-0 dropdown-item"
                        type="button"
                        href="/NewBusinessSupport"
                      >
                        New Business Support
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a
                  class="nav-link "
                  href="/CrashCourse"
                  style={{ fontWeight: "" }}
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link " href="/Contact" style={{ fontWeight: "" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="grand-parents margin-top">
        <div className="viewport">
          <h1
            className="font-weight-bolder1 text-white"
            style={{ height: "100%" }}
          >
            Your business, Our <br /> advice It all sums up
          </h1>
        </div>
      </div>
      <div className="grand-parents m-0 "></div>
      <div className="grand-parents  text-start m-0">
        <div className=" d-flex parents  justify-content-evenly">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="  carousel-inner d-none d-lg-block">
              <div class="carousel-item active">
                <img
                  src={require("./images/who we serve 4four.png")}
                  class="d-block "
                  style={{
                    width: 250,
                    height: 200,
                    backgroundColor: "skyblue",
                  }}
                />
                <div class="text-center d-none d-md-block ">
                  <h5
                    style={{
                      color: " #c3b047 ",
                      backgroundColor: " #163f73",
                    }}
                  >
                    Power
                  </h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require("./images/retail- who we are.png")}
                  class="d-block"
                  style={{
                    width: 250,
                    height: 200,
                    backgroundColor: "skyblue",
                  }}
                />
                <div class=" text-center d-none d-md-block ">
                  <h5
                    style={{
                      color: " #c3b047 ",
                      backgroundColor: " #163f73",
                    }}
                  >
                    Retail
                  </h5>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src={require("./images/software.jpg")}
                  class="d-block "
                  style={{
                    width: 250,
                    height: 200,
                    backgroundColor: "skyblue",
                  }}
                />
                <div class=" text-center d-none d-md-block ">
                  <h5
                    style={{
                      color: " #c3b047 ",
                      backgroundColor: " #163f73",
                    }}
                  >
                    Software
                  </h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="  p-1">
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div>
                    <img
                      src={require("./images/hospitality.png")}
                      class="d-block "
                      style={{
                        width: 250,
                        height: 200,
                        backgroundColor: "skyblue",
                      }}
                    />
                  </div>

                  <div class=" text-center d-none d-md-block ">
                    <h5
                      style={{
                        color: " #c3b047 ",
                        backgroundColor: " #163f73",
                      }}
                    >
                      Hospitality
                    </h5>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src={require("./images/who-we-serve 1.png")}
                    class="d-block "
                    style={{
                      width: 250,
                      height: 200,
                      backgroundColor: "skyblue",
                    }}
                  />
                  <div class=" text-center d-none d-md-block ">
                    <h5
                      style={{
                        color: " #c3b047 ",
                        backgroundColor: " #163f73",
                      }}
                    >
                      Startups
                    </h5>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src={require("./images/who we serve 8.png")}
                    class="d-block "
                    style={{
                      width: 250,
                      height: 200,
                      backgroundColor: "skyblue",
                    }}
                  />
                  <div class=" text-center d-none d-md-block ">
                    <h5
                      style={{
                        color: " #c3b047 ",
                        backgroundColor: " #163f73",
                      }}
                    >
                      Manufacturing
                    </h5>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src={require("./images/who we serve 7.png")}
                    class="d-block "
                    style={{
                      width: 250,
                      height: 200,
                      backgroundColor: "skyblue",
                    }}
                  />
                  <div class=" text-center d-none d-md-block ">
                    <h5
                      style={{
                        color: " #c3b047 ",
                        backgroundColor: " #163f73",
                      }}
                    >
                      Construction
                    </h5>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grand-parents m-0 ">
        <div className="parents  text-start m-0">
          <div className="font-weight-bolder text-start m-0 ">
            <h1
              class=" text-start"
              style={{ fontWeight: 800, color: "black", marginTop: 20 }}
            >
              Ser
              <span
                class="text-start"
                style={{ fontWeight: 800, color: "#163f73 " }}
              >
                <u
                  class="text-start"
                  style={{ fontWeight: 800, color: " #c3b047" }}
                >
                  vices
                </u>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3 ">
        <div className="d-flex parents  justify-content-evenly">
          <div
            class="rounded border border-primary "
            style={{ width: "18rem" }}
          >
            <div className="mx-auto w-100">
              <img
                className="d-block mx-auto m-2"
                src={require("../Components/images/services/service-1.jpg")}
                style={{
                  color: "black",
                  width: 240,
                  height: 160,
                }}
              />
            </div>

            <div class="card-body">
              <h5 class="card-title ms-4">Audit & Assurance</h5>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Statutory Audit,
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Tax Audit,
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Internal Audit,
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Certification Services,
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Agreed Upon Procedures.
                </li>
              </p>
            </div>
          </div>
          <div class="rounded border border-primary" style={{ width: "18rem" }}>
            <div className="mx-auto w-100">
              <img
                className="d-block mx-auto m-2"
                src={require("../Components/images/services/service-2.jpg")}
                style={{
                  color: "black",
                  width: 240,
                  height: 160,
                }}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title ms-4">Taxes</h5>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Income Tax
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Goods and Services Tax (GST)
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Expat Taxation
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  International Tax Planning
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Tax Compliance
                </li>
              </p>
            </div>
          </div>
          <div class="rounded border border-primary" style={{ width: "18rem" }}>
            <div className="mx-auto w-100">
              <img
                className="d-block mx-auto m-2"
                src={require("../Components/images/services/service-3.jpg")}
                style={{
                  color: "black",
                  width: 240,
                  height: 160,
                }}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title ms-4">New Business Setup</h5>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Business Planning
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Business Structuring
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Business Licensing Services
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Entity Incorporation
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3 ">
        <div className="d-flex parents  justify-content-evenly">
          <div class="rounded border border-primary" style={{ width: "18rem" }}>
            <div className="mx-auto w-100">
              <img
                className="d-block mx-auto m-2"
                src={require("../Components/images/services/service-4.jpg")}
                style={{
                  color: "black",
                  width: 240,
                  height: 160,
                }}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title ms-4">Business Support</h5>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Accounting Services
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Payroll Management
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Registration & Compliance
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Design of SOP
                </li>
              </p>
            </div>
          </div>
          <div class="rounded border border-primary" style={{ width: "18rem" }}>
            <div className="mx-auto w-100">
              <img
                className="d-block mx-auto m-2"
                src={require("../Components/images/services/service-5.jpg")}
                style={{
                  color: "black",
                  width: 240,
                  height: 160,
                }}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title ms-4">Management Consultancy</h5>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Corporate Finance/Project Finance
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Due Diligence services
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Mergers & Acquisitions
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Process Improvement
                </li>
              </p>
            </div>
          </div>
          <div class="rounded border border-primary" style={{ width: "18rem" }}>
            <div className="mx-auto w-100">
              <img
                className="d-block mx-auto m-2"
                src={require("../Components/images/services/service-6.jpg")}
                style={{
                  color: "black",
                  width: 240,
                  height: 160,
                }}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title ms-4">New Business Setup</h5>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Business Planning
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Business Structuring
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Business Licensing Services
                </li>
              </p>
              <p class="card-text ms-4">
                <li
                  style={{
                    color: "black",
                    fontWeight: "normal",
                  }}
                >
                  Entity Incorporation
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
