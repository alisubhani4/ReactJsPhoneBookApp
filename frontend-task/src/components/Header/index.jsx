import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./index.scss";

const Header = () => {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/").slice(-1)[0];
  return (
    <div className="header-container">
      <div className="header">
        <div className="options">
          <Link className={`${currentPage === "/" ? "selected" : ""} option`} to="/">
            Home
          </Link>

          <Link className={`${currentPage === "/create" ? "selected" : ""} option`} to="/create">
            Create Event
          </Link>

          <Link className={`${currentPage === "/event" ? "selected" : ""} option`} to="/event">
            Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
