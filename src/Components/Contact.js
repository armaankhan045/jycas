import React, { Component } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "../Components/customcss.css";
import { NavLink } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileComponent from "../views/ProfileComponent";
import moment from "moment";
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
} from "reactstrap";
import { Button } from "reactstrap";
import { BiPhoneOutgoing, BiMap } from "react-icons/bi";
import { FiMessageSquare } from "react-icons/fi";
import { BsInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
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
const Contact = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });

  return (
    <motion.div
      className="fixed-top2 bg-defalut-one2 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
              className="viewport text-end"
              style={{
                color: "white",
                fontSize: 55,
                verticalAlign: "middle",
              }}
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
      <div className="jyandco-blueish m-0 p-0">
        <div className="grand-parents m-2 pb-5">
          <div className="d-flex justify-content-evenly parents ">
            <div
              class="border  rounded shadow-lg  borderRadius rounded mt-3 parents"
              style={{
                color: "white",
                width: 200,
                height: 250,
              }}
            >
              <div class="my-2  text-center mx-auto">
                <img
                  className="my-2  mx-auto"
                  src={require("../Components/images/map-pin.png")}
                  style={{
                    color: "black",
                    borderRadius: 0,
                    width: 80,
                    height: 80,
                  }}
                />
              </div>
              <div
                class="parents"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    Location
                  </h5>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: 13,
                    }}
                  >
                    B1, 3rd Floor, IA Colony
                  </p>

                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    Off Sardar Patel Road,
                  </p>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    Begumpet, Hyderabad,
                  </p>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    Telangana 500003, India.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="border  rounded shadow-lg borderRadius rounded mt-3 parents"
              style={{
                color: "white",
                width: 200,
                height: 250,
              }}
            >
              <div class="my-2 text-center mx-auto">
                <img
                  className="my-2  mx-auto"
                  src={require("../Components/images/phone-call.png")}
                  style={{
                    color: "black",
                    borderRadius: 0,
                    width: 80,
                    height: 80,
                  }}
                />
              </div>
              <div
                class="parents"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title m-1 text-center "
                    style={{
                      color: "white",

                      fontWeight: 500,
                    }}
                  >
                    Phone Number
                  </h5>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    +91 40 4018 8989
                  </p>

                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    +91 40 2935 8989
                  </p>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    +91 949371 8989
                  </p>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    +1 347 391 8989
                  </p>
                </div>
              </div>
            </div>
            <div
              class="border  rounded shadow-lg borderRadius rounded mt-3 parents"
              style={{
                color: "white",
                width: 200,
                height: 250,
              }}
            >
              <div class="my-2  text-center mx-auto">
                <img
                  className="my-2  mx-auto"
                  src={require("../Components/images/calendar.png")}
                  style={{
                    color: "black",
                    borderRadius: 0,
                    width: 80,
                    height: 80,
                  }}
                />
              </div>
              <div
                class="parents"
                style={{
                  color: "black",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    Office Timings
                  </h5>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",
                      fontSize: 13,
                    }}
                  >
                    Monday to Saturday
                  </p>

                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    09:30 am - 06:30 pm (IST)
                  </p>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    <b>it's {moment().format("dddd  , h:mm:ss a")}</b>
                  </p>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    We are open now!
                  </p>
                </div>
              </div>
            </div>
            <div
              class="border  rounded shadow-lg borderRadius rounded mt-3 parents"
              style={{
                color: "white",
                width: 200,
                height: 250,
              }}
            >
              <div class="my-2  text-center mx-auto">
                <img
                  className="my-2  mx-auto"
                  src={require("../Components/images/mail.png")}
                  style={{
                    color: "black",
                    borderRadius: 0,
                    width: 80,
                    height: 80,
                  }}
                />
              </div>
              <div
                class="parents"
                style={{
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: 500,
                    }}
                  >
                    Email
                  </h5>
                  <p
                    class="card-text m-1 text-center"
                    style={{
                      color: "white",
                      fontWeight: "normal",

                      fontSize: 13,
                    }}
                  >
                    info@jycas.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row mt-5 justify-content-center align-content-center grand-parents "
          style={{
            border: "3px solid #ffffff",
            borderRadius: 5,
          }}
        >
          <h4 class="w-100 text_left  ms-1 mt-3">
            <div>
              <span class="bold">Reach Us</span>
            </div>
          </h4>
          <p class="ms-">
            JY welcomes committed and sincere candidates to join the force.
            Please share your details in the form and we will get back to you.
          </p>
          <div class="col-md-12">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-3">
                <div>
                  <iframe
                    style={{
                      padding: "1rem",
                      width: "100%",
                      height: "450px",
                    }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.337965146046!2d78.47063011435397!3d17.44353090577597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a4a95555555%3A0x8167712a4990f3a9!2sJ%20Y%20%26%20CO%2C%20Chartered%20Accountants!5e0!3m2!1sen!2sin!4v1646373808818!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-3">
                <grammarly-extension
                  data-grammarly-shadow-root="true"
                  class="dnXmp"
                ></grammarly-extension>
                <grammarly-extension
                  data-grammarly-shadow-root="true"
                  class="dnXmp"
                ></grammarly-extension>
                <form
                  class="form_inner"
                  method="post"
                  style={{
                    padding: "1rem",
                    height: "450px",
                    width: "100%",
                  }}
                >
                  <div>
                    <input
                      name="NAME"
                      type="text"
                      title="Name Can not be blank"
                      required=""
                      placeholder="Name"
                      control-id="ControlID-1"
                    />
                    <input
                      style={{
                        color: "grey",
                      }}
                      name="COMPANY_NAME"
                      type="text"
                      placeholder="Organization Name"
                      control-id="ControlID-2"
                    />
                    <input
                      name="EMAIL"
                      type="email"
                      pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"
                      title="Please enter valid eMail address"
                      required=""
                      placeholder="Email"
                      control-id="ControlID-3"
                    />
                    <input
                      name="PHONE_NO"
                      type="text"
                      maxlength="10"
                      minlength="10"
                      pattern="^\d{10}$"
                      title="should be number and should be 10 digits"
                      placeholder="Phone Number"
                      required=""
                      control-id="ControlID-4"
                    />
                    <select
                      name="SERVICE"
                      required=""
                      control-id="ControlID-5"
                      style={{ backgroundColor: "" }}
                    >
                      <option className="custom-font" selected="">
                        Select Service
                      </option>
                      <option className="custom-font" value="Statutory Audit">
                        Statutory Audit
                      </option>
                      <option className="custom-font" value="Internal Audit">
                        Internal Audit
                      </option>
                      <option
                        className="custom-font"
                        value="Certification Services"
                      >
                        Certification Services
                      </option>
                      <option className="custom-font" value="Income Tax">
                        Income Tax
                      </option>
                      <option
                        className="custom-font"
                        value="Goods and Services Tax (GST)"
                      >
                        Goods and Services Tax (GST)
                      </option>
                      <option
                        className="custom-font"
                        value="Company Incorporation"
                      >
                        Company Incorporation
                      </option>
                      <option
                        className="custom-font"
                        value="Accounting Services"
                      >
                        Accounting Services
                      </option>
                      <option
                        className="custom-font"
                        value="Payroll Management"
                      >
                        Payroll Management
                      </option>
                      <option className="custom-font" value="ROC Compliance">
                        ROC Compliance
                      </option>
                      <option
                        className="custom-font"
                        value="Incorporation of Company Outside India"
                      >
                        Incorporation of Company Outside India
                      </option>
                      <option
                        className="custom-font"
                        value="International Taxation"
                      >
                        International Taxation
                      </option>
                      <option className="custom-font" value="Other Services">
                        Other Services
                      </option>
                    </select>
                    <textarea
                      maxlength="500"
                      name="MESSAGE"
                      rows="3"
                      placeholder="Your Message"
                      control-id="ControlID-6"
                      spellcheck="false"
                    ></textarea>
                    <div class="text_right">
                      <input
                        type="submit"
                        name="Send"
                        id="submit_details"
                        value="Send"
                        disabled=""
                        control-id="ControlID-7"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
