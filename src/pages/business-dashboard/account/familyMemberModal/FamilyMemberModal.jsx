import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import burceMars from "../../../../assets/shree-ganesh.png";
import "./familyMemberModal.scss";

const FamilyMemberModal = ({ showFamilyModal, handleCloseFamilyModal }) => {
  const [relation, setRelation] = useState("");

  const handleRelationChange = (event) => {
    setRelation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Modal show={showFamilyModal} onHide={handleCloseFamilyModal} centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="header-section">
          <div className="header-img">
            <img
              src={burceMars}
              alt="Profile"
              className="profile-image"
            />
            <div className="user-details">
              <h6>Name XXXXXXX</h6>
              <p>RXXXXX@gmail.com</p>
              <p>DOB: 0X/XX/XXXX</p>
            </div>
          </div>
        <div className="relation-section">
          <div className="form-group">
            <label htmlFor="relation">Select relation:</label>
            <select id="relation" value={relation} onChange={handleRelationChange}>
              <option value="">Select</option>
              <option value="relation1">Relation 1</option>
              <option value="relation2">Relation 2</option>
            </select>
          </div>
          <div className="user-id">
            <p className="mb-0">
              User ID: <span>MU_123456</span>
            </p>
            <p className="mb-0">Send request to allow</p>
            <Button
              className="send-request-button mt-1"
              onClick={handleSubmit}
            >
              Send Request
            </Button>
          </div>
        </div>
        </div>

        <div className="flex-title">
          <div className="input-fields-section">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="he-she-id">Enter HE/SHE/ HER Master User ID:</label>
                <div className="master-id-main">
                  <div className="master-id-box">
                    <p>MU</p>
                    <div>
                      <input type="text" id="he-she-id" value="123456" readOnly />
                    </div>
                  </div>
                  <Button className="submit-button" type="submit">
                    Submit
                  </Button>
                </div>
                <div className="master-id-main">
                  <div className="master-id-box">
                    <p>MI</p>
                    <div>
                      <input type="text" id="he-she-id" value="123456" readOnly />
                    </div>
                  </div>
                  <Button className="submit-button" type="submit">
                    Submit
                  </Button>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="master-id">Enter Master ID:</label>
                  <input type="text" id="master-id" />
                  <Button className="submit-button" type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <p className="create-new-text">
            Click here if you do not have <a href="#">Create new</a>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FamilyMemberModal;
