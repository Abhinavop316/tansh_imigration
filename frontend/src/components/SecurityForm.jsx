import React, { useState } from "react";
import "../styles/SecurityForm.css";

function SecurityForm({ onContinue, onCancel, onOpenFaq }) {
  const [isChecked, setIsChecked] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setHasError(true);
      window.scrollTo({ top: 150, behavior: "smooth" });
    } else {
      setHasError(false);
      onContinue();
    }
  };

  return (
    <div className="security-form">
      <div className="section-heading">
        <h1 className="section-heading__title">Client Application Status</h1>
      </div>

      <div className="security-form__quick-links">
        <button type="button" onClick={onOpenFaq} className="link-button">
          <abbr title="Frequently Asked Questions">FAQ</abbr>
        </button>{" "}
        |{" "}
        <span className="security-form__quick-link-active">
          Security
        </span>
      </div>

      {hasError && (
        <div className="alert-box alert-box--error" role="alert">
          <div className="alert-box__title">
            <span className="alert-box__icon alert-box__icon--error">!</span>
            <span>This form is incomplete. Please provide the necessary information below, then send your request again.</span>
          </div>
          <p className="alert-box__body alert-box__body--error">
            1. You must agree to these terms and conditions in order to continue using this service. To agree to these terms and conditions, please check the box at the bottom of the page and press Continue. If you do not agree please Cancel.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="security-form__form">
        <section className="security-form__section">
          <h2 className="section-subtitle">Security</h2>

          <div className="content-card">
            <h3 className="content-card__title">Terms and Conditions</h3>

            <section className="content-section">
              <h4 className="content-section__title">Certification of Authority for the Client Service</h4>
              <p className="content-text">
                Using this on-line service means that you confirm that you are the applicant, applicant's executor, legal guardian, authorized officer, or agent of the person for whom this application was submitted.
              </p>
            </section>

            <section className="content-section">
              <h4 className="content-section__title">Security for this Service</h4>
              <ul className="content-list">
                <li>
                  Immigration, Refugees and Citizenship Canada is committed to respecting the personal privacy of individuals who visit our Web site. All personal information you provide is protected under the Government of Canada{" "}
                  <em className="content-emphasis">Federal Privacy Act</em>.
                </li>
                <li>
                  Information on this site is sent between your computer and our servers in an encrypted format.
                </li>
                <li>
                  We use Secure Sockets Layer (also known as SSL) protocol with 128-bit encryption that enhances the privacy of the information passing between your browser and our servers.
                </li>
              </ul>
            </section>

            <section>
              <h4 className="content-section__title content-section__title--important">
                Important:
              </h4>
              <ol className="content-list content-list--ordered">
                <li>
                  Client security is important to us. Please visit our{" "}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-link"
                  >
                    browser information
                  </a>{" "}
                  section.
                </li>
                <li>
                  Keep your identification number(s) confidential to make sure that others cannot view your application status.
                </li>
              </ol>
            </section>
          </div>

          <div className="checkbox-row">
            <input
              id="agree"
              type="checkbox"
              name="securityInd"
              value="agree"
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                if (e.target.checked) setHasError(false);
              }}
              className="checkbox-row__input"
            />
            <label htmlFor="agree" className="checkbox-row__label">
              I have read, understood and agree with the above Terms and Conditions.
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button">
              Continue
            </button>
            <button
              type="button"
              onClick={() => {
                setIsChecked(false);
                setHasError(false);
                if (onCancel) onCancel();
              }}
              className="secondary-button"
            >
              Cancel
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default SecurityForm;
