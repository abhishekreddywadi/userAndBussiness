import React, { useState } from "react";
import "./signupStep.scss";
import UserImg from "../../../../assets/user.jpg";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faUpload,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function SignupStep() {
  const { user } = useSelector((state) => state.auth);
  const [showKYCModal, setShowKYCModal] = useState(false);
  const [kycForm, setKycForm] = useState({
    country: "",
    idType: "",
    idNumber: "",
    frontImage: null,
    backImage: null,
    frontImagePreview: null,
    backImagePreview: null
  });
  
  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia"
  ];
  
  const idProofs = [
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Driving License"
  ];

  const handleKYCSubmit = (e) => {
    e.preventDefault();
    // Handle KYC submission here
    console.log("KYC Form Data:", kycForm);
    setShowKYCModal(false);
  };

  const handleFileChange = (e, side) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setKycForm(prev => ({
          ...prev,
          [side]: file,
          [side + 'Preview']: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (side) => {
    setKycForm(prev => ({
      ...prev,
      [side]: null,
      [side + 'Preview']: null
    }));
  };

  return (
    <>
      <div className="signup-step">
        <div className="user-info">
          <div className="info-details">
            <span>
              <img src={UserImg} alt="user-img" />
            </span>
            <div className="details">
              <h5>
                {user?.firstName} {user?.lastName}
              </h5>
              <p>
                USER ID / <strong>{user?.userCode}</strong>
              </p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:richarddavis@gmail.com">
                    richarddavis@gmail.com
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+919555542311">+919555542311</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>BHARAT Bangloare Karnataka 5689769</p>
                </li>
                <li>
                  <p>
                    <strong>AGE</strong>
                  </p>
                  <p>NULL</p>
                </li>
                <li>
                  <p>
                    <strong>DOB</strong>
                  </p>
                  <p>05/03/2024 / MAIL</p>
                </li>
                {/* add button here for KYC */}
                <li>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => setShowKYCModal(true)}
                  >
                    Apply for KYC
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="user-password">
            <h3>Change Password</h3>
            <input type="password" placeholder="Current Password" />
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Enter New Password Again" />
            <button type="button">UPDATE PASSWORD</button>
            <div className="password-note">
              <p>
                <strong>Password Requirements</strong>
              </p>
              <ul>
                <li>
                  <strong></strong>Please follow this guide for a strong
                  password
                </li>
                <li>One special Character</li>
                <li>Min. 6 characters</li>
                <li>On number (2 are recommended)</li>
                <li>Change it often</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* KYC Modal */}
      <Modal show={showKYCModal} onHide={() => setShowKYCModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>KYC Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleKYCSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Select Country</Form.Label>
              <Form.Select 
                value={kycForm.country}
                onChange={(e) => setKycForm(prev => ({ ...prev, country: e.target.value }))}
                required
              >
                <option value="">Choose your country</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select ID Proof Type</Form.Label>
              <Form.Select
                value={kycForm.idType}
                onChange={(e) => setKycForm(prev => ({ ...prev, idType: e.target.value }))}
                required
              >
                <option value="">Choose ID proof type</option>
                {idProofs.map(id => (
                  <option key={id} value={id}>{id}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your ID number"
                value={kycForm.idNumber}
                onChange={(e) => setKycForm(prev => ({ ...prev, idNumber: e.target.value }))}
                required
              />
            </Form.Group>

            <div className="row mb-3">
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Front Side of ID</Form.Label>
                  <div className="upload-box p-3 border rounded text-center">
                    {kycForm.frontImagePreview ? (
                      <div className="preview-container position-relative">
                        <img 
                          src={kycForm.frontImagePreview} 
                          alt="Front ID" 
                          className="img-preview mb-2"
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger remove-image"
                          onClick={() => removeImage('frontImage')}
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faUpload} className="mb-2 fs-4" />
                        <Form.Control
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, 'frontImage')}
                          required
                          className="d-none"
                          id="frontImage"
                        />
                        <label htmlFor="frontImage" className="btn btn-outline-primary btn-sm d-block mx-auto">
                          Upload Front Side
                        </label>
                      </>
                    )}
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label>Back Side of ID</Form.Label>
                  <div className="upload-box p-3 border rounded text-center">
                    {kycForm.backImagePreview ? (
                      <div className="preview-container position-relative">
                        <img 
                          src={kycForm.backImagePreview} 
                          alt="Back ID" 
                          className="img-preview mb-2"
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger remove-image"
                          onClick={() => removeImage('backImage')}
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faUpload} className="mb-2 fs-4" />
                        <Form.Control
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, 'backImage')}
                          required
                          className="d-none"
                          id="backImage"
                        />
                        <label htmlFor="backImage" className="btn btn-outline-primary btn-sm d-block mx-auto">
                          Upload Back Side
                        </label>
                      </>
                    )}
                  </div>
                </Form.Group>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <button type="button" className="btn btn-secondary" onClick={() => setShowKYCModal(false)}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit KYC
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignupStep;
