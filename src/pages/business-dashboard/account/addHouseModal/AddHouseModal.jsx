import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddHouseModal({
  modalShow,
  handleModalClose,
  handleFamilyModal,
  burceMars,
  showInputs,
  CompanyLogo,
  handleSelectChange
}) {
  return (
    <Modal
      show={modalShow}
      onHide={handleModalClose}
      className="add-house-modal"
    >
      <Modal.Body>
        <div>
          <div className="house-profile-container">
            <div className="house-header d-flex justify-content-between">
              <div className="house-info d-flex align-items-center">
                <img
                  src={burceMars}
                  alt="profile-image"
                  className="rounded-circle"
                  style={{ width: "48px", height: "48px" }}
                />
                <div className="house-profile-details ms-3">
                  <h5 className="mb-1">Shree Ganesh</h5>
                  <p className="house-id">House ID / MU_123456</p>
                  <p className="house-email">Rohan@gmail.com</p>
                </div>
              </div>
              {!showInputs && (
                <div className="house-society d-flex align-items-center">
                  <img
                    src={CompanyLogo}
                    alt="company-logo"
                    className="img-thumbnail"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <div className="society-details-head ms-3">
                    <h6>ADRASH PALM RETREET VILA</h6>
                    <p className="mb-0">BANGALORE 21, NAGAR</p>
                    <p className="mb-0">13 MAIN 4TH CROSS KARNATAKA 560034</p>
                  </div>
                </div>
              )}
            </div>

            <div className="house-form mt-4">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>City:</label>
                    <select name="" id="" className="form-select">
                      <option value="" default>
                        Bangalore
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>State:</label>
                    <select name="" id="" className="form-select">
                      <option value="" default>
                        Karnataka
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Postcode / ZIP:</label>
                    <input
                      type="text"
                      value="560034"
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Select Your Society:</label>
                    <select
                      name="society"
                      id="society-select"
                      className="form-select"
                      onChange={handleSelectChange}
                    >
                      <option value="default">ADRASH PALM RETREET VILA</option>
                      <option value="not_found">Did not find my society</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Your Contact Number:</label>
                    <input
                      type="text"
                      value="+912597812345"
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              {showInputs && (
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Society name:</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Address:</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              )}

              <div className="society-details d-flex align-items-center">
                {!showInputs && (
                  <img
                    src={CompanyLogo}
                    alt="company-logo"
                    className="img-thumbnail"
                    style={{ width: "60px", height: "60px" }}
                  />
                )}
                <div className="society-content ms-3">
                  {!showInputs && <h6 className="mb-0">ADRASH PALM RETREET VILA</h6>}
                  <button
                    type="button"
                    className="btn btn-primary upload-family-btn mt-2"
                    onClick={handleFamilyModal}
                    disabled={showInputs}
                  >
                    <span className="me-1">
                      <i className="bi bi-plus"></i>
                    </span>{" "}
                    Add Family
                  </button>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>House / Flat Number:</label>
                    <input
                      type="text"
                      value="A555"
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Phase:</label>
                    <input
                      type="text"
                      value="3"
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Cross:</label>
                    <input
                      type="text"
                      value="1"
                      readOnly
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Select Who You Are:</label>
                    <select name="" id="" className="form-select">
                      <option value="">Owner</option>
                      <option value="">Tenant</option>
                      <option value="">Guest</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-8 d-flex align-items-end">
                  <button className="btn btn-success w-100">
                    Send Request
                  </button>
                </div>
              </div>

              <div className="family-section mt-5">
                <h6>My Family</h6>
                {/* Family members section can be added here */}
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSubmittedReq();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default AddHouseModal;
