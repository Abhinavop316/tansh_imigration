import React, { useEffect, useState } from "react";
import SecurityForm from "../components/SecurityForm";
import IdentificationForm from "../components/IdentificationForm";
import ApplicationStatusView from "../components/ApplicationStatusView";
import { getAClients } from "../api/client.api";

function ClientApplicationStatus({ onOpenFaq }) {

  const [step, setStep] = useState(1);
  const [clientData, setClientData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");


  useEffect(() => {
    document.title = "Client Application Status";
  } , [])

  const handleSecurityContinue = () => {
    setStep(2);
    setApiError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSecurityCancel = () => {
    setStep(1);
    setApiError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIdentSubmit = async (formData) => {
    setIsLoading(true);
    setApiError("");

    try {
      const payload = {
        Email: formData.email,
        PassportNumber: formData.identNum,
        identNum: formData.identNum,
      };

      const result = await getAClients(payload);
      setClientData(result);
      setStep(3);
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setApiError(err.message || "Unable to find client status.");
      setIsLoading(false);
      window.scrollTo({ top: 150, behavior: "smooth" });
    }
  };

  const handleBackToSecurity = () => {
    setStep(1);
    setApiError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewSearch = () => {
    setClientData(null);
    setApiError("");
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="client-application-status-page">
      {step === 1 && (
        <SecurityForm
          onContinue={handleSecurityContinue}
          onCancel={handleSecurityCancel}
          onOpenFaq={onOpenFaq}
        />
      )}

      {step === 2 && (
        <IdentificationForm
          onSubmitIdent={handleIdentSubmit}
          onBack={handleBackToSecurity}
          onOpenFaq={onOpenFaq}
          isLoading={isLoading}
          apiError={apiError}
        />
      )}

      {step === 3 && clientData && (
        <ApplicationStatusView
          clientData={clientData}
          onNewSearch={handleNewSearch}
        />
      )}
    </div>
  );
}

export default ClientApplicationStatus;
