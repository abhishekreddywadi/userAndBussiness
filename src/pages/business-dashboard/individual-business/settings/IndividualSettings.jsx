import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../../../context/UserContext";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Modal, Form } from "react-bootstrap";
import Header from "../../../../components/header/Header";
import Shield from "../../../../assets/shield.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowRight,
  faUser,
  faCreditCard,
  faShieldAlt,
  faBell,
  faEnvelope,
  faChartLine,
  faDatabase,
  faLock,
  faKey,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";

import "./individualSettings.scss";

function IndividualSettings() {
  const { navButtonClick } = useContext(UserContext);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("membership");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false);
  const [showLoginHistoryModal, setShowLoginHistoryModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [editProfileData, setEditProfileData] = useState({
    firstName: "Shree",
    lastName: "Ganesh",
    gender: "Male",
    birthDate: "2000-01-01",
    email: "example@example.com",
    confirmEmail: "example@example.com",
    location: "Mumbai",
    phone: "+91 123456789",
    language: "English, Hindi",
    skills: "React, Node.js, JavaScript"
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Additional security states
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [loginHistory, setLoginHistory] = useState([
    { id: 1, date: "2023-12-31 13:45:00", device: "Chrome on Windows", location: "Mumbai, India", status: "Success" },
    { id: 2, date: "2023-12-30 10:30:00", device: "Safari on iPhone", location: "Pune, India", status: "Success" },
    { id: 3, date: "2023-12-29 15:20:00", device: "Firefox on MacOS", location: "Delhi, India", status: "Failed" },
    { id: 4, date: "2023-12-28 09:15:00", device: "Chrome on Android", location: "Bangalore, India", status: "Success" },
  ]);

  // Dummy data
  const dummyUserData = {
    name: "Ramya Pandit",
    masterId: "ABCD_1234567890",
    memberSince: "2023",
    plan: "Premium",
    verified: true,
  };

  const dummyPlanFeatures = [
    { id: 1, text: "Unlimited team members" },
    { id: 2, text: "100GB Cloud storage" },
    { id: 3, text: "Priority support" },
    { id: 4, text: "Advanced analytics" },
  ];

  const dummyUsageStats = {
    teamMembers: { used: 15, total: 20 },
    storage: { used: 60, total: 100 },
    analytics: { usage: 85 },
  };

  const dummyBillingHistory = [
    { id: 1, date: "Dec 1, 2023", amount: 29.00, status: "Paid", invoice: "INV-001" },
    { id: 2, date: "Nov 1, 2023", amount: 29.00, status: "Paid", invoice: "INV-002" },
    { id: 3, date: "Oct 1, 2023", amount: 29.00, status: "Paid", invoice: "INV-003" },
  ];

  const dummySecuritySettings = {
    twoFactorEnabled: false,
    lastLogin: "2023-12-30 15:30:00",
    loginAttempts: 0,
    passwordLastChanged: "2023-11-15",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname.includes("/individual-settings")) {
      setActiveTab("membership");
    } else if (location.pathname.includes("/individual-account")) {
      setActiveTab("account");
    } else if (location.pathname.includes("/business-setting")) {
      setActiveTab("business-account");
    }
  }, [location.pathname]);

  const handleManagePlan = () => {
    setShowPlanModal(true);
  };

  const handleViewDetails = () => {
    setShowDetailsModal(true);
  };

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setShowInvoiceModal(true);
  };

  const handleEditProfile = () => {
    setShowEditProfileModal(true);
  };

  const handleChangePassword = () => {
    setShowChangePasswordModal(true);
  };

  const handleToggle2FA = () => {
    if (!twoFactorEnabled) {
      setShowTwoFactorModal(true);
    } else {
      // Here you would typically make an API call to disable 2FA
      setTwoFactorEnabled(false);
    }
  };

  const handleVerify2FA = () => {
    if (verificationCode.length === 6) {
      // Here you would typically make an API call to verify the code
      setTwoFactorEnabled(true);
      setShowTwoFactorModal(false);
      setVerificationCode('');
    }
  };

  const handleViewLoginHistory = () => {
    setShowLoginHistoryModal(true);
  };

  const handleProfileDataChange = (field, value) => {
    setEditProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveProfile = () => {
    // Here you would typically make an API call to save the profile data
    console.log("Saving profile data:", editProfileData);
    setShowEditProfileModal(false);
  };

  const handleSavePassword = () => {
    // Here you would typically make an API call to change the password
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    console.log("Changing password:", passwordData);
    setShowChangePasswordModal(false);
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const menuItems = [
    { id: "membership", icon: faCreditCard, label: "Membership" },
    { id: "account", icon: faUser, label: "Account Settings" },
    { id: "security", icon: faShieldAlt, label: "Security" },
    { id: "notifications", icon: faBell, label: "Notifications" },
    { id: "communication", icon: faEnvelope, label: "Communication" },
  ];

  return (
    <div className={`dashboard individual-setting ${navButtonClick ? "dashboard-full" : ""}`}>
      <Container fluid>
        <Header />
        <div className="settings-layout">
          <Row>
            <Col lg={12}>
              <div className={`profile-card ${isScrolled ? "scrolled" : ""}`}>
                <div className="profile-header">
                  <div className="profile-avatar">
                    <span className="initials">RP</span>
                  </div>
                  <div className="profile-info">
                    <h4>{dummyUserData.name}</h4>
                    <p className="master-id">MASTER ID: {dummyUserData.masterId}</p>
                    <div className="verification-badge">
                      <FontAwesomeIcon icon={faCheck} />
                      <span>Verified Account</span>
                    </div>
                  </div>
                  <div className="profile-stats">
                    <div className="stat-item">
                      <span className="stat-label">Member Since</span>
                      <span className="stat-value">{dummyUserData.memberSince}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Plan</span>
                      <span className="stat-value">{dummyUserData.plan}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="settings-container">
            <Col lg={3}>
              <div className="settings-sidebar">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`menu-item ${activeTab === item.id ? "active" : ""}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </Col>

            <Col lg={9}>
              <div className="settings-content">
                {activeTab === "membership" && (
                  <div className="settings-section membership-section">
                    <div className="section-header">
                      <h2>Your Premium Membership</h2>
                      <p>Manage your subscription and billing preferences</p>
                      <div className="membership-badge">
                        <FontAwesomeIcon icon={faCheck} />
                        <span>Active</span>
                      </div>
                    </div>

                    <Row className="membership-cards">
                      <Col lg={7}>
                        <div className="plan-card current" style={{ color: "white" }}>
                          <div className="plan-header">
                            <div className="plan-image">
                              <img src={Shield} alt="Premium Plan" />
                            </div>
                            <div className="plan-info">
                              <h3>Premium Plan</h3>
                              <div className="price">
                                <span className="amount">$29</span>
                                <span className="period">/month</span>
                              </div>
                            </div>
                          </div>
                          <div className="plan-features">
                            {dummyPlanFeatures.map((feature) => (
                              <div key={feature.id} className="feature-item">
                                <FontAwesomeIcon icon={faCheck} className="icon" />
                                <span>{feature.text}</span>
                              </div>
                            ))}
                          </div>
                          <div className="plan-actions">
                            <button className="btn-primary" onClick={handleManagePlan}>
                              Manage Plan
                            </button>
                            <button className="btn-outline" onClick={handleViewDetails}>
                              View Details
                            </button>
                          </div>
                        </div>
                      </Col>

                      <Col lg={5}>
                        <div className="usage-stats">
                          <div className="stats-card storage">
                            <div className="stats-icon">
                              <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="stats-info">
                              <h4>Team Members</h4>
                              <div className="stats-progress">
                                <div className="progress-bar">
                                  <div 
                                    className="progress" 
                                    style={{ width: `${(dummyUsageStats.teamMembers.used / dummyUsageStats.teamMembers.total) * 100}%` }}
                                  ></div>
                                </div>
                                <span>{dummyUsageStats.teamMembers.used}/{dummyUsageStats.teamMembers.total} seats used</span>
                              </div>
                            </div>
                          </div>

                          <div className="stats-card bandwidth">
                            <div className="stats-icon">
                              <FontAwesomeIcon icon={faDatabase} />
                            </div>
                            <div className="stats-info">
                              <h4>Storage Used</h4>
                              <div className="stats-progress">
                                <div className="progress-bar">
                                  <div 
                                    className="progress" 
                                    style={{ width: `${(dummyUsageStats.storage.used / dummyUsageStats.storage.total) * 100}%` }}
                                  ></div>
                                </div>
                                <span>{dummyUsageStats.storage.used}GB/{dummyUsageStats.storage.total}GB used</span>
                              </div>
                            </div>
                          </div>

                          <div className="stats-card analytics">
                            <div className="stats-icon">
                              <FontAwesomeIcon icon={faChartLine} />
                            </div>
                            <div className="stats-info">
                              <h4>Usage Analytics</h4>
                              <div className="stats-progress">
                                <div className="progress-bar">
                                  <div 
                                    className="progress" 
                                    style={{ width: `${dummyUsageStats.analytics.usage}%` }}
                                  ></div>
                                </div>
                                <span>{dummyUsageStats.analytics.usage}% utilization</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="billing-section">
                      <h3>Recent Billing History</h3>
                      <Row className="billing-cards">
                        {dummyBillingHistory.map((bill) => (
                          <Col lg={4} key={bill.id}>
                            <div className="billing-card">
                              <div className="billing-info">
                                <div className="date">{bill.date}</div>
                                <div className="amount">${bill.amount.toFixed(2)}</div>
                              </div>
                              <div className="billing-actions">
                                <button 
                                  className="btn-text"
                                  onClick={() => handleViewInvoice(bill)}
                                >
                                  View Invoice
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </div>
                )}

                {activeTab === "account" && (
                  <div className="settings-section account-section">
                    <div className="section-header">
                      <h2>Account Settings</h2>
                      <p>Manage your personal information and preferences</p>
                    </div>
                    
                    <div className="user-info-card">
                      <h3>Basic Info</h3>
                      <div className="info-grid">
                        <div className="info-group">
                          <label>First Name</label>
                          <div className="info-value">Shree</div>
                        </div>
                        <div className="info-group">
                          <label>Last Name</label>
                          <div className="info-value">Ganesh</div>
                        </div>
                        <div className="info-group">
                          <label>Gender</label>
                          <div className="info-value">Male</div>
                        </div>
                        <div className="info-group">
                          <label>Birth Date</label>
                          <div className="info-value">January 1, 2000</div>
                        </div>
                        <div className="info-group full-width">
                          <label>Email</label>
                          <div className="info-value">example@example.com</div>
                        </div>
                        <div className="info-group full-width">
                          <label>Confirmation Email</label>
                          <div className="info-value">example@example.com</div>
                        </div>
                        <div className="info-group">
                          <label>Your Location</label>
                          <div className="info-value">Mumbai</div>
                        </div>
                        <div className="info-group">
                          <label>Phone Number</label>
                          <div className="info-value">+91 123456789</div>
                        </div>
                        <div className="info-group">
                          <label>Language</label>
                          <div className="info-value">English, Hindi</div>
                        </div>
                        <div className="info-group">
                          <label>Skills</label>
                          <div className="info-value">React, Node.js, JavaScript</div>
                        </div>
                      </div>
                      
                      <div className="card-actions">
                        <button className="btn-primary" onClick={handleEditProfile}>
                          <FontAwesomeIcon icon={faUser} />
                          Edit Profile
                        </button>
                        <button className="btn-outline" onClick={handleChangePassword}>
                          <FontAwesomeIcon icon={faKey} />
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "security" && (
                  <div className="settings-section security-section">
                    <div className="section-header">
                      <h2>Security Settings</h2>
                      <p>Manage your account security and authentication preferences</p>
                    </div>
                    <Row>
                      <Col lg={6}>
                        <div className="security-card">
                          <div className="security-icon">
                            <FontAwesomeIcon icon={faLock} />
                          </div>
                          <div className="security-content">
                            <h4>Two-Factor Authentication</h4>
                            <p>Add an extra layer of security to your account</p>
                            <div className="security-status">
                              <span className={`status-badge ${twoFactorEnabled ? 'enabled' : 'disabled'}`}>
                                {twoFactorEnabled ? 'Enabled' : 'Disabled'}
                              </span>
                            </div>
                            <button 
                              className={`btn-toggle ${twoFactorEnabled ? 'enabled' : ''}`}
                              onClick={handleToggle2FA}
                            >
                              {twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="security-card">
                          <div className="security-icon">
                            <FontAwesomeIcon icon={faKey} />
                          </div>
                          <div className="security-content">
                            <h4>Password Settings</h4>
                            <p>Last changed: {dummySecuritySettings.passwordLastChanged}</p>
                            <div className="security-status">
                              <span className="status-badge enabled">Strong</span>
                            </div>
                            <button className="btn-primary" onClick={handleChangePassword}>
                              Change Password
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="security-card">
                          <div className="security-icon">
                            <FontAwesomeIcon icon={faHistory} />
                          </div>
                          <div className="security-content">
                            <h4>Login History</h4>
                            <p>Last login: {dummySecuritySettings.lastLogin}</p>
                            <div className="security-status">
                              <span className="status-badge info">4 Recent Logins</span>
                            </div>
                            <button className="btn-secondary" onClick={handleViewLoginHistory}>
                              View Full History
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Modals */}
      <Modal show={showPlanModal} onHide={() => setShowPlanModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Manage Your Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="plan-management">
            <h5>Current Plan: Premium</h5>
            <p>Billing Cycle: Monthly</p>
            <p>Next Billing Date: January 1, 2024</p>
            <div className="mt-4">
              <h6>Available Actions:</h6>
              <button className="btn btn-warning w-100 mb-2">Upgrade Plan</button>
              <button className="btn btn-outline-danger w-100">Cancel Subscription</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Plan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="plan-details">
            <h5>Premium Plan Features</h5>
            <ul className="list-unstyled">
              {dummyPlanFeatures.map((feature) => (
                <li key={feature.id} className="mb-2">
                  <FontAwesomeIcon icon={faCheck} className="text-success me-2" />
                  {feature.text}
                </li>
              ))}
            </ul>
            <hr />
            <h6>Additional Benefits</h6>
            <ul className="list-unstyled">
              <li>24/7 Priority Support</li>
              <li>Custom Domain Support</li>
              <li>Advanced Security Features</li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showInvoiceModal} onHide={() => setShowInvoiceModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Invoice Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedInvoice && (
            <div className="invoice-details">
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <h6>Invoice Number</h6>
                  <p>{selectedInvoice.invoice}</p>
                </div>
                <div>
                  <h6>Date</h6>
                  <p>{selectedInvoice.date}</p>
                </div>
              </div>
              <div className="mb-3">
                <h6>Amount</h6>
                <p className="h4">${selectedInvoice.amount.toFixed(2)}</p>
              </div>
              <div className="mb-3">
                <h6>Status</h6>
                <span className="badge bg-success">{selectedInvoice.status}</span>
              </div>
              <button className="btn btn-primary w-100">Download Invoice</button>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Edit Profile Modal */}
      <Modal show={showEditProfileModal} onHide={() => setShowEditProfileModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="edit-profile-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={editProfileData.firstName}
                    onChange={(e) => handleProfileDataChange('firstName', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={editProfileData.lastName}
                    onChange={(e) => handleProfileDataChange('lastName', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    value={editProfileData.gender}
                    onChange={(e) => handleProfileDataChange('gender', e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Birth Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={editProfileData.birthDate}
                    onChange={(e) => handleProfileDataChange('birthDate', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editProfileData.email}
                onChange={(e) => handleProfileDataChange('email', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={editProfileData.location}
                onChange={(e) => handleProfileDataChange('location', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={editProfileData.phone}
                onChange={(e) => handleProfileDataChange('phone', e.target.value)}
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type="text"
                    value={editProfileData.language}
                    onChange={(e) => handleProfileDataChange('language', e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    type="text"
                    value={editProfileData.skills}
                    onChange={(e) => handleProfileDataChange('skills', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-outline" onClick={() => setShowEditProfileModal(false)}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleSaveProfile}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      {/* Change Password Modal */}
      <Modal show={showChangePasswordModal} onHide={() => setShowChangePasswordModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="change-password-form">
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-outline" onClick={() => setShowChangePasswordModal(false)}>
            Cancel
          </button>
          <button 
            className="btn-primary" 
            onClick={handleSavePassword}
            disabled={passwordData.newPassword !== passwordData.confirmPassword}
          >
            Change Password
          </button>
        </Modal.Footer>
      </Modal>

      {/* Two Factor Authentication Modal */}
      <Modal show={showTwoFactorModal} onHide={() => setShowTwoFactorModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enable Two-Factor Authentication</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="two-factor-setup">
            <div className="qr-code-section">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" 
                alt="2FA QR Code"
                className="qr-code"
              />
              <p>Scan this QR code with your authenticator app</p>
            </div>
            <div className="verification-section">
              <Form.Group className="mb-3">
                <Form.Label>Enter Verification Code</Form.Label>
                <Form.Control
                  type="text"
                  maxLength={6}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 6-digit code"
                />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-outline" onClick={() => setShowTwoFactorModal(false)}>
            Cancel
          </button>
          <button 
            className="btn-primary" 
            onClick={handleVerify2FA}
            disabled={verificationCode.length !== 6}
          >
            Verify & Enable
          </button>
        </Modal.Footer>
      </Modal>

      {/* Login History Modal */}
      <Modal show={showLoginHistoryModal} onHide={() => setShowLoginHistoryModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Login History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-history-list">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Device</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loginHistory.map((login) => (
                  <tr key={login.id}>
                    <td>{login.date}</td>
                    <td>{login.device}</td>
                    <td>{login.location}</td>
                    <td>
                      <span className={`status-badge ${login.status.toLowerCase()}`}>
                        {login.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-outline" onClick={() => setShowLoginHistoryModal(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default IndividualSettings;
