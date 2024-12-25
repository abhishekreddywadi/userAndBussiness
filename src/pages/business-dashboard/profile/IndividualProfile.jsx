import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import MasterStep from "../../user-dashboard/dashboard/masterStep/MasterStep";
import Header from "../../../components/header/Header";
import SignupStep from "../../user-dashboard/dashboard/signupStep/SignupStep";
import PurchaseForm from "../../user-dashboard/dashboard/masterStep/masterForm/purchaseForm/PurchaseForm";
import "./individualProfile.scss";

function IndividualProfile() {
  const { navButtonClick } = useContext(UserContext);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(1);
  const [form1Submitted, setForm1Submitted] = useState(false);
  const [form2Submitted, setForm2Submitted] = useState(false);

  const handleAccountShow = () => {
    navigate("/business-account");
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      setProgress(1.5);
      setCurrentStep(2);
    }
  };

  const handleForm1Submit = (e) => {
    e.preventDefault();
    setProgress(1.8);
    setForm1Submitted(true);
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    setForm2Submitted(true);
    if (form1Submitted) {
      setProgress(2); // Complete Step 2
    }
  };

  const handleMasterFormBackStepTwo = () => {
    // setCurrentStep(2);
    setForm1Submitted(false);
  }

  const handleMasterFormBack = () => {
    setCurrentStep(1);

  };
  return (
    <div className={`dashboard ${navButtonClick && "dashboard-full"}`}>
      <Container>
        <Header />
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-bar-main">
              <div className="progress-indicator" style={{ width: `calc(${(progress - 1) * 33.33}% - 35px)` }}></div>
              <div className={`progress-step ${progress >= 1 ? "active" : ""}`}>
                <div className="step-circle"></div>
                <span>SIGN UP</span>
              </div>
              <div className={`progress-step ${progress >= 2 ? "active" : ""}`}>
                <div className="step-circle"></div>
                <span>MASTER ID</span>
              </div>
              <div className={`progress-step ${progress >= 3 ? "active" : ""}`}>
                <div className="step-circle"></div>
                <span>INDIVIDUAL ID</span>
              </div>
              <div className={`progress-step ${progress >= 4 ? "active" : ""}`}>
                <div className="step-circle"></div>
                <span>BUSINESS ID</span>
              </div>
            </div>
          </div>

          {currentStep === 1 && (
            <div className="steps-content step-one">
              <SignupStep />
                <div className='next-note'>
                  <h4 className="mb-3">Apply for Master ID</h4>
                  <p>This ID will help you with your business and present yourself as special. Create a master ID for your unique identity. Enroll in multiple businesses and present yourself as a professional.</p>
                  <button onClick={handleNextStep} className="next">Next</button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="steps-content">
              {!form1Submitted && (
                <>
                  <h3 className="mb-4">Master ID Registration Form</h3>
                  <MasterStep handleNextStep={handleForm1Submit} handleMasterFormBack={handleMasterFormBackStepTwo} />
                </>
              )}
              {form1Submitted && !form2Submitted && (
                <>
                  <h3 className="mb-5">Master ID Payment</h3>
                  {/* <PurchaseForm handleNextStep={handleForm2Submit} /> */}
                  
                  <PurchaseForm handleNextStep={handleAccountShow} handleMasterFormBack={handleMasterFormBackStepTwo} />
                </>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default IndividualProfile;
