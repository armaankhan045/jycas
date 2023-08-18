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

const Taxation = () => {
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
        <div className="d-flex justify-content-between parents">
          <div className="font-weight-bolder w-100">
            <h1
              className="viewport text-start"
              style={{
                color: "white",
                fontSize: 55,
                verticalAlign: "middle",
              }}
            >
              Service
              <span style={{ color: "white", fontSize: 55 }}>
                #2
                <h1 style={{ color: "white", fontSize: 55 }}>Taxation</h1>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="jyandco-blueish m-0 p-0">
        <div className="grand-parents">
          <div className="parents">
            <div className="font-weight-bolder parents ">
              <h1 className="text-start " style={{ color: "white" }}>
                <span style={{ color: "white" }}>
                  <span
                    style={{
                      color: " white",
                      borderBottom: "solid 3px  #c3b047 ",
                      borderRadius: 5,
                    }}
                  >
                    Taxation
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="grand-parents mt-3">
          <div
            className="d-flex justify-content-between parents rounded"
            style={{ backgroundColor: "floralwhite" }}
          >
            <div className="text-start">
              <h1
                className="text-start m-5 rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                01
              </h1>
            </div>
            <div className="font-weight-bolder parents ">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Income Tax
              </h5>
              <p
                className="w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                All documents which are signed by the proposed director or
                shareholder being a foreign national and the id proof and
                address of such person and the documents of foreign holding
                company need to be legalized either through Indian Embassy or to
                be apostilled as per Hague convention. In case the foreign
                person comes to India with original documents, then he must come
                on business Visa.
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
          <div
            className="d-flex justify-content-between parents rounded"
            style={{ backgroundColor: "floralwhite" }}
          >
            <div className="text-start">
              <h1
                className="text-start m-5 rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                02
              </h1>
            </div>
            <div className="font-weight-bolder parents ">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Goods and Services Tax (GST)
              </h5>
              <p
                className="w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                All documents which are signed by the proposed director or
                shareholder being a foreign national and the id proof and
                address of such person and the documents of foreign holding
                company need to be legalized either through Indian Embassy or to
                be apostilled as per Hague convention. In case the foreign
                person comes to India with original documents, then he must come
                on business Visa
              </p>
            </div>
            <div className="mx-auto">
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
          <div
            className="d-flex justify-content-between parents rounded"
            style={{ backgroundColor: "floralwhite" }}
          >
            <div className="text-start">
              <h1
                className="text-start m-5 rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                03
              </h1>
            </div>
            <div className="font-weight-bolder parents ">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Expat Taxation
              </h5>
              <p
                className="w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                All documents which are signed by the proposed director or
                shareholder being a foreign national and the id proof and
                address of such person and the documents of foreign holding
                company need to be legalized either through Indian Embassy or to
                be apostilled as per Hague convention. In case the foreign
                person comes to India with original documents, then he must come
                on business Visa
              </p>
            </div>
            <div className="mx-auto">
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
          <div
            className="d-flex justify-content-between parents rounded"
            style={{ backgroundColor: "floralwhite" }}
          >
            <div className="text-start">
              <h1
                className="text-start m-5 rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                04
              </h1>
            </div>
            <div className="font-weight-bolder parents ">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                International Tax Planning
              </h5>
              <p
                className="w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                All documents which are signed by the proposed director or
                shareholder being a foreign national and the id proof and
                address of such person and the documents of foreign holding
                company need to be legalized either through Indian Embassy or to
                be apostilled as per Hague convention. In case the foreign
                person comes to India with original documents, then he must come
                on business Visa
              </p>
            </div>
            <div className="mx-auto">
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
          <div
            className="d-flex justify-content-between parents rounded"
            style={{ backgroundColor: "floralwhite" }}
          >
            <div className="text-start">
              <h1
                className="text-start m-5 rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                05
              </h1>
            </div>
            <div className="font-weight-bolder parents ">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Tax Compliance
              </h5>
              <p
                className="w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                All documents which are signed by the proposed director or
                shareholder being a foreign national and the id proof and
                address of such person and the documents of foreign holding
                company need to be legalized either through Indian Embassy or to
                be apostilled as per Hague convention. In case the foreign
                person comes to India with original documents, then he must come
                on business Visa
              </p>
            </div>
            <div className="mx-auto">
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
    </div>
  );
};

export default Taxation;
