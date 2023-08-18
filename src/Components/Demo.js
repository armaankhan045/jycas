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

const WhoWeAre = () => {
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
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid ">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse  mx-auto" id="navbarNav">
              <img
                className="jy-logo  mx-auto"
                src={require("../Components/images/image-removebg-preview (1).png")}
                alt="React Logo"
              />
            </div>
            <div className="collapse navbar-collapse  mx-auto" id="navbarNav">
              <ul className="navbar-nav active mx-1 mx-auto">
                <li className="nav-item">
                  <a
                    class="nav-link "
                    href="/"
                    tag={NavLink}
                    style={{ fontWeight: "" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    class="nav-link "
                    href="OncampusProgram"
                    tag={NavLink}
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
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="/Services" tag={NavLink}>
                          Audit & Assurance
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" type="button" href="/Taxation">
                          Taxation
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          type="button"
                          href="/BusinessSupport"
                        >
                          Business Support
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Services" tag={NavLink}>
                          Management Consultancy
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" type="button" href="/Taxation">
                          International Transections
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          type="button"
                          href="/BusinessSupport"
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
                    href="CrashCourse"
                    tag={NavLink}
                    style={{ fontWeight: "" }}
                  >
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    class="nav-link "
                    href="Contact"
                    tag={NavLink}
                    style={{ fontWeight: "" }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
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
      <div className="grand-parents">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <button class="dropdown-item" type="button">
                <Fragment>
                  <Taxation />
                  <hr />
                  <BusinessSupport />
                </Fragment>
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button class="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grand-parents">
        <div className="d-flex justify-content-between parents">
          <div className="mx-auto">
            <img
              src={require("../Components/images/who we are 2.png")}
              class="d-block"
              style={{
                width: 450,
                height: 300,
                backgroundColor: "",
              }}
            />
          </div>
          <div className="font-weight-bolder parents ">
            <p style={{ color: "black", fontWeight: "normal" }}>
              At JY, it is all about relating to the clients on a human level so
              that values are not compromised in the interest of achieving
              finesse in business practices and revenue. This passion has rung
              true by giving rise to enduring trust and a growing network among
              those who come in contact with us. As a mid-tier firm, we are
              large enough for businesses to benefit from our strong background
              and financial acumen – yet we’re small enough to still view
              individual client relationships as our most valued asset
            </p>
          </div>
        </div>
      </div>
      <div className="grand-parents">
        <div className="d-flex justify-content-between parents">
          <div className="font-weight-bolder parents">
            <h1 style={{ color: "black" }}>
              What
              <span style={{ color: "#163f73 " }}>
                <u style={{ color: " #c3b047" }}> we do</u>
              </span>
            </h1>
            <p style={{ color: "black", fontWeight: "normal" }}>
              JY is a full-service accounting and consulting firm located in
              Hyderabad, India. Our key practice areas comprise of Audit &
              Assurance, Taxation, Business Process Support, Management
              Consulting, International Transactions, New Business Setup/
              Start-Up Advisory. We offer services in all of the above areas,
              plus any other client-specific/ industry-specific requirements.
              Our scale of operations and team strength offer us the agility to
              reinvent ourselves on a continuous basis to cater to the
              ever-changing global business environments and regulations. Our
              growth over the years is a testimony to the fact of our client
              service standards and willingness to step-up to support our
              clients in all aspects of their business.
            </p>
          </div>
          <div className="mx-auto">
            <img
              src={require("../Components/images/who we are1.png")}
              class="d-block"
              style={{
                width: 450,
                height: 300,
                backgroundColor: "",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grand-parents m-0 ">
        <div className="parents  text-start m-0">
          <div className="font-weight-bolder text-start m-0 ">
            <h1 class="text-start" style={{ color: "black" }}>
              Who
              <span class="text-start" style={{ color: "#163f73 " }}>
                <u class="text-start" style={{ color: " #c3b047" }}>
                  {" "}
                  we serve
                </u>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="grand-parents">
        <div className="parents ">
          <div class="d-flex align-content-around flex-wrap">
            <div class=" mx-auto m-2">
              <img
                src={require("../Components/images/who-we-serve 1.png")}
                class="card-img-top mx-auto h-100"
                style={{ color: "black", borderRadius: 0 }}
              />

              <p
                class="card-title mx-auto m-0 p-0 "
                style={{
                  color: " #c3b047",
                }}
              >
                Startups
              </p>
            </div>
            <div class=" mx-auto  m-2">
              <img
                src={require("../Components/images/who we serve 2.png")}
                class="card-img-top mx-auto h-100"
                style={{ color: "black", borderRadius: 0 }}
              />
              <p
                class="card-title mx-auto m-0 p-0"
                style={{
                  color: " #c3b047",
                }}
              >
                Hospitality
              </p>
            </div>
            <div class=" mx-auto  m-2">
              <img
                src={require("../Components/images/who we serve 3.png")}
                class="card-img-top mx-auto h-100"
                style={{ color: "black", borderRadius: 0 }}
              />
              <div class="card-body mx-auto m-0 p-0">
                <p
                  class="card-title mx-auto m-0 p-0"
                  style={{
                    color: " #c3b047",
                  }}
                >
                  Pharma
                </p>
              </div>
            </div>
            <div class=" mx-auto  m-2">
              <img
                src={require("../Components/images/who we serve 4.png")}
                class="card-img-top mx-auto h-100"
                style={{ color: "black", borderRadius: 0 }}
              />
              <div class="card-body mx-auto m-0 p-0">
                <p
                  class="card-title mx-auto m-0 p-0"
                  style={{
                    color: " #c3b047",
                  }}
                >
                  Power
                </p>
              </div>
            </div>
            <div class=" mx-auto  m-2">
              <img
                src={require("../Components/images/who we serve 5.png")}
                class="card-img-top mx-auto h-100 "
                style={{ color: "black", borderRadius: 0 }}
              />
              <div class="card-body mx-auto m-0 p-0">
                <p
                  class="card-title mx-auto m-0 p-0"
                  style={{
                    color: " #c3b047",
                  }}
                >
                  Retail
                </p>
              </div>
            </div>
            <div class=" mx-auto  m-2">
              <img
                src={require("../Components/images/who we serve 6.png")}
                class="card-img-top mx-auto h-100"
                style={{ color: "black", borderRadius: 0 }}
              />
              <div class="card-body mx-auto m-0 p-0">
                <p
                  class="card-title mx-auto m-0 p-0"
                  style={{
                    color: " #c3b047",
                  }}
                >
                  Software
                </p>
              </div>
            </div>
            <div class=" mx-auto  m-2">
              <img
                src={require("../Components/images/who we serve 7.png")}
                class="card-img-top mx-auto h-100"
                style={{ color: "black", borderRadius: 0 }}
              />
              <div class="card-body mx-auto m-0 p-0">
                <p5
                  class="card-title mx-auto m-0 p-0"
                  style={{
                    color: " #c3b047",
                  }}
                >
                  Construction
                </p5>
              </div>
            </div>
            <div class=" mx-auto  m-2">
              <img
                src={require("../Components/images/who we serve 8.png")}
                class="card-img-top mx-auto h-100"
                style={{
                  color: "black",
                  borderRadius: 0,
                  color: " #c3b047",
                }}
              />
              <div class="card-body mx-auto m-0 p-0">
                <p
                  class="card-title m-0 p-0"
                  style={{
                    color: " #c3b047",
                  }}
                >
                  Manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grand-parents m-0 mt-4">
        <div className="parents  text-start m-0">
          <div className="font-weight-bolder text-start m-0 ">
            <h1 class="text-start" style={{ color: "black" }}>
              Services
            </h1>
          </div>
        </div>
      </div>
      <div className="grand-parents m-2">
        <div className="d-flex justify-content-between parents ">
          <div
            class="card-group border  rounded shadow-lg h-100"
            style={{
              color: "white",
              width: 500,
            }}
          >
            <div class="my-2 mx-auto  parents">
              <img
                className="my-2   "
                src={require("../Components/images/services 1.png")}
                style={{
                  color: "black",
                  width: 150,
                  height: 120,
                }}
              />
            </div>
            <div
              class="col-md-8 rounded-end parents"
              style={{
                color: "white",
                backgroundColor: " #163f73",
              }}
            >
              <div class="card-body">
                <h5 class="card-title m-1">Audit & Assurance</h5>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Statutory Audit,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Tax Audit,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Internal Audit,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Certification Services,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Agreed Upon Procedures.
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div
            class="card-group border  rounded shadow-lg h-100"
            style={{
              color: "white",
              width: 500,
            }}
          >
            <div class="my-2 mx-auto  parents">
              <img
                className="my-2  mx-auto"
                src={require("../Components/images/services 2.png")}
                style={{
                  color: "black",
                  borderRadius: 0,
                  width: 150,
                  height: 120,
                }}
              />
            </div>
            <div
              class="col-md-8 rounded-end  parents"
              style={{
                color: "white",
                backgroundColor: " #163f73",
              }}
            >
              <div class="card-body">
                <h5 class="card-title m-1">Taxation</h5>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Income Tax,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Goods and Services Tax (GST),
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Expat Taxation,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    International Tax Planning,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Tax Compliance.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grand-parents m-2">
        <div className="d-flex justify-content-between parents ">
          <div
            class="card-group border  rounded shadow-lg h-100"
            style={{
              color: "white",
              width: 500,
            }}
          >
            <div class="my-2  mx-auto parents">
              <img
                className="my-2   mx-auto"
                src={require("../Components/images/services 3.png")}
                style={{
                  color: "black",
                  borderRadius: 0,
                  width: 150,
                  height: 120,
                }}
              />
            </div>
            <div
              class="col-md-8 rounded-end  parents"
              style={{
                color: "white",
                backgroundColor: " #163f73",
              }}
            >
              <div class="card-body">
                <h5 class="card-title m-1">New Business Setup</h5>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Planning,
                  </li>
                </p>

                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Structuring,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Licencing Services,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Entity Incorporation
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div
            class="card-group border  rounded shadow-lg h-100"
            style={{
              color: "white",
              width: 500,
            }}
          >
            <div class="parents mx-auto">
              <img
                class="my-2   mx-auto"
                src={require("../Components/images/services 4.png")}
                style={{
                  color: "black",
                  borderRadius: 0,
                  width: 150,
                  height: 120,
                }}
              />
            </div>
            <div
              class="col-md-8 rounded-end parents"
              style={{
                color: "white",
                backgroundColor: " #163f73",
              }}
            >
              <div class="card-body">
                <h5 class="card-title m-1">Business Support</h5>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Accounting Services,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Payroll Management,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Registration & Compliance,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Design of SOP,
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grand-parents m-2">
        <div className="d-flex justify-content-between parents ">
          <div
            class="card-group border  rounded shadow-lg h-100"
            style={{
              color: "white",
              width: 500,
            }}
          >
            <div class="my-2 mx-auto  parents">
              <img
                className="my-2   mx-auto"
                src={require("../Components/images/services 5.png")}
                style={{
                  color: "black",
                  borderRadius: 0,
                  width: 150,
                  height: 120,
                }}
              />
            </div>
            <div
              class="col-md-8 rounded-end  parents"
              style={{
                color: "white",
                backgroundColor: " #163f73",
              }}
            >
              <div class="card-body">
                <h5 class="card-title m-1">Management Consultancy</h5>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Corporate Finance /Project Finance,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Due Diligence services
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Mergers & Acquisitions,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Process Improvement.
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Agreed Upon Procedures.
                  </li>
                </p>
              </div>
            </div>
          </div>
          <div
            class="card-group border  rounded shadow-lg h-100"
            style={{
              color: "white",
              width: 500,
            }}
          >
            <div class="my-2 mx-auto  parents">
              <img
                className="my-2   mx-auto"
                src={require("../Components/images/services 6.png")}
                style={{
                  color: "black",
                  borderRadius: 0,
                  width: 150,
                  height: 120,
                }}
              />
            </div>
            <div
              class="col-md-8 rounded-end parents"
              style={{
                color: "white",
                backgroundColor: " #163f73",
              }}
            >
              <div class="card-body">
                <h5 class="card-title m-1">International Transaction</h5>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    Incorporation of Company Outside India,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    International Taxation,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    î India Entry Strategies and Services,
                  </li>
                </p>
                <p class="card-text m-1">
                  <li
                    style={{
                      color: "white",
                      fontWeight: "lighter",
                    }}
                  >
                    FEMA/RBI Compliance,
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
