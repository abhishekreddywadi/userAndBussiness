import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import BriefcaseIcon from "../../assets/accountant.png";
import AccountantIcon from "../../assets/briefcase.png";
import ProfileImg from "../../assets/profile.jpg";

import "./sidebar.scss";
import UserContext from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";

const Sidebar = () => {
  const { navButtonClick } = useContext(UserContext);
  const [verified, setVerified] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [verifyError, setVerifyError] = useState("");
  console.log("navButtonClick", navButtonClick);
  const handleVerifySubmit = () => {
    if (passkey === '123456') { // Replace with your actual verification logic
      setVerified(true);
      setShowVerifyModal(false);
      setPasskey('');
      setVerifyError('');
    } else {
      setVerifyError('Invalid passkey. Please try again.');
    }
  };
  return (
    <div
      className={`sidebar d-flex flex-column ${
        navButtonClick && "sidebar-clicked"
      }`}
    >
      <span className="logo d-flex mx-auto">
        {/* <img src={LogoWhite} alt="logo" /> */}
        <h4 className="text-white mb-0">Logo</h4>
      </span>

      <div className="divider"></div>

      <p className="nav-head mb-0">
        <strong>User Account</strong>
      </p>

      <ul className="nav nav-pills profile">
        <li className="d-flex align-items-center gap-3 text-white">
          <img src={ProfileImg} alt="profile-img" />
          <h5 className="mb-0 fw-bold">Shree Ganesh </h5>
        </li>
      </ul>

      <div className="divider"></div>

      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <img src={BriefcaseIcon} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/user-home" className="nav-link">
            <img src={BriefcaseIcon} alt="icon" />
            <span>User Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/business-account" className="nav-link">
            <img src={AccountantIcon} alt="icon" />
            <span>My Account</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/household" className="nav-link">
            <img src={AccountantIcon} alt="icon" />
            <span>Household</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/account-settings" className="nav-link">
            <img src={AccountantIcon} alt="icon" />
            <span>Account Settings</span>
          </Link>
        </li>
      </ul>

      <div className="divider"></div>

      <p className="nav-head mb-4">
        <strong>Business Account</strong>
      </p>

      {verified ? (
        <div>
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <Accordion className="d-flex flex-column mb-auto gap-2">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Individual Business</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              {/* <li className="nav-item">
                <Link to="/individual-profile" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/individual-account" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/individual-settings" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/account-settings" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Master Business</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/master-profile" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/master-account" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/business-setting" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/master-plan" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Plan & Packages</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/batch" className="nav-link">
                  <div className="icon-placeholder">
                    {"Batch/Class".charAt(0)}
                  </div>
                  <span>Batch/Class</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/make-payment" className="nav-link">
                  <div className="icon-placeholder">
                    {"Make Payment".charAt(0)}
                  </div>
                  <span>Make Payment</span>
                </Link>
              </li>
              <Accordion className="d-flex flex-column mb-auto gap-2">
                <Accordion.Item eventKey="1-1">
                  <Accordion.Header>
                    <li className="nav-item">
                      <div className="icon-placeholder">
                        {"Manage".charAt(0)}
                      </div>
                      <span>Manage Staff</span>
                    </li>
                  </Accordion.Header>
                  <Accordion.Body>
                    <li className="nav-item">
                      <Link to="/view-staff" className="nav-link">
                        <div className="icon-placeholder">
                          {"View".charAt(0)}
                        </div>
                        <span>View All Staff</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/master-account" className="nav-link">
                        <div className="icon-placeholder">
                          {"Staff".charAt(0)}
                        </div>
                        <span>Staff Salary</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/staff-attendance" className="nav-link">
                        <div className="icon-placeholder">
                          {"Staff".charAt(0)}
                        </div>
                        <span>Staff Attendance</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        <div className="icon-placeholder">
                          {"Staff".charAt(0)}
                        </div>
                        <span>Staff Permission</span>
                      </Link>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1-2">
                  <Accordion.Header>
                    <li className="nav-item">
                      <div className="icon-placeholder">
                        {"Manage".charAt(0)}
                      </div>
                      <span>Manage User</span>
                    </li>
                  </Accordion.Header>
                  <Accordion.Body>
                    <li className="nav-item">
                      <Link to="/view-user" className="nav-link">
                        <div className="icon-placeholder">
                          {"View".charAt(0)}
                        </div>
                        <span>View All Users</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user-attendance" className="nav-link">
                        <div className="icon-placeholder">
                          {"Staff".charAt(0)}
                        </div>
                        <span>User Attendance</span>
                      </Link>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1-3">
                  <Accordion.Header>
                    <li className="nav-item">
                      <div className="icon-placeholder">
                        {"Events".charAt(0)}
                      </div>
                      <span>Events</span>
                    </li>
                  </Accordion.Header>
                  <Accordion.Body>
                    <li className="nav-item">
                      <Link to="/view-events" className="nav-link">
                        <div className="icon-placeholder">
                          {"View".charAt(0)}
                        </div>
                        <span>View All Events</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user-attendance" className="nav-link">
                        <div className="icon-placeholder">
                          {"Staff".charAt(0)}
                        </div>
                        <span>Manage Events</span>
                      </Link>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1-4">
                  <Accordion.Header>
                    <li className="nav-item">
                      <div className="icon-placeholder">
                        {"Manage Services".charAt(0)}
                      </div>
                      <span>Manage Services</span>
                    </li>
                  </Accordion.Header>
                  <Accordion.Body>
                    <li className="nav-item">
                      <Link to="/view-service" className="nav-link">
                        <div className="icon-placeholder">
                          {"View".charAt(0)}
                        </div>
                        <span>View All Services</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/user-attendance" className="nav-link">
                        <div className="icon-placeholder">
                          {"Staff".charAt(0)}
                        </div>
                        <span>Manage Events</span>
                      </Link>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1-5">
                  <Accordion.Header>
                    <li className="nav-item">
                      <div className="icon-placeholder">
                        {"Courses".charAt(0)}
                      </div>
                      <span>Courses</span>
                    </li>
                  </Accordion.Header>
                  <Accordion.Body>
                    <li className="nav-item">
                      <Link to="/view-course" className="nav-link">
                        <div className="icon-placeholder">
                          {"View".charAt(0)}
                        </div>
                        <span>View All Courses</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/manage-course" className="nav-link">
                        <div className="icon-placeholder">
                          {"Manage".charAt(0)}
                        </div>
                        <span>Manage Courses</span>
                      </Link>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </ul>

      <div className="divider"></div>

      <p className="nav-head mb-4">
        <strong>Features</strong>
      </p>

      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <Accordion className="d-flex flex-column mb-auto gap-2">
          <Accordion.Item eventKey="events">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Events</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="attendance">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="gate-pass">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Events</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="booking">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="slots">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Events</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="plan">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="certificate">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Events</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="class-batches">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="courses">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="form-creation">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Events</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="ecommerce">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="apis">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Events</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="partner">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="coming-soon">
            <Accordion.Header>
              <li className="nav-item">
                <img src={BriefcaseIcon} alt="icon" />
                <span>Attendance</span>
              </li>
            </Accordion.Header>
            <Accordion.Body>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Profile".charAt(0)}
                  </div>
                  <span>My Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">
                    {"My Account".charAt(0)}
                  </div>
                  <span>My Account</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Settings".charAt(0)}</div>
                  <span>Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <div className="icon-placeholder">{"Logout".charAt(0)}</div>
                  <span>Logout</span>
                </Link>
              </li>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </ul>
      </div>
      ): <div className="lock-content text-center d-flex flex-column align-items-center text-white py-5 px-4 ">
      <div className="icon-container mb-3">
        <img 
          src={AccountantIcon} 
          alt="icon" 
          style={{
            width: "60px", 
            height: "60px",
            filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))"
          }} 
        />
      </div>
      <h6 className="fw-bold mb-2">Account Registration and  Verification Required</h6>
      <p className="text-light-50 mb-3" style={{ fontSize: "13px", opacity: 0.85 }}>
        Please Enter the pass key to access features
      </p>
      <button 
        className="btn btn-outline-light btn-sm rounded-pill px-4" 
        style={{ fontSize: "12px", letterSpacing: "0.5px" }}
        onClick={() => setShowVerifyModal(true)}
      >
        Verify Now
      </button>
  </div>}
  <Modal show={showVerifyModal} onHide={() => setShowVerifyModal(false)} centered>
  <Modal.Header closeButton>
    <Modal.Title>Account Verification</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="mb-3">
      <label htmlFor="passkey" className="form-label">Enter Passkey</label>
      <input
        type="password"
        className="form-control"
        id="passkey"
        value={passkey}
        onChange={(e) => setPasskey(e.target.value)}
        placeholder="Enter your passkey"
      />
      {verifyError && <div className="text-danger mt-2">{verifyError}</div>}
    </div>
  </Modal.Body>
  <Modal.Footer>
    <button className="btn btn-secondary" onClick={() => setShowVerifyModal(false)}>
      Cancel
    </button>
    <button className="btn btn-primary" onClick={handleVerifySubmit}>
      Verify
    </button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default Sidebar;
