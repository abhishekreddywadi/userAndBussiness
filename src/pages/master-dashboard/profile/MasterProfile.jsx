import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { Container, Badge } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Header from "../../../components/header/Header";
import ContactImg from "../../../assets/shree-ganesh.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faGear,
  faPencil,
  faUser,
  faChevronDown,
  faBell,
  faUsers,
  faBuilding,
  faPlus,
  faArrowRight,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import "./masterProfile.scss";

const contactListArray = [
  {
    name: "Abbie W",
    img: ContactImg,
  },
  {
    name: "Boris U",
    img: ContactImg,
  },
  {
    name: "Kay R",
    img: ContactImg,
  },
  {
    name: "Tom M",
    img: ContactImg,
  },
  {
    name: "Nicole N",
    img: ContactImg,
  },
  {
    name: "Marie P",
    img: ContactImg,
  },

  {
    name: "Bruce M",
    img: ContactImg,
  },
  {
    name: "Sandra A",
    img: ContactImg,
  },
  {
    name: "Katty L",
    img: ContactImg,
  },
  {
    name: "Emma O",
    img: ContactImg,
  },
];

const businessContactsArray = [
  {
    id: 1,
    img: ContactImg,
    name: "AALOKA THE SCHOOL OF DANCE AND FITNESS",
    department: "FITNESS Department.",
    master_id: "MB123456789-0",
    plan: "Gold Plan 3 Year",
    totalUsers: 300,
    totalStaff: 20,
    users: [ContactImg, ContactImg, ContactImg, ContactImg],
    staff: [ContactImg, ContactImg, ContactImg, ContactImg],
  },
  {
    id: 2,
    img: ContactImg,
    name: "AALOKA THE SCHOOL OF DANCE AND FITNESS",
    department: "FITNESS Department.",
    master_id: "MB123456789-0",
    plan: "Gold Plan 3 Year",
    totalUsers: 300,
    totalStaff: 20,
    users: [ContactImg, ContactImg, ContactImg, ContactImg],
    staff: [ContactImg, ContactImg, ContactImg, ContactImg],
  },
];

const franchiseArray = [
  {
    name: "Reebok",
    contact: "+919898989999",
    email: "reebook@gmail.com",
    address: "JP Nagar Bangalore Karnataka 560033",
    category: "Fitness Clothes",
  },
  {
    name: "Reebok",
    contact: "+919898989999",
    email: "reebook@gmail.com",
    address: "JP Nagar Bangalore Karnataka 560033",
    category: "Fitness Clothes",
  },
  {
    name: "Reebok",
    contact: "+919898989999",
    email: "reebook@gmail.com",
    address: "JP Nagar Bangalore Karnataka 560033",
    category: "Fitness Clothes",
  },
];

function MasterProfile() {
  const navigate = useNavigate();
  const { navButtonClick } = useContext(UserContext);
  const [contactListData, setContactListData] = useState(contactListArray);
  const [businessContactsData, setBusinessContactsData] = useState(
    businessContactsArray
  );
  const [expandedBusinesses, setExpandedBusinesses] = useState({});
  const [showBusinessPurchase, setShowBusinessPurchase] = useState(null);
  const [franchiseData, setFranchiseData] = useState(franchiseArray);

  const handleBusinessClick = (id) => {
    setShowBusinessPurchase((prev) => (prev === id ? null : id));
  };

  const toggleBusiness = (businessId) => {
    setExpandedBusinesses((prev) => ({
      ...prev,
      [businessId]: !prev[businessId],
    }));
  };

  const handlePurchasePlan = (businessId) => {
    // Handle purchase plan logic
    console.log("Purchase plan for business:", businessId);
    navigate("/plans");
  };

  const handleViewDetails = (business) => {
    // Handle view details logic
    console.log("View details for business:", business);
  };

  const handleAddContact = () => {
    // Handle add contact logic
    console.log("Add new contact");
  };

  const handleContactClick = (contact) => {
    console.log("Contact clicked:", contact);
  };

  return (
    <div
      className={`dashboard ${navButtonClick && "dashboard-full"} master-profile`}
    >
      <Container>
        <Header />
        <div className="row py-5">
          <div className="col-12 col-md-7 col-lg-8">
            {/* Contact List Section */}
            <div className="contacts-list-container">
              <h5>
                <FontAwesomeIcon icon={faBook} />
                YOUR STUDENTS MEMBER CONTACTS BOOKS
                <Badge bg="primary" pill>{contactListData.length}</Badge>
              </h5>
              <div className="contact-list">
                <div className="contact-box">
                  <button type="button" onClick={handleAddContact}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                {contactListData?.map((contact, i) => (
                  <div className="contact-box" key={i} onClick={() => handleContactClick(contact)}>
                    <img src={contact.img} alt={contact.name} />
                    <span>{contact.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business List Section */}
            <div className="business-list-container mt-4">
              <h5>
                <FontAwesomeIcon icon={faBuilding} />
                Your Business
                <Badge bg="primary" pill>5/2</Badge>
              </h5>
              <div className="business-list">
                {businessContactsData?.map((business, i) => (
                  <div className="business-box" key={i}>
                    <img src={business.img} alt={business.name} />
                    <p>{business.name}</p>
                    <span>{business.id}</span>
                    <span>{business.department}</span>
                    <span
                      className="chevron-icon"
                      onClick={() => toggleBusiness(business.id)}
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{
                          transform: expandedBusinesses[business.id]
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </span>

                    <div
                      className={`user-staff-list ${
                        expandedBusinesses[business.id] ? "expanded" : ""
                      }`}
                    >
                      <span
                        className={`plan ${
                          !business.plan ? "no-plan" : ""
                        }`}
                      >
                        {business.plan
                          ? `${business.plan} Plan ${business.year} Year`
                          : "No Plan active"}
                      </span>

                      <div
                        className={`plan-purchase ${
                          !business.plan ? "no-plan" : ""
                        }`}
                      >
                        <h6>
                          <p>Total Users</p>
                          <p>{business.totalUsers}/20</p>
                        </h6>
                        <h6>
                          <p>Total Staff</p>
                          <p>{business.totalStaff}/20</p>
                        </h6>
                        <h6>
                          <button onClick={() => handlePurchasePlan(business.id)}>
                            {business.plan ? "Upgrade Plan" : "Purchase Now"}
                          </button>
                        </h6>
                      </div>

                      <div className="user-staff-box-list">
                        <div className="user-staff-box">
                          <p>Users</p>
                          <div className="images">
                            {business.users?.map((user, index) => (
                              <img
                                key={index}
                                src={user}
                                alt={`User ${index + 1}`}
                              />
                            ))}
                          </div>
                          <p>{business.totalUsers}/20</p>
                        </div>
                        <div className="user-staff-box">
                          <p>Staff</p>
                          <div className="images">
                            {business.staff?.map((staff, index) => (
                              <img
                                key={index}
                                src={staff}
                                alt={`Staff ${index + 1}`}
                              />
                            ))}
                          </div>
                          <p>{business.totalStaff}/20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New Business Section */}
            <div className="payment-method mt-4">
              <h5>
                <FontAwesomeIcon icon={faBuilding} />
                Create Business
                <Badge bg="primary" pill>5/3</Badge>
              </h5>
              <button type="button" onClick={() => navigate("/mb-form")}>
                <FontAwesomeIcon icon={faPlus} />
                Add New Business
              </button>
            </div>
          </div>

          {/* Right Sidebar - Business Details */}
          <div className="col-12 col-md-5 col-lg-4">
            <div className="master-business-details">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="icon">
                      <span>
                        <FontAwesomeIcon icon={faUsers} />
                      </span>
                      <span>B2B CONVERSATION</span>
                    </div>
                    <div className="notifications">
                      <FontAwesomeIcon icon={faBell} />
                      <span>2</span>
                    </div>
                    <h6>MASTER BUSINESS</h6>
                    <div className="images">
                      <img src={ContactImg} alt="user" />
                      <img src={ContactImg} alt="user" />
                      <img src={ContactImg} alt="user" />
                      <img src={ContactImg} alt="user" />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Recent Business Activities:</p>
                    <ul>
                      <li>New user registration from Fitness Department</li>
                      <li>Payment received for Gold Plan</li>
                      <li>Staff schedule updated for next week</li>
                      <li>2 new course enrollments</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="icon">
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <span>B2B CONVERSATION</span>
                    </div>
                    <div className="notifications">
                      <FontAwesomeIcon icon={faBell} />
                      <span>2</span>
                    </div>
                    <h6>MASTER BUSINESS</h6>
                    <div className="images">
                      <img src={ContactImg} alt="user" />
                      <img src={ContactImg} alt="user" />
                      <img src={ContactImg} alt="user" />
                      <img src={ContactImg} alt="user" />
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>Business Statistics:</p>
                    <ul>
                      <li>Total Active Users: 300</li>
                      <li>Staff Members: 20</li>
                      <li>Active Courses: 15</li>
                      <li>Monthly Revenue: $5,000</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MasterProfile;
