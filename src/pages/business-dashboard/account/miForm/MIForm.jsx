import { useState, useRef, useContext } from "react";
import UserContext from "../../../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "./miForm.scss";
import Shield from "../../../../assets/shield.png";

const MIForm = () => {
  const { navButtonClick } = useContext(UserContext);
  const [selectedDepartment, setSelectedDepartment] = useState("A");
  const [selectedButton, setSelectedButton] = useState("MUSIC DANCE FITNESS");
  const [haveLegalName, setHaveLegalName] = useState(true);
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedProfessionTags, setSelectedProfessionTags] = useState([]);
  const [selectedSubProfessionTags, setSelectedSubProfessionTags] = useState(
    []
  );
  const [selectHaveDocs, setSelectHaveDocs] = useState(false);
  const [selectNotHaveDocs, setSelectNotHaveDocs] = useState(false);
  const [links, setLinks] = useState([{ id: 1 }, { id: 1 }, { id: 1 }]);
  const navigate = useNavigate();
  const maxTags = 5;

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    // Add new selections to the state, avoiding duplicates and respecting the max limit
    setSelectedProfessionTags((prevTags) => {
      const newTags = [...new Set([...prevTags, ...selectedValues])];
      if (newTags.length > maxTags) {
        return newTags.slice(0, maxTags); // Limit to maxTags
      }
      return newTags;
    });
    setSelectHaveDocs(false);
    setSelectNotHaveDocs(false);
  };

  const removeTag = (tagToRemove) => {
    setSelectedProfessionTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleSubProfessionChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    // Add new selections to the state, avoiding duplicates and respecting the max limit
    setSelectedSubProfessionTags((prevTags) => {
      const newTags = [...new Set([...prevTags, ...selectedValues])];
      // if (newTags.length > maxTags) {
      //   return newTags.slice(0, maxTags); // Limit to maxTags
      // }
      return newTags;
    });
  };

  const removeSubTag = (tagToRemove) => {
    setSelectedSubProfessionTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToRemove)
    );
  };

  const addLink = () => {
    setLinks([...links, { id: links.length + 1 }]);
  };

  const [images, setImages] = useState({
    documentOne: null,
    documentTwo: null,
    documentThree: null,
    documentFour: null,
  });

  const fileInputRefs = {
    documentOne: useRef(null),
    documentTwo: useRef(null),
    documentThree: useRef(null),
    documentFour: useRef(null),
  };

  const handleClick = (department, button) => {
    setSelectedDepartment(department);
    setSelectedButton(button);
    console.log(
      `Selected Department: ${department}, Selected Button: ${button}`
    );
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (selectedTag && !tags.includes(selectedTag)) {
      console.log("Adding tag:", selectedTag);
      setTags([...tags, selectedTag]);
      setSelectedTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  console.log("tags", tags);

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

  const handleLegalName = (e) => {
    e.target.value;
    setHaveLegalName(!haveLegalName);
  };

  const handleIdBack = () => {
    navigate("/business-account");
  };

  const handleChangeNotDocs = () => {
    setSelectedProfessionTags([]);
    setSelectedSubProfessionTags([]);
    setSelectNotHaveDocs(!selectNotHaveDocs);
  };

  console.log("selectNotHaveDocs", selectNotHaveDocs);
  console.log("selectedProfessionTags", selectedProfessionTags);

  return (
    <div className={`dashboard ${navButtonClick && "dashboard-full"}`}>
      <Link className="back" to="/business-account">
        {" "}
        Back
      </Link>
      <div className="row">
        <div className="col-12 col-sm-3">
          <div className="mi-sidebar">
            <h3>Select your Profession Department</h3>
            <div>
              <p>A</p>{" "}
              <button
                fullWidth
                className="submitButton"
                onClick={() => handleClick("A", "MUSIC DANCE FITNESS")}
              >
                MUSIC DANCE FITNESS
              </button>
            </div>
            <div>
              <p>B</p>{" "}
              <button
                fullWidth
                onClick={() => handleClick("B", "Information technology")}
              >
                Information technology
              </button>
            </div>
            <div>
              <p>C</p>{" "}
              <button fullWidth onClick={() => handleClick("C", "Education")}>
                Education
              </button>
            </div>
            <div>
              <p>D</p>{" "}
              <button fullWidth onClick={() => handleClick("D", "Real estate")}>
                Real estate
              </button>
            </div>
            <div>
              <p>E</p>{" "}
              <button
                fullWidth
                onClick={() => handleClick("E", "Organization")}
              >
                Organization
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-9">
          <div className="content">
            <div className="content-head">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: 20 }}
                  className="content-head-left"
                >
                  <span>{selectedDepartment}</span> {selectedButton}
                </div>
                <div className="id-form-head">
                  <h3>
                    MASTER ID <span>BHA_12XXXXXXX</span>{" "}
                    <img
                      src={Shield}
                      alt="profile-image"
                      style={{ width: 18, height: 18 }}
                    />
                  </h3>
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="">Parent Business</label>
                <div title="Delete" placement="top">
                  <select name="" id="" disabled>
                    <option value="">Individual</option>
                  </select>
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="">Profession Category</label>
                <select onChange={handleSelectChange}>
                  <option value="" default disabled selected>
                    Select a Profession
                  </option>
                  <option value="Indian Culture Art">Indian Culture Art</option>
                  <option value="Musician">Musician</option>
                  <option value="Artist">Artist</option>
                  <option value="Physical Fitness">Physical Fitness</option>
                  <option value="Wellness">Wellness</option>
                </select>
              </div>
              {selectedProfessionTags?.length > 1 && !selectHaveDocs ? (
                ""
              ) : (
                <div className="input-container">
                  <label htmlFor="">Select Profession Subcategory</label>
                  <select onChange={handleSubProfessionChange}>
                    <option value="" default disabled selected>
                      Select a Profession
                    </option>
                    <option value="Indian Culture Art">
                      Indian Culture Art
                    </option>
                    <option value="Musician">Musician</option>
                    <option value="Artist">Artist</option>
                    <option value="Physical Fitness">Physical Fitness</option>
                    <option value="Wellness">Wellness</option>
                  </select>
                </div>
              )}

              {(selectedProfessionTags?.length > 0 ||
                selectedSubProfessionTags?.length > 0) && (
                <div className="row w-100">
                  <div className="col-12 col-md-6 category-tags">
                    <div className="tags-container">
                      {selectedProfessionTags.map((tag, index) => (
                        <div key={index} className="tag">
                          {tag}
                          <button onClick={() => removeTag(tag)}>x</button>
                        </div>
                      ))}
                    </div>

                    {selectedProfessionTags.length >= maxTags && (
                      <div style={{ color: "red", marginTop: "10px" }}>
                        Maximum of {maxTags} tags selected.
                      </div>
                    )}
                    {selectedProfessionTags?.length > 0 && (
                      <>
                        <div className="input-container d-flex align-items-start w-100">
                          <input
                            type="checkbox"
                            name=""
                            id="haveDocs"
                            checked={selectHaveDocs}
                            onChange={() => {
                              setSelectHaveDocs(!selectHaveDocs);
                            }}
                            style={{
                              width: "fit-content",
                              marginRight: 7,
                              marginTop: 4,
                            }}
                          />
                          <label htmlFor="haveDocs">
                            The multiple categories I selected for the
                            profession, I have related documents and
                            certifications.
                          </label>
                        </div>
                        <div className="input-container d-flex align-items-start w-100">
                          <input
                            type="checkbox"
                            name=""
                            id="noDocs"
                            checked={selectNotHaveDocs}
                            onChange={() => {
                              handleChangeNotDocs();
                            }}
                            style={{
                              width: "fit-content",
                              marginRight: 7,
                              marginTop: 4,
                            }}
                          />
                          <label htmlFor="noDocs">No, I don’t have</label>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="col-12 col-md-6 sub-category-tags">
                    <div className="tags-container">
                      {selectedSubProfessionTags.map((tag, index) => (
                        <div key={index} className="tag">
                          {tag}
                          <button onClick={() => removeSubTag(tag)}>x</button>
                        </div>
                      ))}
                    </div>

                    {/* {selectedSubProfessionTags.length >= maxTags && (
                      <>
                        <div style={{ color: "red", marginTop: "10px" }}>
                          Maximum of {maxTags} tags selected.
                        </div>
                        <div className="input-container d-flex align-items-start w-100">
                          <input
                            type="checkbox"
                            name=""
                            id="haveDocs"
                            style={{
                              width: "fit-content",
                              marginRight: 7,
                              marginTop: 4,
                            }}
                          />
                          <label htmlFor="haveDocs">
                            The multiple categories I selected for the
                            profession, I have related documents and
                            certifications.
                          </label>
                        </div>
                        <div className="input-container d-flex align-items-start w-100">
                          <input
                            type="checkbox"
                            name=""
                            id="noDocs"
                            style={{
                              width: "fit-content",
                              marginRight: 7,
                              marginTop: 4,
                            }}
                          />
                          <label htmlFor="noDocs">No, I don’t have</label>
                        </div>
                      </>
                    )} */}
                  </div>
                </div>
              )}

              {selectNotHaveDocs && selectedProfessionTags?.length < 1 && (
                <div style={{ color: "red", marginTop: "10px" }}>
                  Please select only those categories for which you have a
                  certificate or any other permanent document that proves you
                  possess the profession you have selected above.
                </div>
              )}
            </div>
            <div className="id-form-head mt-5">
              <h3 className="sectionTitle">
                Give your legal Information. For Individual ID.
              </h3>
            </div>

            <div className="id-form-check">
              <div className="input-container">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Yes, this is my legal name</label>
              </div>
              <div className="input-container">
                <input
                  type="checkbox"
                  name=""
                  id="not-legal"
                  onChange={(e) => handleLegalName(e)}
                />
                <label htmlFor="not-legal">No, this is my legal name</label>
              </div>
              <div className="input-container">
                <span>USER ID</span>
                <p>MU_123456</p>
              </div>
            </div>
            <div className="id-detail-form">
              <div className="input-container">
                <span></span>
                <input type="file" hidden />
              </div>
              <div className="input-container">
                <label htmlFor="">Legal Name</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">Surname/Lastname</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">State</label>
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="">City</label>
                <select name="" id="">
                  <option value=""></option>
                </select>
              </div>
              <div className="input-container">
                <label htmlFor="">Postcode</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">Aadhar Num.</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label htmlFor="">DOB</label>
                <input type="date" />
              </div>
              <div className="input-container">
                <label htmlFor="">PAN Number</label>
                <input type="text" />
              </div>
            </div>
            <div className="tag-form">
              <form onSubmit={handleAddTag}>
                <div className="input-container">
                  <div>
                    <label>Nickname</label>
                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      // disabled={haveLegalName}
                    />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      // disabled={haveLegalName}
                    />
                    <p className="pt-4">
                      Please submit documents, certifications, degrees, or any
                      other proof related to your profession that
                      you selected above
                    </p>
                    <p>
                      <strong>Submit your Documents</strong>
                    </p>
                  </div>
                </div>
                <div className="input-container">
                  <label>Please add your extra skill.</label>
                  <input
                    type="text"
                    value={selectedProfessionTags}
                    onChange={(e) => setSelectedProfessionTags(e.target.value)}
                    placeholder="Enter a tag"
                    // disabled={haveLegalName}
                  />
                  <button
                    type="submit"
                    onClick={handleAddTag}
                    // disabled={haveLegalName}
                  >
                    SUBMIT
                  </button>

                  <div className="tags-container">
                    {tags.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}{" "}
                        <span
                          className="remove-tag"
                          onClick={() => handleRemoveTag(tag)}
                        >
                          ×
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </div>

            <div className="documents-list">
              <div className="document">
                <p>Enter Document Title</p>
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
                <p>Enter Document Title</p>
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
                <p>Enter Document Title</p>
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
                <p>Enter Document Title</p>
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
            </div>

            <h5 className="mt-5">
              Paste video links (in any) related to your professional skills
            </h5>

            <div className="links-terms">
              <div className="links-list">
                {links.map((link, i) => (
                  <div className="links" key={i}>
                    <button>Video Link</button>
                    <input type="text" name="" id="" />
                  </div>
                ))}
                <button onClick={addLink} style={{ width: "fit-content" }}>
                  Add More Links
                </button>
              </div>
              <div className="terms">
                <div>
                  <input type="checkbox" name="" id="terms" />
                  <label htmlFor="terms">Terms and Conditions</label>
                </div>
                <button type="button" onClick={handleIdBack}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MIForm;
