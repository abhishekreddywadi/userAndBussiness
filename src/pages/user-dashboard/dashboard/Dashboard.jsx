import React, { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Container } from "react-bootstrap";
import UserContext from "../../../context/UserContext";
import Header from "../../../components/header/Header";
import DashboardFilters from "./dashboardFilters/DashboardFilters";
import "./dashboard.scss";

import ContactImg from "../../../assets/shree-ganesh.png";
const contactListArray = [
  {
    name: "Gym",
    img: ContactImg,
  },
  {
    name: "Institute",
    img: ContactImg,
  },
  {
    name: "Classes",
    img: ContactImg,
  },
  {
    name: "Training",
    img: ContactImg,
  },
  {
    name: "Fitness Instructor",
    img: ContactImg,
  },
  {
    name: "Education Teacher",
    img: ContactImg,
  },

  {
    name: "Sports Coach",
    img: ContactImg,
  },
  {
    name: "Dance Teacher/Instructor",
    img: ContactImg,
  },
];
function Dashboard() {
  const { navButtonClick } = useContext(UserContext);
  const [contactListData, setContactListData] = useState(contactListArray);

  return (
    <div className={`dashboard ${navButtonClick && "dashboard-full"}`}>
      <Container>
        <Header />
        <div className="row">
          <div className="col-12">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav variant="pills" className="sales-tab-head">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <span className="sale-img"></span>
                    <p>Fitness/Dance/Education</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <span className="sale-img"></span>
                    <p>Service Provider</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="three">
                    <span className="sale-img"></span>
                    <p>Gunjian</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="four">
                    <span className="sale-img"></span>
                    <p>Gunjian</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="sales-tab-content mt-2">
                <Tab.Pane eventKey="first">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav variant="pills" className="sales-business-tab-head">
                      <div className="contacts-list-container d-flex flex-wrap align-items-center gap-3">
                        <div className="contact-list d-flex align-items-center gap-4">
                          <div className="more d-flex align-items-center gap-3">
                            <span className="dot"></span>
                            <p className="mb-0">More Filters</p>
                            <span>+</span>
                          </div>
                          {contactListData?.map((contact, i) => {
                            return (
                              <Nav.Item>
                                <Nav.Link eventKey={`business-${i + 1}`}>
                                  <div className="contact-box" key={i}>
                                    <img src={contact.img} alt="contact-img" />
                                    <span>{contact.name}</span>
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })}
                        </div>
                      </div>
                    </Nav>
                    <Tab.Content className="sales-business-tab-content mt-2">
                      <Tab.Pane eventKey="business-3">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-4">
                        <DashboardFilters />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav variant="pills" className="sales-business-tab-head">
                      <div className="contacts-list-container d-flex flex-wrap align-items-center gap-3">
                        <div className="contact-list d-flex align-items-center gap-4">
                          <div className="contact-box">
                            <button type="button">+</button>
                          </div>
                          {contactListData?.map((contact, i) => {
                            return (
                              <Nav.Item>
                                <Nav.Link eventKey={`business-${i + 1}`}>
                                  <div className="contact-box" key={i}>
                                    <img src={contact.img} alt="contact-img" />
                                    <span>{contact.name}</span>
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })}
                        </div>
                      </div>
                    </Nav>
                    <Tab.Content className="sales-business-tab-content mt-5">
                      <Tab.Pane eventKey="business-1">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-2">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-3">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-4">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-5">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-6">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-7">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-8">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-9">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-10">
                        <DashboardFilters />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav variant="pills" className="sales-business-tab-head">
                      <div className="contacts-list-container d-flex flex-wrap align-items-center gap-3">
                        <div className="contact-list d-flex align-items-center gap-4">
                          <div className="contact-box">
                            <button type="button">+</button>
                          </div>
                          {contactListData?.map((contact, i) => {
                            return (
                              <Nav.Item>
                                <Nav.Link eventKey={`business-${i + 1}`}>
                                  <div className="contact-box" key={i}>
                                    <img src={contact.img} alt="contact-img" />
                                    <span>{contact.name}</span>
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })}
                        </div>
                      </div>
                    </Nav>
                    <Tab.Content className="sales-business-tab-content mt-5">
                      <Tab.Pane eventKey="business-1">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-2">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-3">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-4">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-5">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-6">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-7">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-8">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-9">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-10">
                        <DashboardFilters />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav variant="pills" className="sales-business-tab-head">
                      <div className="contacts-list-container d-flex flex-wrap align-items-center gap-3">
                        <div className="contact-list d-flex align-items-center gap-4">
                          <div className="contact-box">
                            <button type="button">+</button>
                          </div>
                          {contactListData?.map((contact, i) => {
                            return (
                              <Nav.Item>
                                <Nav.Link eventKey={`business-${i + 1}`}>
                                  <div className="contact-box" key={i}>
                                    <img src={contact.img} alt="contact-img" />
                                    <span>{contact.name}</span>
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })}
                        </div>
                      </div>
                    </Nav>
                    <Tab.Content className="sales-business-tab-content mt-5">
                      <Tab.Pane eventKey="business-1">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-2">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-3">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-4">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-5">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-6">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-7">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-8">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-9">
                        <DashboardFilters />
                      </Tab.Pane>
                      <Tab.Pane eventKey="business-10">
                        <DashboardFilters />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
