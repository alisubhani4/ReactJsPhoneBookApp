import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import CONSTANTS from "../../utils/constants/CONSTANTS";

import "./index.scss";

const SideNav = () => {
  const { pathname } = useLocation();
  const [showDetailView, setShowDetailView] = useState(false);
  const closeNav = () => {
    setShowDetailView(false);
  };
  const openNav = () => {
    setShowDetailView(true);
  };
  const currentPage = pathname.split("/").slice(-1)[0];

  return (
    <>
      <div className="ham-icon">
        <FiMenu className="ham-menu" style={CONSTANTS.EXTRA_BIG_ICON} onClick={openNav} />
      </div>
      {showDetailView ? (
        <div id="mySidenav" className="sidenav">
          <div className="options">
            <Link className={`${currentPage === "/" ? "selected" : ""}  option`} to="/" onClick={closeNav}>
              Home
            </Link>

            <Link className={`${currentPage === "/create" ? "selected" : ""}  option`} to="/create" onClick={closeNav}>
              Create Event
            </Link>

            <Link className={`${currentPage === "/event" ? "selected" : ""}  option`} to="/event" onClick={closeNav}>
              Event
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default SideNav;
