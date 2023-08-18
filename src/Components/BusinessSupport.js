import React from "react";

import "../Components/customcss.css";
import { NavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import ProfileComponent from "../views/ProfileComponent";
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import "../Components/customcss.css";
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
const BusinessSupport = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="fixed-top2 bg-defalut-one">
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
                <a
                  class="nav-link "
                  href="/"
                  style={{ fontWeight: "" }}
                >
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
                      <a
                        class="m-0  dropdown-item"
                        href="/AuditAssurance"
                      >
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
                <a
                  class="nav-link "
                  href="/Contact"
                  style={{ fontWeight: "" }}
                >
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
            className="font-weight-bolder1 text-white text-start"
            style={{ height: "100%" }}
          >
            Service <br />
            <span style={{ color: "#163f73", fontSize: 55 }}>
              #3
              <h1 style={{ color: "white", fontSize: 55 }}>Business Support</h1>
            </span>
          </h1>
        </div>
      </div>
      <div className="grand-parents">
        <div className="parents">
          <div className="font-weight-bolder parents ">
            <h1 className="text-start " style={{ color: "black" }}>
              Business{" "}
              <span style={{ color: "#163f73 " }}>
                <u style={{ color: "#f5e06d" }}> Support </u>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3">
        <div className="d-flex justify-content-between parents">
          <div className="text-start">
            <h1 className="text-start m-5" style={{ color: " #c3b047" }}>
              01
            </h1>
          </div>
          <div className="font-weight-bolder parents ">
            <h5
              className="text-start w-100"
              style={{ color: " #c3b047", fontWeight: "normal" }}
            >
              Accounting Services
            </h5>
            <p
              className="w-100 mt-3"
              style={{ color: "black", fontWeight: "normal" }}
            >
              Accounting has evolved from being a relatively transactional
              process to being a strategic function, which leverages the power
              of data.
            </p>
            <div
              class=" border  rounded"
              style={{
                color: "black",
                width: 400,
                height: 180,
                backgroundColor: "#dfeaef",
              }}
            >
              <div class="card-body m-4">
                <h5
                  class="card-title m-1 text-start"
                  style={{
                    color: "black",
                  }}
                >
                  New Business Setup
                </h5>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Planning,
                  </li>
                </p>

                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Structuring,
                  </li>
                </p>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Licencing Services,
                  </li>
                </p>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Entity Incorporation
                  </li>
                </p>
              </div>
            </div>
            <p
              className="w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              Our team’s expertise and exposure to the best accounting practices
              across manufacturing, trading and service based entities, help us
              in understanding your requirements better. Our service offerings
              are personalized and tailor made to your requirements.
            </p>
          </div>
          <div className="mx-auto">
            <img
              src={require("../Components/images/income  tax.png")}
              class="d-block"
              style={{
                width: 220,
                backgroundColor: "",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3">
        <div className="d-flex justify-content-between parents">
          <div className="text-start">
            <h1 className="m-5 text-start" style={{ color: " #c3b047" }}>
              02
            </h1>
          </div>
          <div className="font-weight-bolder parents  mx-auto">
            <h5
              className="text-start w-100"
              style={{ color: " #c3b047", fontWeight: "normal" }}
            >
              Payroll Management
            </h5>
            <p
              className="mx-auto text-start w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              Payroll processing refers to the management of employees’
              salaries, wages, bonuses, deductions, and net pay. Though it may
              appear to be simple, it is a complex process involving different
              types of employees, different payouts, multiple legislations, etc.
            </p>
            <div
              class=" border  rounded"
              style={{
                color: "black",
                width: 400,
                height: 180,
                backgroundColor: "#dfeaef",
              }}
            >
              <div class="card-body m-4">
                <h5
                  class="card-title m-1 text-start"
                  style={{
                    color: "black",
                  }}
                >
                  Our Payroll services
                </h5>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    tv PF/ESI/PT registration
                  </li>
                </p>

                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Structuring,
                  </li>
                </p>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Licencing Services,
                  </li>
                </p>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Entity Incorporation
                  </li>
                </p>
              </div>
            </div>
            <p
              className="w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              We guarantee an accurate and cost effective payroll management
              service. We understand data sensitivity and accord top most
              priority to Ïata Security’.
            </p>
          </div>
          <div className="mx-auto w-auto">
            <img
              className="mx-auto w-auto"
              src={require("../Components/images/goods and services.png")}
              class="d-block"
              style={{
                width: 220,
                backgroundColor: "",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3">
        <div className="d-flex justify-content-between parents">
          <div className="text-start">
            <h1 className=" text-start m-5" style={{ color: " #c3b047" }}>
              03
            </h1>
          </div>
          <div className="text-start font-weight-bolder parents  mx-auto">
            <h5
              className="text-start w-100"
              style={{ color: " #c3b047", fontWeight: "normal" }}
            >
              Registration & Compliance
              <p style={{ color: "black", fontWeight: "normal", fontSize: 12 }}>
                Incorporation/ Registration services
              </p>
            </h5>
            <p
              className="mx-auto w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              We help you in setting up your commercial venture in the best
              format, after considering the business idea, the operations,
              industry specific opportunities, future expansion plan and
              taxation implications. following are the business entities that
              can be registered in India:
            </p>
            <div
              class=" border  rounded"
              style={{
                color: "black",
                width: 400,
                height: 180,
                backgroundColor: "#dfeaef",
              }}
            >
              <div class="card-body m-4">
                <h5
                  class="card-title m-1 text-start"
                  style={{
                    color: "black",
                  }}
                >
                  Our Payroll services
                </h5>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    tv PF/ESI/PT registration
                  </li>
                </p>

                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Structuring,
                  </li>
                </p>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Business Licencing Services,
                  </li>
                </p>
                <p class="card-text m-1 text-start">
                  <li
                    style={{
                      color: "black",
                      fontWeight: "lighter",
                    }}
                  >
                    Entity Incorporation
                  </li>
                </p>
              </div>
            </div>
            <p
              className="mx-auto w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              each business form has it’s own unique advantages.
            </p>
            <p
              className="mx-auto w-100"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Post Incorporation and Registration services
            </p>
            <p
              className="mx-auto w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              In addition to entity registration, we also assist in all
              statutory registrations, license s and permissions necessary for
              starting business in India such as -
            </p>
          </div>
          <div className="mx-auto w-auto">
            <img
              className="mx-auto w-auto"
              src={require("../Components/images/export taxation.png")}
              class="d-block"
              style={{
                width: 220,
                backgroundColor: "",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3">
        <div className="d-flex justify-content-between parents">
          <div className="text-start font-weight-bolder parents  mx-auto">
            <div
              class=" border  rounded"
              style={{
                color: "black",
                width: 400,
                backgroundColor: "#dfeaef",
              }}
            >
              <div class="card-body m-4">
                <p
                  class="card-title m-1 text-start"
                  style={{
                    color: "black",
                  }}
                >
                  1.PAN
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  2.TAN
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  3.GST
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  3.GST
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  4.Professional tax
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  5.Shops and establishment
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  6.MSME
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  5.Shops and establishment
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  5.Shops and establishment
                </p>
                <p
                  class="card-text m-1 text-start"
                  style={{
                    color: "black",
                    fontWeight: "lighter",
                  }}
                >
                  5.Shops and establishment
                </p>
              </div>
            </div>
            <p
              className="mx-auto w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              each business form has it’s own unique advantages.
            </p>
            <p
              className="mx-auto w-100"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Post Incorporation and Registration services
            </p>
            <p
              className="mx-auto w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              In addition to entity registration, we also assist in all
              statutory registrations, license s and permissions necessary for
              starting business in India such as -
            </p>
          </div>
          <div className="mx-auto w-auto">
            <img
              className="mx-auto w-auto"
              src={require("../Components/images/export taxation.png")}
              class="d-block"
              style={{
                width: 220,
              }}
            />
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3">
        <div className="text-start d-flex justify-content-between parents">
          <div className="text-start">
            <h1 className="text-start m-5" style={{ color: " #c3b047" }}>
              04
            </h1>
          </div>
          <div className="text-start font-weight-bolder parents mx-auto">
            <h5
              className="text-start w-100"
              style={{ color: " #c3b047", fontWeight: "normal" }}
            >
              International Tax Planning
            </h5>
            <p
              className="mx-auto w-100 "
              style={{ color: "black", fontWeight: "normal" }}
            >
              All documents which are signed by the proposed director or
              shareholder being a foreign national and the id proof and address
              of such person and the documents of foreign holding company need
              to be legalized either through Indian Embassy or to be apostilled
              as per Hague convention. In case the foreign person comes to India
              with original documents, then he must come on business Visa
            </p>
          </div>
          <div className="mx-auto w-auto">
            <img
              className="mx-auto w-auto"
              src={require("../Components/images/international taxation.png")}
              class="d-block"
              style={{
                width: 220,
                backgroundColor: "",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grand-parents mt-3">
        <div className="text-start justify-content-between  d-flex  parents">
          <div className="text-start">
            <h1 className="text-start m-5" style={{ color: " #c3b047" }}>
              05
            </h1>
          </div>
          <div className=" text-start font-weight-bolder parents ">
            <h5
              className="text-start w-100"
              style={{ color: " #c3b047", fontWeight: "normal" }}
            >
              Tax Compliance
            </h5>
            <p
              className="text-start w-100"
              style={{ color: "black", fontWeight: "normal" }}
            >
              All documents which are signed by the proposed director or
              shareholder being a foreign national and the id proof and address
              of such person and the documents of foreign holding company need
              to be legalized either through Indian Embassy or to be apostilled
              as per Hague convention. In case the foreign person comes to India
              with original documents, then he must come on business Visa
            </p>
          </div>
          <div className="mx-auto w-auto">
            <img
              className="mx-auto w-auto"
              src={require("../Components/images/tax complience.png")}
              class="d-block"
              style={{
                width: 220,
                backgroundColor: "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSupport;
