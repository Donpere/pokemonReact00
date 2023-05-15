import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* nav-active (className situee dans _navigation.scss) est appele grace a "?" (une ternaire)
par une fonction flechee "nav.isActive" si oui il call "nav-active" sinon il appelle rien "" */}
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>a propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
