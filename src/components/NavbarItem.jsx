import { Link } from "react-router-dom";
import "/src/components/NavbarItem.css";

export default function NavbarItem({ to, label, onClick }) {
  return (
    <li className="Navbar__item">
      <Link
        className="Navbar__link"
        onClick={onClick}
        to={to}
      >
        {label}
      </Link>
      <img
        className="Navbar__item-chevron"
        src="/assets/icon-chevron.svg"
        alt="nav arrow"
      />
    </li>
  );
}
