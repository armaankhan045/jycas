import React from "react";
import "../Components/customcss.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BsTwitter } from "react-icons/bs";
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
import "../Components/customcss.css";

const ManagementConsultancy = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <div className="fixed-top2 bg-defalut-one1">
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
        <div className="d-flex justify-content-between parents">
          <div className="font-weight-bolder w-100">
            <h1
              className="viewport text-start"
              style={{ color: "white", fontSize: 55, verticalAlign: "middle" }}
            >
              Service
              <span style={{ color: "white", fontSize: 55 }}>
                3#
                <h1 style={{ color: "white", fontSize: 55 }}>
                  Management Consultancy
                </h1>
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
                Corporate Finance
                <span style={{ color: "white" }}>
                  <span
                    style={{
                      color: " white",
                      borderBottom: "solid 3px  #c3b047 ",
                      borderRadius: 5,
                    }}
                  >
                    /Project Finance
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
                Statutory Audit
              </h5>
              <p
                className="w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                Internal audit aims at checking that all processes and
                procedures are in place in a business and that all the functions
                of each employee are being carried out faithfully and properly.
                An internal audit is like having a private control system
                against things that can go wrong and reflect badly upon a
                company’s reputation, in terms of financial decisions and other
                verticals as well. In it, a consultant accountant goes over the
                expenses, wastage, fraud, pilferage, etc and suggests ways of
                minimizing them by fine-tuning business processes. In this way,
                internal audit is relevant not only to the accounting department
                of the firm, but to other verticals as well. It can be taken as
                an evaluation of the performance of each employee, and can bring
                about dramatic changes if done correctly. The changes suggested
                by an internal audit would benefit the whole organization. You
                can consult us as the unbiased third party who can extend this
                evaluation service to your company. We are especially adept at
                understanding modern businesses and guiding them to solving
                their problems such as spiraling costs, insurance and risk
                management, ethical dilemmas, and manufacturing bottlenecks. Let
                us help you run your business better!
              </p>
            </div>
            <div className="mx-auto">
              <img
                src={require("../Components/images/statutory audit.png")}
                class="d-block m-4"
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
                className="m-5 text-start rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                02
              </h1>
            </div>
            <div className="font-weight-bolder parents  mx-auto">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Tax Audit
              </h5>
              <p
                className="mx-auto text-start w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                Tax Audit is a compulsory audit under section 44AB of the Income
                Tax Act, 1961 if the total turnover exceeds the specified limits
                in the Act. It is conducted by a practicing Chartered
                accountant. It involves an examination of the entity\'s tax
                accounts to check compliance with the provisions of Income Tax
                Act, 1961 with respect to declaration of the assessable income,
                tax reductions or tax offsets claimed in the tax return. We are
                well conversant with the tax laws of India and are presently
                assisting many of our clients in filing their tax returns within
                time. The Indian Tax department examines tax returns submitted,
                and may call for a tax audit if it sees the need. If you are
                ever in this position, you can call on us for the best possible
                advice. Having an accountant present at a tax audit is an option
                that anyone appearing at a tax audit has. We are an accredited
                accounting firm, and our services can help you with the
                proposals and requests presented in a tax audit. We can advise
                you on how best to handle the queries raised and guide you to
                meet the requirements of the audit.
              </p>
            </div>
            <div className="mx-auto">
              <img
                src={require("../Components/images/tax audit.png")}
                class="d-block m-4"
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
                className="m-5 text-start rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                03
              </h1>
            </div>
            <div className="font-weight-bolder parents  mx-auto">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Internal Audit
              </h5>
              <p
                className="mx-auto text-start w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                Internal audit aims at checking that all processes and
                procedures are in place in a business and that all the functions
                of each employee are being carried out faithfully and properly.
                An internal audit is like having a private control system
                against things that can go wrong and reflect badly upon a
                company’s reputation, in terms of financial decisions and other
                verticals as well. In it, a consultant accountant goes over the
                expenses, wastage, fraud, pilferage, etc and suggests ways of
                minimizing them by fine-tuning business processes. In this way,
                internal audit is relevant not only to the accounting department
                of the firm, but to other verticals as well. It can be taken as
                an evaluation of the performance of each employee, and can bring
                about dramatic changes if done correctly. The changes suggested
                by an internal audit would benefit the whole organization. You
                can consult us as the unbiased third party who can extend this
                evaluation service to your company. We are especially adept at
                understanding modern businesses and guiding them to solving
                their problems such as spiraling costs, insurance and risk
                management, ethical dilemmas, and manufacturing bottlenecks. Let
                us help you run your business better!
              </p>
            </div>
            <div className="mx-auto  m-4">
              <img
                src={require("../Components/images/internal audit.png")}
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
                className="m-5 text-start rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                04
              </h1>
            </div>
            <div className="font-weight-bolder parents  mx-auto">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Certification Services
              </h5>
              <p
                className="mx-auto text-start w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                If you are searching for a CA Certification, look no further! We
                cater to requirements from both businesses and individuals. We
                also cater to certificates required for student visa processing.
              </p>
            </div>
            <div className="mx-auto  m-4">
              <img
                className="mx-auto"
                src={require("../Components/images/certification services.png")}
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
                className="m-5 text-start rounded-circle p-2"
                style={{ color: " #c3b047", backgroundColor: "#163f73" }}
              >
                05
              </h1>
            </div>
            <div className="font-weight-bolder parents  mx-auto">
              <h5
                className="text-start w-100 my-4"
                style={{ color: " #c3b047", fontWeight: "normal" }}
              >
                Agreed Upon Procedures
              </h5>
              <p
                className="mx-auto text-start w-100"
                style={{ color: "black", fontWeight: "normal" }}
              >
                Agreed-upon procedures are determined based on an agreement with
                an entity to review and report on any financial information or
                operational processes. For example procedures can include
                certain tests on accounts payable, accounts receivable,
                purchases, sales, etc. So, if there is a particular area of your
                finances, where you need handholding and guidance, we are ready
                to assist you!
              </p>
            </div>
            <div className="mx-auto  m-4">
              <img
                className="mx-auto w-auto"
                src={require("../Components/images/agreed user.png")}
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

export default ManagementConsultancy;
