import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav >
    <div className="navbar">
      <div className="logo">
        <a href="/">KALLOS</a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div className="navbar-search"></div>
      </ul>
      <div className="book-button">
        <a href="/book">Book Now</a>
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
