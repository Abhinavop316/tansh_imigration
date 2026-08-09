import React, { useState } from "react";
import "../../styles/header/NavigationMenu.css";

const menuItems = [
  "Jobs and the workplace",
  "Immigration and citizenship",
  "Travel and tourism",
  "Business and industry",
  "Benefits",
  "Health",
  "Taxes",
  "Environment and natural resources",
  "National security and defence",
  "Culture, history and sport",
  "Policing, transport and infrastructure",
  "Canada and the world",
  "Money and finances",
  "Science and innovation",
];

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation-menu">
      <div className="navigation-menu__inner">
        <div className="navigation-menu__bar">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="navigation-menu__toggle"
            aria-expanded={isOpen}
          >
            <span>MENU</span>
            <svg
              className={`navigation-menu__toggle-icon ${isOpen ? "navigation-menu__toggle-icon--open" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="navigation-menu__dropdown">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                }}
                className="navigation-menu__item"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavigationMenu;
