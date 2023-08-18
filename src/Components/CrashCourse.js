import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import ProfileComponent from "../views/ProfileComponent";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import "../Components/customcss.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import {
  BsFillCheckCircleFill,
  BsFillCheckSquareFill,
} from "react-icons/bs";

const CrashCourse = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  return (
    <div className="fixed-top2 bg-defalut-one2">
      <div className="grand-parents ">
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
        <div className="d-flex justify-content-between parents">
          <div className="font-weight-bolder w-100">
            <h1
              className="viewport text-end"
              style={{
                color: "white",
                fontSize: 55,
                verticalAlign: "middle",
              }}
            >
              Careers
            </h1>
          </div>
        </div>
      </div>
      <div className="jyandco-blueish pt-5">
        <div className="grand-parents">
          <div className="d-flex justify-content-between ">
            <div className="text-start ">
              <h1 className="text-start w-100 m-5" style={{ color: "white" }}>
                01
              </h1>
            </div>
            <div className="text-start w-100 font-weight-bolder">
              <h5
                className="text-start w-100"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Articled Assistants (Internship)
              </h5>
              <p style={{ color: "white", fontWeight: "normal" }}>
                This program is designed to provide practical exposure to the
                Chartered Accountants in making. The articled assistants at JY
                get opportunity to handle compliance, tax, accounting, auditing
                and other allied subjects right from entry level, which helps
                them transform into a thorough professional towards the end of
                the three-year period.
              </p>
            </div>
            <div className="mx-auto">
              <img
                src={require("../Components/images/career-article-intership.png")}
                class="d-block"
                style={{
                  width: 220,
                  backgroundColor: "",
                }}
              />
            </div>
          </div>
        </div>
        <div className="grand-parents mt-4">
          <div className="text-start d-flex justify-content-between">
            <div className="text-start ">
              <h1 className="text-start w-100 m-5" style={{ color: "white" }}>
                02
              </h1>
            </div>
            <div className="font-weight-bolder ">
              <h5
                className="text-start w-100"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Chartered Accountants
              </h5>
              <p style={{ color: "white", fontWeight: "normal" }}>
                We invite qualified Chartered Accountants to be part of our
                dynamic team. At JY, we offer a challenging and satisfying work
                environment and exposure.
              </p>
            </div>
            <div className="mx-auto">
              <img
                src={require("../Components/images/Chartered Accountants.png")}
                class="d-block"
                style={{
                  width: 220,
                  backgroundColor: "",
                }}
              />
            </div>
          </div>
        </div>
        <div className="grand-parents mt-4">
          <div className="d-flex justify-content-between ">
            <div className="text-start">
              <h1 className="text-start w-100 m-5" style={{ color: "white" }}>
                03
              </h1>
            </div>
            <div className="font-weight-bolder parents w-100">
              <h5
                className="text-start w-100"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Others
              </h5>
              <p style={{ color: "white", fontWeight: "normal" }}>
                We constantly look for talented resources in various domains,
                who can add value in delivering world class solutions to our
                clients.
              </p>
            </div>
            <div className="mx-auto">
              <img
                src={require("../Components/images/Others.png")}
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
    </div>
  );
};

export default CrashCourse;
