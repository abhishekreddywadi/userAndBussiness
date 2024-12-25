import { useState, useRef, useContext } from "react";
import UserContext from "../../../../context/UserContext";
import { Container } from "react-bootstrap";
import "./mbForm.scss";
// import Add from '@mui/icons-material/Add';
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Header from "../../../../components/header/Header";

const MbForm = () => {
  const { navButtonClick } = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [companyInputs, setCompanyInputs] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [images, setImages] = useState({
    documentOne: null,
    documentTwo: null,
    documentThree: null,
    documentFour: null,
    documentFive: null,
  });

  const fileInputRefs = {
    documentOne: useRef(null),
    documentTwo: useRef(null),
    documentThree: useRef(null),
    documentFour: useRef(null),
    documentFive: useRef(null),
  };

  const categoryOptions = [
    { value: "IT", label: "Information Technology" },
    { value: "Fashion", label: "Fashion Industry" },
    { value: "Automobile", label: "Automobile Industry" },
  ];

  const subCategoryOptions = {
    IT: ["Software", "Hardware", "Networking"],
    Fashion: ["Clothing", "Accessories", "Footwear"],
    Automobile: ["Cars", "Motorcycles", "Trucks"],
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    setSubCategories(subCategoryOptions[selectedCategory] || []);
  };

  const handleUploadClick = (type) => {
    fileInputRefs[type].current.click();
    console.log("Done");
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => ({
          ...prevImages,
          [type]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addCompanyInputs = () => {
    setCompanyInputs([...companyInputs, { id: companyInputs.length + 1 }]);
  };

  const deleteCompanyInputs = (id) => {
    setCompanyInputs(companyInputs.filter((input) => input.id !== id));
    handleClose();
  };

  console.log(companyInputs);

  return (
    <div
      className={`dashboard ${
        navButtonClick && "dashboard-full"
      } mb-id-container`}
    >
      <Container>
        <Header />
        <div className="content">
          <div className="mb-form-head row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <h6>Business ID Registration. MB Business</h6>
            </div>
            <div className="col-12 col-md-6">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  justifyContent: "flex-end",
                }}
                className="form-head-input"
              >
                <label htmlFor="" style={{ width: "fit-content" }}>
                  Master Id
                </label>
                <input type="text" disabled value="BHA_1234567890" />
              </div>
            </div>
          </div>

          <div className="mb-business-details">
            <p>*required fields</p>
            <div className="mb-business-detail-list">
              <div className="input-container">
                <label htmlFor="">Select Parent Business *</label>
                <input type="text" value="Individual ID" disabled />
              </div>
              <div className="input-container">
                <label htmlFor=""></label>
                <input type="text" value="MBi_123456" disabled />
              </div>
              <div className="input-container">
                <label htmlFor="">Department *</label>
                <select name="" id="">
                  <option value="">IT Department</option>
                </select>
              </div>
            </div>
          </div>

          <div className="company-details">
            <div className="input-container">
              <label htmlFor="">Category Icon *</label>
              <span className="icon"></span>
            </div>
            <div className="input-container">
              <label htmlFor="">Select Company type *</label>
              <select>
                <option value="">Sole Proprietorship</option>
                <option value="">Partnership</option>
                <option value="">Corporation</option>
                <option value="">Limited Liability Company (LLC)</option>
                <option value="">Nonprofit Organization</option>
                <option value="">Cooperative (Co-op)</option>
                <option value="">Franchise</option>
                <option value="">Startup</option>
                <option value="">
                  Small and Medium-sized Enterprises (SMEs)
                </option>
                <option value="">Public Sector</option>
                <option value="">Private Sector</option>
                <option value="">Multinational Corporation</option>
                <option value="">Private Limited Company (Pvt Ltd)</option>
                <option value="">Public Limited Company (Ltd)</option>
                <option value="">One Person Company (OPC)</option>
                <option value="">Limited Liability Partnership (LLP)</option>
                <option value="">Joint Venture (JV)</option>
                <option value="">Cooperative Society</option>
                <option value="">Non-Governmental Organization (NGO)</option>
                <option value="">Section 8 Company</option>
                <option value="">Joint Venture (JV)</option>
                <option value="">Joint Venture (JV)</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="category">Category *</label>
              <select id="category" onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-container">
              <label htmlFor="sub-category">Sub-category *</label>
              <select id="sub-category" disabled={!selectedCategory}>
                <option value="">Select a sub-category</option>
                {subCategories.map((subCategory, index) => (
                  <option key={index} value={subCategory}>
                    {subCategory}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-container">
              <input type="file" name="" id="" />
            </div>
          </div>

          <div className="company-persons">
            <p>Please provide Company Founder, Co-founder, and partners info</p>
            <p>
              Individual business IDs. <span>*required fields</span>
            </p>
            <div className="company-persons-list">
              {companyInputs?.map((inputs) => {
                return (
                  <div className="person" key={inputs?.id} id={inputs?.id}>
                    <span></span>
                    <div className="input-container">
                      <input type="text" />
                      <button>Submit</button>
                    </div>
                    <select name="" id="">
                      <option value="">Owner</option>
                      <option value="">Shareholder</option>
                      <option value="">Partner</option>
                      <option value="">Chief Executive Officer (CEO)</option>
                      <option value="">Chairman/Chairperson</option>
                      <option value="">Director</option>
                      <option value="">Chief Financial Officer (CFO)</option>
                      <option value="">Chief Operating Officer (COO)</option>
                      <option value="">President</option>
                      <option value="">Vice President (VP)</option>
                      <option value="">Secretary</option>
                      <option value="">Trustee</option>
                      <option value="">Executive Chairman</option>
                      <option value="">Investor</option>
                      <option value="">Sleeping Partner</option>
                      <option value="">Co-founders</option>
                      <option value="">Founder</option>
                    </select>
                    <button
                      type="button"
                      className="delete-button"
                      onClick={handleOpen}
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-eimhud-MuiSvgIcon-root"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="MoreVertIcon"
                      >
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                      </svg>
                    </button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <div className="delete-modal">
                        <h4 id="modal-modal-title">
                          Are you sure you want to delete?
                        </h4>
                        <div id="modal-modal-description mt-2 mt-md-0">
                          <button
                            type="button"
                            className="modal-delete-btn"
                            onClick={() => deleteCompanyInputs(inputs?.id)}
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className="modal-close-btn"
                            onClick={handleClose}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </Modal>
                  </div>
                );
              })}
              <button
                onClick={addCompanyInputs}
                className="add-more"
                style={{ width: "fit-content" }}
              >
                {/* <Add />  */}
                Add More
              </button>
            </div>
          </div>

          <div className="country-info row justify-content-between">
            <div className="input-container col-12 col-md-4">
              <label htmlFor="">Country</label>
              <select name="" id="">
                <option value="">Bharat</option>
              </select>
            </div>
            <div className="input-container col-12 col-md-4">
              <label htmlFor="">City</label>
              <select name="" id="">
                <option value="">Maharashtra</option>
              </select>
            </div>
            <div className="input-container col-12 col-md-4">
              <label htmlFor="">State</label>
              <select name="" id="">
                <option value="">Mumbai</option>
              </select>
            </div>
          </div>

          <div className="zip-info row justify-content-between">
            <div className="input-container col-12 col-md-3">
              <label htmlFor="">Postcode/ ZIP *</label>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input type="text" />
                <span style={{ fontSize: 12, minWidth: "fit-content" }}>
                  Enter ZIP for city & state
                </span>
              </div>
            </div>
            <div className="input-container col-12 col-md-6">
              <label htmlFor="">Street Address</label>
              <textarea></textarea>
            </div>
          </div>

          <div className="documents-list">
            <div className="document">
              <p>
                <input type="checkbox" name="" id="" /> Company PAN num. or
              </p>
              <input type="text" name="" id="" />
              <div className="image-upload">
                <input
                  type="file"
                  ref={fileInputRefs.documentOne}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "documentOne")}
                />
                <span>
                  {images.documentOne && (
                    <img src={images.documentOne} alt="PAN Card front" />
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => handleUploadClick("documentOne")}
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="document">
              <p>
                <input type="checkbox" name="" id="" /> Owner PAN num.
              </p>
              <input type="text" name="" id="" />
              <div className="image-upload">
                <input
                  type="file"
                  ref={fileInputRefs.documentTwo}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "documentTwo")}
                />
                <span>
                  {images.documentTwo && (
                    <img src={images.documentTwo} alt="PAN Card front" />
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => handleUploadClick("documentTwo")}
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="document">
              <p>Corporation Certification</p>
              <input type="text" name="" id="" />
              <div className="image-upload">
                <input
                  type="file"
                  ref={fileInputRefs.documentThree}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "documentThree")}
                />
                <span>
                  {images.documentThree && (
                    <img src={images.documentThree} alt="PAN Card front" />
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => handleUploadClick("documentThree")}
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="document">
              <p>Another Document Name</p>
              <input type="text" name="" id="" />
              <div className="image-upload">
                <input
                  type="file"
                  ref={fileInputRefs.documentFour}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "documentFour")}
                />
                <span>
                  {images.documentFour && (
                    <img src={images.documentFour} alt="PAN Card front" />
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => handleUploadClick("documentFour")}
                >
                  Upload
                </button>
              </div>
            </div>

            <div className="document">
              <p>Another Document Name</p>
              <input type="text" name="" id="" />
              <div className="image-upload">
                <input
                  type="file"
                  ref={fileInputRefs.documentFive}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "documentFive")}
                />
                <span>
                  {images.documentFive && (
                    <img src={images.documentFive} alt="PAN Card front" />
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => handleUploadClick("documentFive")}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div className="agree-btn">
            <label htmlFor="" className="agree-check">
              <input type="checkbox" name="" id="" />I agree to{" "}
              <Link to="/">Terms and conditions</Link>
            </label>
            <button
              type="button"
              className="mb-submit"
              onClick={() => navigate("/business-account")}
            >
              Submit for Registration
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MbForm;
