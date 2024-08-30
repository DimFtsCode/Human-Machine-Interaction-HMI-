import React from "react";
import logo from "./images/new_logo_fully_transparent.png";
import "./Header.css";
import { NavLink ,  Outlet} from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Header({ currentPage }) {
  console.log("Current Page:", currentPage);
  return (
    <div className="App">
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      
      <nav>
        {(currentPage === null)                                                                                                                                                                                                                                  && (
          <>
            <NavLink to="/">Αρχική</NavLink>
            <NavLink to="/sections">Τμήματα</NavLink>
            <NavLink to="/register">Εγγραφή</NavLink>
            <NavLink to="/login" className="login">
              Είσοδος
            </NavLink>
            {/* <NavLink to="/certificate">Πιστοποιητικά</NavLink> */}
          </>
        )}
        {(currentPage === "student-page") && (
          <>
             <NavLink to="/report">Δηλώσεις</NavLink>
             <NavLink to="/grades">Βαθμολογία</NavLink>
             <NavLink to="/student-page/certificate">Πιστοποιητικά</NavLink>
             <NavLink to="/help">Βοήθεια</NavLink>
          </>
        )}
      </nav>
    </header>

      <main>
          <Outlet/>
      </main>

      </div>

  );
}