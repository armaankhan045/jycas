import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "../Components/customcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileComponent from "../views/ProfileComponent";

import { NavLink } from "react-router-dom";
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
  Button
} from "reactstrap";

const OncampusProgram = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="fixed-top2 bg-defalut-one">
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
              className="viewport text-end"
              style={{
                color: "white",
                fontSize: 55,
                verticalAlign: "middle",
              }}
            >
              About
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
            <div className="mx-auto">
              <img
                src={require("../Components/images/about-ourfirm.jpg")}
                class="d-block m-4"
                style={{
                  width: 220,
                  backgroundColor: "",
                }}
              />
            </div>
            <div className="font-weight-bolder parents m-4 ">
              <p
                className="w-100"
                style={{ color: "black", fontWeight: "normal", fontSize: 14 }}
              >
                Melding together the rich experience of two practising Chartered
                Accountants from two strikingly different backgrounds JY was
                incorporated to offer to businesses the fruits of international
                work wisdom in Accounting Principles and Auditing services. The
                mark of JY is that of fine training meeting nearly three decades
                of varied experience working with different scales and types of
                businesses. We are a firm developed out of the vision to offer
                value that has been enriched by widespread travel and
                cross-functional exposure. We bring proven mettle and technical
                soundness to businesses so that they can keep control of their
                spends and fine tune their practices to become responsible
                contributors in their industry. We have empirically proven
                take-aways from working in manufacturing, trading, FMCG,
                manageme -nt consulting, & many other sectors. The people behind
                the firm are passionate about sticking to classical accountancy
                principles & practices while allowing for modern thinking and
                sustainability-oriented codes of ethic to offer business
                insights laden with gumption to all clients. With lofty ideals
                and the simple value-system of offering unadulterated results,
                JY was incorporated in 2017. At JY, it is all about relating to
                the clients on a human level so that values are not compromised
                in the interest of achieving finesse in business practices and
                revenue. This passion has rung true by giving rise to enduring
                trust and a growing network among those who come in contact with
                us. As a mid-tier firm, we are large enough for businesses to
                benefit from our strong background and financial acumen – yet
                we’re small enough to still view individual client relationships
                as our most valued asset.
              </p>
            </div>
          </div>
        </div>
        <div className="grand-parents mt-5">
          <div className="d-flex justify-content-between">
            <h1 className="ms-3" style={{ color: "white" }}>
              Our partners
            </h1>
          </div>
        </div>
        <div className="grand-parents mt-5 partner-bg">
          <div className="d-flex justify-content-between parents">
            <div className="font-weight-bolder">
              <h5
                className="text-start ms-4 mt-4"
                style={{ color: "#163f73 " }}
              >
                Bhaskar Jagatha, FCA
              </h5>
              <p
                className="ms-4"
                style={{
                  color: "black",
                  fontWeight: "normal",
                  fontSize: 12,
                }}
              >
                A Chartered Accountant with more than two decades of experience
                in multi-functional roles in Assurance, Finance, SOX Compliance,
                Taxation, Business and Risk Advisory in India and abroad. His
                experience and exposure to Indian, Middle East, European,
                American and Australian markets makes him a true global
                professional and who can be a trusted advisor for all
                international business and cross border transactions. With a
                career stint spread across industries like retail,
                infrastructure, telecom, steel and FMCG, he maintains a
                consistently proven track record of client relationships and
                professional services delivery. He was associated with global
                corporates including Unilever, Arcelor Mittal and Vodafone in
                the past.
              </p>
            </div>
            <div className="mx-auto">
              <img
                src={require("../Components/images/bhaskar sir -1.png")}
                class="d-block mt-4 mb-4"
                style={{
                  width: 200,
                  height: 160,
                  backgroundColor: "",
                }}
              />
            </div>
          </div>
        </div>
        <div className="grand-parents mt-5 partner-bg">
          <div className="d-flex justify-content-between parents mx-auto">
            <div className="mx-auto">
              <img
                src={require("../Components/images/vidya mam 1.png")}
                class="d-block m-4"
                style={{
                  width: 200,
                  height: 160,
                  backgroundColor: "",
                }}
              />
            </div>
            <div className="font-weight-bolder  m-4">
              <h5 style={{ color: "#163f73 " }}>Vidya Yerramsetty, FCA</h5>
              <p style={{ color: "black", fontWeight: "normal", fontSize: 12 }}>
                A Chartered Accountant trained with Ernst & Young with about two
                decades of experience in Accounting, Assurance, SOX Compliance,
                Forensic and Transaction Advisory. Vidya after completing her
                internship from S. R. Batliboi & Co (a member firm of Ernst and
                Young) qualified in the year 2005. Post qualification, she was
                associated with KPMG, PKF Sridhar & Santhanam and Alcatel Lucent
                in various roles. Vidya focuses on the assurance, compliance,
                and risk advisory practice of the firm. In addition, she has
                honed the firm’s expertise in the areas of international
                taxation and payroll. She is passionate about knowledge sharing
                and spearheads the professional knowledge-building initiative of
                the firm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OncampusProgram;
