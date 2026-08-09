import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Head from "./components/Head";
import Breadcrumbs from "./components/Breadcrumbs";
import ClientApplicationStatus from "./pages/ClientApplicationStatus";
import ReportProblem from "./components/ReportProblem";
import FaqModal from "./components/FaqModal";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const handleSearchSubmit = (query) => {
    if (!query) return;
    alert(`Searching IRCC for: "${query}"`);
  };

  return (
    <div className="app-shell">
      <Head
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      <Breadcrumbs />

      <main className="app-shell__main" role="main">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/client-application-status" replace />}
          />
          <Route
            path="/client-application-status"
            element={
              <ClientApplicationStatus onOpenFaq={() => setIsFaqOpen(true)} />
            }
          />
          <Route
            path="*"
            element={<Navigate to="/client-application-status" replace />}
          />
        </Routes>

        <ReportProblem />
      </main>

      {isFaqOpen && (
        <FaqModal onClose={() => setIsFaqOpen(false)} />
      )}

      <Footer />
    </div>
  );
}

export default App;
