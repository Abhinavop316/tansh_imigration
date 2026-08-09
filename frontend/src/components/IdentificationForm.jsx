import React, { useState } from "react";
import "../styles/IdentificationForm.css";

const identTypes = [
  {
    id: "uci",
    label: "Unique Client Identifier (UCI) / Personal Identification Number (PIN)",
  },
  { id: "app_num", label: "Application Number / File Number" },
  { id: "pr_card", label: "Permanent Resident Card Number" },
  {
    id: "copr",
    label: "Confirmation of Permanent Residence (COPR) Number",
  },
  {
    id: "citizenship_cert",
    label: "Citizenship Certificate / Card Number",
  },
];

const helpTopics = {
  identType:
    "Select the document type you are using for identification. For most applicants, Unique Client Identifier (UCI) or Application Number is recommended.",
  identNum:
    "Your UCI is an 8 or 10-digit number (e.g. 1234-5678 or 12-3456-7890). Application numbers start with a letter followed by 9 digits (e.g. EP00123456).",
  surname:
    "Enter your last name / family name exactly as shown on your passport, official IRCC letter, or application receipt.",
  dob:
    "Select or enter your date of birth in Year-Month-Day format (YYYY-MM-DD).",
  placeOfBirth:
    "Enter your country of birth as stated on your passport or identity documents.",
};

function IdentificationForm({ onSubmitIdent, onBack, onOpenFaq, isLoading = false, apiError = "" }) {
  const [formData, setFormData] = useState({
    identType: "",
    identNum: "",
    email: "",
    surname: "",
    dob: "",
    placeOfBirth: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [activeHelp, setActiveHelp] = useState(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.identNum && !formData.email) {
      setErrorMsg("Please enter an Identification Number or Email Address.");
      window.scrollTo({ top: 150, behavior: "smooth" });
      return;
    }
    onSubmitIdent(formData);
  };

  const activeError = errorMsg || apiError;

  return (
    <div className="identification-form">
      <div className="section-heading">
        <h1 className="section-heading__title">Client Application Status</h1>
      </div>

      <div className="identification-form__quick-links">
        <button type="button" onClick={onOpenFaq} className="link-button">
          <abbr title="Frequently Asked Questions">FAQ</abbr>
        </button>{" "}
        |{" "}
        <span className="identification-form__quick-link-active">
          Security
        </span>
      </div>

      <div className="notice-row">
        <span className="notice-row__icon">!</span>
        <span>All fields must be filled in.</span>
      </div>

      {activeError && (
        <div className="alert-box alert-box--error alert-box--compact">
          {activeError}
        </div>
      )}

      {activeHelp && (
        <div className="help-box">
          <button
            type="button"
            onClick={() => setActiveHelp(null)}
            className="help-box__close"
          >
            &times;
          </button>
          <p className="help-box__title">Help Information:</p>
          <p>{helpTopics[activeHelp]}</p>
        </div>
      )}

      <div className="info-box">
        <span className="info-box__icon">ℹ</span>
        <div>
          You may have one or more identification numbers, depending on your type of application(s). Use the{" "}
          <button
            type="button"
            onClick={() => setActiveHelp("identType")}
            className="inline-link inline-link--bold"
          >
            help
          </button>{" "}
          link to get a detailed description of where you can find each identification number.
        </div>
      </div>

      <form onSubmit={handleSubmit} className="identification-form__form">
        <div className="field-row">
          <label htmlFor="identType" className="field-row__label">
            Identification Type:
          </label>
          <div className="field-row__control">
            <select
              id="identType"
              value={formData.identType}
              onChange={(e) => handleChange("identType", e.target.value)}
              className="text-control"
            >
              <option value="">-- Select Identification Type --</option>
              {identTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field-row__action">
            <button
              type="button"
              onClick={() => setActiveHelp("identType")}
              className="help-link"
            >
              Help
            </button>
          </div>
        </div>

        <div className="field-row field-row--spaced">
          <label htmlFor="identNum" className="field-row__label">
            Passport / Identification Number:
          </label>
          <div className="field-row__control">
            <input
              id="identNum"
              type="text"
              value={formData.identNum}
              onChange={(e) => handleChange("identNum", e.target.value)}
              placeholder="e.g. Passport Number (e.g. A12345678)"
              className="text-control"
            />
          </div>
          <div className="field-row__action">
            <button
              type="button"
              onClick={() => setActiveHelp("identNum")}
              className="help-link"
            >
              Help
            </button>
          </div>
        </div>

        <div className="field-row">
          <label htmlFor="email" className="field-row__label">
            Email Address:
          </label>
          <div className="field-row__control">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Registered Email Address"
              className="text-control"
            />
          </div>
        </div>

        <div className="info-box">
          <span className="info-box__icon">ℹ</span>
          <div>Please enter your information as it appears on your application or identity document.</div>
        </div>

        <div className="field-row">
          <label htmlFor="surname" className="field-row__label">
            Surname/Family Name:
          </label>
          <div className="field-row__control">
            <input
              id="surname"
              type="text"
              value={formData.surname}
              onChange={(e) => handleChange("surname", e.target.value)}
              placeholder="As shown on your official document"
              className="text-control"
            />
          </div>
          <div className="field-row__action">
            <button
              type="button"
              onClick={() => setActiveHelp("surname")}
              className="help-link"
            >
              Help
            </button>
          </div>
        </div>

        <div className="field-row">
          <label htmlFor="dob" className="field-row__label">
            Date of Birth:
          </label>
          <div className="field-row__control">
            <input
              id="dob"
              type="date"
              value={formData.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
              className="text-control"
            />
          </div>
          <div className="field-row__action">
            <button
              type="button"
              onClick={() => setActiveHelp("dob")}
              className="help-link"
            >
              Help
            </button>
          </div>
        </div>

        <div className="field-row field-row--last">
          <label htmlFor="placeOfBirth" className="field-row__label">
            Place of Birth:
          </label>
          <div className="field-row__control">
            <input
              id="placeOfBirth"
              type="text"
              value={formData.placeOfBirth}
              onChange={(e) => handleChange("placeOfBirth", e.target.value)}
              placeholder="Country or City of birth"
              className="text-control"
            />
          </div>
          <div className="field-row__action">
            <button
              type="button"
              onClick={() => setActiveHelp("placeOfBirth")}
              className="help-link"
            >
              Help
            </button>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-button" disabled={isLoading}>
            {isLoading ? "Searching status..." : "Continue"}
          </button>
          <button type="button" onClick={onBack} className="secondary-button" disabled={isLoading}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default IdentificationForm;
