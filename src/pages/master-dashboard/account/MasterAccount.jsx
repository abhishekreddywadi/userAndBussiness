import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../../context/UserContext";
import Header from "../../../components/header/Header";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./masterAccount.scss";
import Accordion from "react-bootstrap/Accordion";
import AddPaymentModal from "./addPaymentModal/AddPaymentModal";
import MasterStaff from "./masterStaff/MasterStaff";
import MasterUser from "./masterUser/MasterUser";

import Signature from "../../../assets/signature.png";
import bruceMars from "../../../assets/shree-ganesh.png";
import VerifiedIcon from "../../../assets/verified.png";
import GPay from '../../../assets/gpay.png';
import QR from '../../../assets/qr.svg';
import UPIImg from '../../../assets/upi.jpg';
import PolicyImg from '../../../assets/policy.png'
import License from '../../../assets/license.png'
import { Link } from "react-router-dom";

function MasterAccount() {
  const { navButtonClick } = useContext(UserContext);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showActivePayemnt, setShowActivePayemnt] = useState(false);

  const handleShowActivePayment = () => {
    setShowActivePayemnt(true);
    setShowPaymentModal(false);
  };
  const location = useLocation();

  const [activeKey, setActiveKey] = useState(
    location.pathname.includes('/view-staff') ? 'staff' : location.pathname.includes('/master-account') ? 'info' : 'student'
  );
  useEffect(() => {
    if (location.pathname.includes('/view-staff')) {
      setActiveKey('staff');
    } else if (location.pathname.includes('/master-account')) {
      setActiveKey('info');
    } else {
      setActiveKey('student');
    }
  }, [location.pathname]);

  return (
    <div
      className={`dashboard ${
        navButtonClick && "dashboard-full"
      } master-account`}
    >
      <Container>
        <Header />
        <div className="row py-4 py-md-5">
          <div className="col-12 col-md-8">
            <div className="profile-business-header mb-4">
              <div className="row align-items-center w-100">
                <div className="col-12 col-lg-6">
                  <div className="profile-section text-white mb-4 mb-lg-0">
                    <img
                      src={bruceMars}
                      alt="Profile"
                      className="profile-image"
                    />
                    <div>
                      <h6 className="business-name">
                        Aaloha the school of Dance
                      </h6>
                      <p className="business-id mb-0">
                        Business ID / MB_123456
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="documents-section">
                    <div className="document-icon">
                      <FontAwesomeIcon icon={faBook} />
                      <p>Documentation</p>
                    </div>
                    <div className="document-icon">
                      <img src={PolicyImg} alt="Agreement" />
                      <p>Agreement</p>
                    </div>
                    <div className="document-icon">
                      <img src={License} alt="Business License" />
                      <p>Business License</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <Tabs
                 activeKey={activeKey}
                 onSelect={(k) => setActiveKey(k)}
                id="uncontrolled-tab-example"
                className="account-tabs"
              >
                <Tab eventKey="info" title="Info">
                  <div className="row text-center">
                    <div className="col-12 col-md-3">
                      <div className="profile-business-id mt-5">
                        <img
                          src={Signature}
                          alt="Signature"
                          className="signature-img"
                        />
                        <p className="business-id-title">MB ID</p>
                        <p className="business-id-text">ABCD12345678789</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-9 p-0 m-0">
                      <p className="admin">Company Admin</p>
                      <div className="row profile-roles mt-0 me-0 p-3">
                        
                        <div className="col-6">
                          <img
                            src={bruceMars}
                            alt="Signature"
                            className="signature-img"
                          />
                          <p className="role-name">Richard Davis</p>
                          <p className="role-label">CEO</p>
                        </div>
                        <div className="col-6">
                          <img
                            src={bruceMars}
                            alt="Signature"
                            className="signature-img"
                          />
                          <p className="role-name">Richard Davis</p>
                          <p className="role-label">CEO</p>
                        </div>
                        <div className="col-6">
                          <img
                            src={bruceMars}
                            alt="Signature"
                            className="signature-img"
                          />
                          <p className="role-name">Richard Davis</p>
                          <p className="role-label">CEO</p>
                        </div>
                        <div className="col-6">
                          <img
                            src={bruceMars}
                            alt="Signature"
                            className="signature-img"
                          />
                          <p className="role-name">Richard Davis</p>
                          <p className="role-label">CEO</p>
                        </div>
                        <div className="col-6">
                          <img
                            src={bruceMars}
                            alt="Signature"
                            className="signature-img"
                          />
                          <p className="role-name">Richard Davis</p>
                          <p className="role-label">CEO</p>
                        </div>
                        <div className="col-6">
                          <img
                            src={bruceMars}
                            alt="Signature"
                            className="signature-img"
                          />
                          <p className="role-name">Richard Davis</p>
                          <p className="role-label">CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="staff" title="Staff">
                  <MasterStaff />
                </Tab>
                <Tab eventKey="student" title="User/Student">
                  <MasterUser />
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="master-side">
              <div className="master-side-head">
                <h5>
                  Master ID: <strong>BHA-xxxxxxx</strong>
                </h5>
              </div>
              <div className="master-side-content">
                <div className="master-content-box d-flex align-items-center gap-3 mb-3">
                  <p className="mb-0">Name</p>
                  <p className="mb-0">Aaloka the school of Dance</p>
                </div>

                <div className="master-content-box d-flex align-items-center gap-3 mb-3">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <p className="mb-0">rohan@gmail.com</p>
                </div>

                <div className="master-content-box d-flex align-items-center gap-3 mb-3">
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <p className="mb-0">+912597812345</p>
                </div>

                <div className="master-content-box d-flex align-items-center gap-3">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <p className="mb-0">
                    BUILDING 245 JP NAGER 13 MAIN SLAMABAD UCHII GALI AMRITSAR
                    PUNJAB PIN 143001
                  </p>
                </div>
              </div>
            </div>
            <div className="profile-care-card add-paymemt d-flex align-items-center justify-content-between mt-4 mb-4">
              <h6 className="mb-0">Payment Method not found</h6>
              <button
                type="button"
                className="button"
                onClick={() => {
                  setShowPaymentModal(true);
                }}
              >
                Add Now
              </button>
            </div>
            {showActivePayemnt && (
              <>
                <p className="care-of-text">
                  Payment Gateway{" "}
                  <img
                    src={VerifiedIcon}
                    alt="verified"
                    style={{ width: 20 }}
                  />
                </p>
                <div className="profile-care-card">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="profile-accordion-head d-flex align-items-center w-100 pe-3">
                          <div class="care-for-content d-flex align-items-center justify-content-between w-100">
                            <h6>UPI ACTIVE</h6>
                            <button
                              type="button"
                              className="button"
                              onClick={() => {
                                setShowPaymentModal(true);
                              }}
                            >
                              Active Now
                            </button>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="pt-0">
                        <div className="payment-head d-flex align-items-center justify-content-between">
                          <p className="mb-0 d-flex align-items-center gap-3">
                            <img src={UPIImg} alt="upi" />
                            test@ybl
                          </p>
                          <img src={GPay} alt="gpay" />
                        </div>
                        <img src={QR} alt="qr" className="qr" />
                        <Link to='/'>Test Now</Link>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </>
            )}
          </div>
          <div className="col-12 col-md-8 mt-4">
            <div className="branch-section d-flex flex-column align-items-center flex-md-row gap-3">
              <div className="branch-details d-flex flex-column align-items-center me-auto">
                <img src={bruceMars} alt="brucemars" />
                <div className="branch-content">
                  <p>Bengaluru</p>
                  <p>Franchise Location 10/11</p>
                </div>
              </div>
              <select className="me-lg-4">
                <option value="">Select City</option>
              </select>
              <button>Add Branch</button>
            </div>
          </div>
          <div className="col-12">
            <div className="franchise-cards-list mt-4">
              <div className="col-12 col-md-3">
                <div className="franchise-card">
                  <h5>AALOKA THE SCHOOL OD DANCE AND FITNESS</h5>
                  <p>Business ID: MB123456</p>
                  <p>Dance school</p>
                  <p>PARTNERSHIP</p>
                  <button type="button">View detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {showPaymentModal && (
        <AddPaymentModal
          showPaymentModal={showPaymentModal}
          handleClosePaymentModal={() => setShowPaymentModal(false)}
          handleShowActivePayment={handleShowActivePayment}
        />
      )}
    </div>
  );
}

export default MasterAccount;
