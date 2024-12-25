import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import AddHouseModal from "./addHouseModal/AddHouseModal";
import FamilyMemberModal from "./familyMemberModal/FamilyMemberModal";

// Images
import Signature from "../../../assets/signature.png";
import Shield from "../../../assets/shield.png";
import Briefcase from "../../../assets/briefcase-pink.png";
import ShieldWhite from "../../../assets/shield-white.png";
import CompanyLogo from "../../../assets/company-logo.jpg";
import UserImg from "../../../assets/user.jpg";
import IdCardIcon from "../../../assets/id-card-white.png";
import burceMars from "../../../assets/shree-ganesh.png";
import AadharImg from "../../../assets/aadhar.png";
import Fingerprint from "../../../assets/fingerprint-white.png";
import HouseIcon from "../../../assets/home-icon.png";
import EmailIcon from "../../../assets/email-icon.png";
import HomeLocationIcon from "../../../assets/home-location-icon.png";
import PhoneIcon from "../../../assets/phone-icon.png";
import ProfileImg from "../../../assets/profile.jpg";

import "./businessAccount.scss";

function BusinessAccount() {
  const navigate = useNavigate();
  const [showHouseModal, setShowHouseModal] = useState(false);
  const [showFamilyModal, setShowFamilyModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showInputs, setShowInputs] = useState(false);
  const { showMiForm, setShowMiForm, showMBForm, setShowMBForm } =
    useContext(UserContext);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShowMIForm = () => {
    setShowMiForm(true);
    navigate("/mi-form");
  };

  const handleShowMBForm = () => {
    setShowMBForm(true);
    navigate("/mb-form");
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setShowInputs(value === "not_found");
  };
  const handleFamilyModal = () => {
    setShowFamilyModal(true);
  };

  const handleCloseFamilyModal = () => {
    setShowFamilyModal(false);
  };

  const handleHouseModal = (e) => {
    e.preventDefault();
    setShowHouseModal(true);
  };

  const handleCloseHouse = () => {
    setShowHouseModal(false);
  };

  const handleEditMember = (member) => {
    // Open edit modal or form
    setSelectedMember(member);
    handleFamilyModal();
  };

  const handleDeleteMember = (member) => {
    if (window.confirm(`Are you sure you want to remove ${member.name} from family members?`)) {
      // Delete logic here
      console.log('Deleting member:', member);
    }
  };

  const handleEditHouse = (house) => {
    // Open edit modal or form
    console.log('Editing house:', house);
    handleHouseModal();
  };

  const handleDeleteHouse = (house) => {
    if (window.confirm('Are you sure you want to delete this house?')) {
      // Delete logic here
      console.log('Deleting house:', house);
    }
  };

  console.log("showMiForm", showMiForm);

  return (
    <>
  
    <div className="dash-profile dashboard flex-md-row ">
      <div className="mb-5 mb-md-0 dash-left">
        <div className="card profile-container p-3 mb-3 shadow-lg " style={{ backgroundColor:"#F26B81"}}  >
          <div className="row align-items-center   justify-content-between  ">
            <div style={{ width: "fit-content",marginBottom:"10px" }}>
              <img
                src={burceMars}
                alt="profile-image"
                className="rounded-circle shadow-sm"
                style={{ width: "74px", height: "74px" }}
              />
            </div>
            <div style={{ width: "fit-content" }}>
              <div className="mt-1">
                <h5 className="fw-bold mb-1">Shree Ganesh</h5>
                <p className="mb-0 text-black">USER ID / MU_123456  </p>
              </div>
            </div>
            <div
              className="profile-head col-12 col-md-6 col-lg-5 ms-auto "
              style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end" , gap: "10px"}}
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src={Fingerprint}
                  alt="profile-image"
                  className="rounded"
                  style={{ width: "36px", height: "36px",color:"green" }}
                />
                <p className="text-black mb-0 d-flex align-items-center gap-2">
                  <img
                    src={ShieldWhite}
                    alt="profile-image"
                    style={{ width: "24px", height: "24px" }}
                  />
                  Not Active
                </p>
              </div>
              <img
                src={AadharImg}
                alt="profile-image"
                className="rounded"
                style={{ width: "40px", height: "30px" }}
              />
              <div className="d-flex align-items-center gap-2">
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <p className="text-black mb-0">AADHAR</p>
                    <img
                      src={Shield}
                      alt="profile-image"
                      className="rounded-circle"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <p className="text-black mb-0">9XXXXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-data">
          <div className="business-details">
          </div>
          <div style={{ width: "100%",backgroundColor:"white" }} >

       
          <div className="filter-table shadow-lg " style={{ minHeight: "400px" }} >
            <div className="filters d-flex align-items-center gap-3 mb-3 " >
              <select name="" id="" className="form-select">
                <option value="">All</option>
                <option value="">In-Review</option>
                <option value="">Complete Order</option>
                <option value="">Pending</option>
                <option value="">On-hold</option>
              </select>
              <input type="text" value="Event" className="form-control" />
              <input type="text" value="Activity" className="form-control" />
            </div>

            <table className="table mt-3 ">
              <thead  >
                <tr >
                  <th></th>
                  <th>Order ID </th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Help</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>#12345</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={Signature}
                        alt="profile-image"
                        className="rounded"
                        style={{ width: "36px", height: "36px" }}
                      />
                      MId
                    </div>
                  </td>
                  <td>23/12/2024</td>
                  <td>
                    <span>RS 00</span>
                  </td>
                  <td>Complete</td>
                  <td>Report</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        navigate("/invoice");
                      }}
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>#12345</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={Signature}
                        alt="profile-image"
                        className="rounded"
                        style={{ width: "36px", height: "36px" }}
                      />
                      MId
                    </div>
                  </td>
                  <td>23/12/2024</td>
                  <td>
                    <span>RS 00</span>
                  </td>
                  <td>Complete</td>
                  <td>Report</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        navigate("/invoice");
                      }}
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>#12345</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={Signature}
                        alt="profile-image"
                        className="rounded"
                        style={{ width: "36px", height: "36px" }}
                      />
                      MId
                    </div>
                  </td>
                  <td>23/12/2024</td>
                  <td>
                    <span>RS 00</span>
                  </td>
                  <td>Complete</td>
                  <td>Report</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        navigate("/invoice");
                      }}
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
                {showMiForm && (
                  <tr>
                    <td>1</td>
                    <td>#12345</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={Signature}
                          alt="profile-image"
                          className="rounded"
                          style={{ width: "36px", height: "36px" }}
                        />
                        MI Id
                      </div>
                    </td>
                    <td>23/12/2024</td>
                    <td>
                      <span>RS 00</span>
                    </td>
                    <td>In Review   </td>
                    <td>Report</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          navigate("/invoice");
                        }}
                      >
                        {showMiForm && showMBForm
                          ? "View Invoice"
                          : "View Ticket"}
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          </div>
          <div className="household mt-4 p-3 shadow-lg " style={{ background: "#fff" }} >
            <div className="d-flex justify-content-between align-items-center house-head">
              <div className="d-flex align-items-center gap-2 house-content">
                <img
                  src={HouseIcon}
                  alt="house-icon"
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="mb-0">Household</p>
              </div>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={(e) => {
                  handleHouseModal(e);
                }}
              >
                Add House
              </button>
            </div>
            {/* Additional household data can be added here */}
          </div>
        </div>
        <div className="house-hold">
         

          <div className="house-cards  ">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="house-card shadow-lg ">
                <div className="card-actions">
                  <button 
                    onClick={() => handleEditHouse(item)} 
                    className="edit-btn"
                    title="Edit house"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleDeleteHouse(item)} 
                    className="delete-btn"
                    title="Delete house"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </button>
                </div>
                <div className="card-top">
                  <div className="house-icon-row">
                    <div className="icon-title">
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={HomeLocationIcon}
                        alt="home"
                      />
                      <h6>ADRASH PALM RETREAT VILA</h6>
                    </div>
                    <span className="owner-tag">Owner</span>
                  </div>
                  <div className="house-info">
                    <div className="info-text">
                      <div className="address-details">
                        <p>VILA {item}</p>
                        <p>Phase 2, 2nd Cross</p>
                        <p>Bangalore Karnataka</p>
                        <p>560034</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="family-members">
                  <div className="family-title">
                    <span>Family Member</span>
                    <div className="family-icons">
                     
                    </div>
                  </div>
                  <div className="member-avatars">
                    {[
                      { name: 'John D', id: 'MI_1234' },
                      { name: 'Sarah M', id: 'MI_1235' },
                      { name: 'Mike R', id: 'MI_1236' },
                      { name: 'Emma K', id: 'MI_1237' },
                      { name: 'David L', id: 'MI_1238' },
                      { name: 'Lisa P', id: 'MI_1239' }
                    ].map((member, idx) => (
                      <div key={idx} className="avatar-wrapper">
                       
                        <div className="avatar">
                          <img src={UserImg} alt={member.name} />
                        </div>
                        <span className="member-name">{member.name}</span>
                        <span className="member-id">{member.id}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      

      <div className="dash-right">
        <div className="dash-right-head d-flex align-items-center gap-2">
          <p className="mb-0">Master ID</p>
          <span>BHA-XXXXXXXXXX</span>
          <img
            src={Shield}
            alt="profile-image"
            style={{ width: "20px", height: "20px" }}
          />
        </div>

        <div className="dash-right-details">
          <div className="details">
            <p className="mb-0">Name</p>
            <p className="mb-0">Rohan lal</p>
          </div>
          <div className="details">
            <p className="mb-0">
              <img
                src={EmailIcon}
                alt="profile-image"
                style={{ width: "20px", height: "20px" }}
              />
            </p>
            <p className="mb-0">rohan@gmail.com</p>
            <img
              src={Shield}
              alt="profile-image"
              className="verified"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="details">
            <p className="mb-0">
              <img
                src={PhoneIcon}
                alt="profile-image"
                style={{ width: "20px", height: "20px" }}
              />
            </p>
            <p className="mb-0">+911234567890</p>
            <img
              src={Shield}
              alt="profile-image"
              className="verified"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="details">
            <p className="mb-0">
              <strong>DOB</strong>
            </p>
            <p className="mb-0">0X/XX/XXXX</p>
          </div>
          <div className="details">
            <p className="mb-0">
              <img
                src={HomeLocationIcon}
                alt="profile-image"
                style={{ width: "20px", height: "20px" }}
              />
            </p>
            <p className="mb-0">AMRITSAR, PUNJAB</p>
          </div>
        </div>

        <div className="dash-id-details">
          <div className="id-details-box">
            <p className="id-head">
              MU ID{" "}
              <img
                src={Shield}
                alt="profile-image"
                style={{ width: "20px", height: "20px" }}
              />
            </p>
            <div className="id-details d-flex align-items-center">
              <img
                src={burceMars}
                alt="profile-image"
                className="rounded-circle shadow-sm"
                style={{ width: "55px", height: "55px" }}
              />
              <h5 className="mb-0" style={{ fontSize: 16 }}>
                Shree Ganesh
                <p className="mb-0 mt-1">
                  USER ID / <strong>MU_123456</strong>
                </p>
              </h5>
              <div className="details-icons">
                {/* <KeyboardArrowDownIcon />
                <MoreVertIcon /> */}
              </div>
            </div>
          </div>

          <div className="id-details-box id-box">
            <p className="id-head">MI ID</p>
            <div className="id-details d-flex align-items-center">
              <img
                src={Signature}
                alt="profile-image"
                className="rounded"
                style={{ width: "48px", height: "48px" }}
              />
              <div className="id-content">
                {showMiForm && (
                  <p className="d-flex flex-column">
                    <div>
                      23/12/2024{" "}
                      {showMiForm && showMBForm && (
                        <img
                          src={Shield}
                          alt="verified"
                          className="p-0 border-0"
                          style={{ width: 20, height: 20 }}
                        />
                      )}
                    </div>
                    {showMiForm && showMBForm && (
                      <span style={{ fontSize: 12, fontWeight: "bold" }}>
                        USER ID / MI_123456
                      </span>
                    )}
                  </p>
                )}

                {showMiForm && !showMBForm && <span>Rs 0.00</span>}
              </div>
              <button
                type="button"
                className="review"
                onClick={handleShowMIForm}
              >
                {!showMiForm && !showMBForm && "Create Now"}
                {showMiForm && !showMBForm && "In Review  "}
                {showMiForm && showMBForm && "Verified"}
              </button>
              <div className="details-icons">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-eimhud-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="KeyboardArrowDownIcon"
                >
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-eimhud-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="MoreVertIcon"
                >
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </div>
              {showMiForm && !showMBForm ? (
                <span className="id-num">#1234</span>
              ) : showMiForm && showMBForm ? (
                ""
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="id-details-box id-box">
            <p className="id-head">MB ID</p>
            <div className="id-details d-flex align-items-center">
              <img
                src={Signature}
                alt="profile-image"
                className="rounded"
                style={{ width: "48px", height: "48px" }}
              />
              <div className="id-content">
                {showMiForm && (
                  <p className="d-flex flex-column">
                    <div>
                      23/12/2024{" "}
                      {showMiForm && showMBForm && (
                        <img
                          src={Shield}
                          alt="verified"
                          className="p-0 border-0"
                          style={{ width: 20, height: 20 }}
                        />
                      )}
                    </div>
                    {showMiForm && showMBForm && (
                      <span style={{ fontSize: 12, fontWeight: "bold" }}>
                        USER ID / MB_123456
                      </span>
                    )}
                  </p>
                )}

                {showMiForm && !showMBForm && <span>Rs 0.00</span>}
              </div>
              <button
                type="button"
                className="review"
                style={{ color: "green", display: "flex", alignItems: "center", gap: "5px" }}
                onClick={handleShowMBForm}
              >
                {!showMiForm && !showMBForm && "Create Bussiness "}
                {showMiForm && !showMBForm && "In Review  "}
                {showMiForm && showMBForm && (
                  <div className="active-btn-content" onClick={(e) => {
                    e.stopPropagation();
                    setShowUserDetails(!showUserDetails);
                  }}>
                    Active
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: "5px" }}
                    >
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
              </button>
              <div className="details-icons">
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-eimhud-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="KeyboardArrowDownIcon"
                >
                  <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-eimhud-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="MoreVertIcon"
                >
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
              </div>
              {showMiForm && !showMBForm ? (
                <span className="id-num">#1234</span>
              ) : showMiForm && showMBForm ? (
                ""
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      {showUserDetails && showMiForm && showMBForm && (
        <div className="user-details-dropdown" style={{
          position: "absolute",
          top: "100%",
          right: "0",
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          padding: "15px",
          zIndex: 1000,
          minWidth: "200px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <img src={Signature} alt="profile" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
            <div>
              <p style={{ margin: 0, fontWeight: "bold" }}>USER ID / MB_123456</p>
              <small>23/12/2024</small>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #eee", paddingTop: "10px" }}>
            <p style={{ margin: "5px 0" }}>Status: Active</p>
            <p style={{ margin: "5px 0" }}>Type: Business</p>
          </div>
        </div>
      )}

      <AddHouseModal
        modalShow={showHouseModal}
        handleModalClose={handleCloseHouse}
        handleFamilyModal={handleFamilyModal}
        burceMars={burceMars}
        showInputs={showInputs}
        CompanyLogo={CompanyLogo}
        handleSelectChange={handleSelectChange}
      />

      <FamilyMemberModal
        showFamilyModal={showFamilyModal}
        handleCloseFamilyModal={handleCloseFamilyModal}
        selectedMember={selectedMember}
      />
      
    </div>
   
   </>
    
  );
}
export default BusinessAccount;
