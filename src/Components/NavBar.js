import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./customcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import ProfileComponent from "../views/ProfileComponent";
import { motion } from "framer-motion";
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Button } from "reactstrap";
import  { Fragment } from "react";
import Taxation from "../Components/Taxation";
import BusinessSupport from "../Components/BusinessSupport";
import WhoWeAre from "../Components/WhoWeAre";
const containerVariants = {
hidden:{
  opacity:0
},
visible:{
  opacity:1,
  transition:{
    type:"spring",
    delay:0.5,
    when:"beforeChildren"

  }
}
}
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const NavBar = () => {
  
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
    <motion.div
      className="fixed-top2 bg-defalut-one "
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
                <a class="nav-link " href="jycas" style={{ fontWeight: "" }}>
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
      <div className="grand-parents ">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-between parents ">
            <motion.div
              class="page-item"
              whileHover={{
                scale: 1.3,
                originX: 0,
                textShadow: "0px 0px 12px  white",
                boxShadow: "0px 0px 12px  white",
                border: "2px solid white",
                padding: 10,
                fontWeight: 300,
                background:
                  "linear-gradient(105deg, rgba(135,127,255,1) 0%, rgba(117,174,255,1) 47%, rgba(96,231,255,1) 100%)",
                borderRadius: 50,
              }}
              transtion={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <a className="font-weight-bolder" href="/WhoWeAre">
                <motion.h3
                  style={{
                    color: "white ",
                    fontWeight: 300,
                    fontSize: 22,
                    background:
                      "linear-gradient(105deg, rgba(135,127,255,1) 0%, rgba(117,174,255,1) 47%, rgba(96,231,255,1) 100%)",
                    borderRadius: 50,
                    padding: 10,
                  }}
                  variants={childVariants}
                >
                  Who&nbsp;<u style={{ color: "white" }}>we are</u>
                </motion.h3>
              </a>
            </motion.div>
            <motion.div
              class="page-item"
              whileHover={{
                scale: 1.3,
                originX: 0,
                textShadow: "0px 0px 12px  white",
                boxShadow: "0px 0px 12px  white",
                border: "2px solid white",
                padding: 10,
                fontWeight: 300,
                background:
                  "linear-gradient(105deg, rgba(135,127,255,1) 0%, rgba(117,174,255,1) 47%, rgba(96,231,255,1) 100%)",
                borderRadius: 50,
              }}
              transtion={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <a className="font-weight-bolder" href="/WhatWeDo">
                <motion.h3
                  style={{
                    color: "white ",
                    fontWeight: 300,
                    fontSize: 22,
                    background:
                      "linear-gradient(105deg, rgba(135,127,255,1) 0%, rgba(117,174,255,1) 47%, rgba(96,231,255,1) 100%)",
                    borderRadius: 50,
                    padding: 10,
                  }}
                  variants={childVariants}
                >
                  What&nbsp;<u style={{ color: "white" }}>we Do</u>
                </motion.h3>
              </a>
            </motion.div>
            <motion.div
              class="page-item"
              whileHover={{
                scale: 1.3,
                originX: 0,
                textShadow: "0px 0px 12px  white",
                boxShadow: "0px 0px 12px  white",
                border: "2px solid white",
                padding: 10,
                fontWeight: 300,

                background:
                  "linear-gradient(105deg, rgba(135,127,255,1) 0%, rgba(117,174,255,1) 47%, rgba(96,231,255,1) 100%)",
                borderRadius: 50,
              }}
              transtion={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <a className="font-weight-bolder" href="/WhoWeServe">
                <motion.h3
                  style={{
                    color: "white ",
                    fontWeight: 300,
                    fontSize: 22,
                    background:
                      "linear-gradient(105deg, rgba(135,127,255,1) 0%, rgba(117,174,255,1) 47%, rgba(96,231,255,1) 100%)",
                    borderRadius: 50,
                    padding: 10,
                  }}
                  variants={childVariants}
                >
                  Who&nbsp;<u style={{ color: "white" }}>we serve</u>
                </motion.h3>
              </a>
            </motion.div>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default NavBar;
