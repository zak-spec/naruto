import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { Link } from "react-router-dom";

const pillTabs = [
  { text: "Inicio", path: "/" },
  { text: "personajes favoritas", path: "/Favorites" },
  { text: "Acerca de", path: "/Acerca" }
];

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const tabsComponents = pillTabs.map((tab, i) => {
    return (
      <Link to={tab.path} key={`tab-${tab.text}`} className="link-no-decoration">
        <button
          key={tab.text}
          onMouseEnter={() => setHoveredIndex(i)}
          style={{
            position: "relative",
            padding: "0.65rem 0.75rem",
            backgroundColor: "black",
            color: "white",
            border: 0,
            borderRadius: "999px"
          }}
        >
          {hoveredIndex === i && (
            <MagicTabSelect
              id="pillTabs"
              transition={{ type: "spring", bounce: 0.35 }}
            >
              <span
                style={{
                  borderRadius: "999px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 10,
                  backgroundColor: "white",
                  mixBlendMode: "difference"
                }}
              />
            </MagicTabSelect>
          )}
          {tab.text} {/* Aquí se usa tab.text en lugar de text */}
        </button>
      </Link>
    );
  });

  return (
    <div className="d-flex flex-row mb-3" style={{ display: "flex", gap: "80px", margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
}

export default NavBar;