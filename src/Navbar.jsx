import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSidebar, openModal, closeModal } = useGlobalContext();
  //function

  const displayModal = (e) => {
    // console.log(e.target);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();

    const center = (tempBtn.left + tempBtn.right) / 2; //get centter
    const bottom = tempBtn.bottom - 3;

    openModal(page, { center, bottom });
  };
  //function two
  const handleMenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeModal();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav/logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displayModal}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayModal}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayModal}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
