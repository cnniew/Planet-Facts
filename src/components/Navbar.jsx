import { useState } from "react";
import NavbarItem from "./NavbarItem";
import "/src/components/Navbar.css";
import links from "/src/data/planetLinks.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const hideNavbar = () => {
    setOpen(false);
  };

  const showHideNavbar = () => {
    return open ? "show" : "hide";
  };

  return (
    <nav className="Navbar">
      <h1 className="Navbar__title">THE PLANETS</h1>

      <button onClick={toggleNavbar}>
        <img
          className="Navbar__hamburger"
          src="/assets/icon-hamburger.svg"
          alt="navbar menu"
        />
      </button>

      <ul className={`Navbar__list ${showHideNavbar()}`}>
        {links.map((link, i) => (
          <NavbarItem
            key={i}
            {...link}
            onClick={hideNavbar}
          />
        ))}
      </ul>
    </nav>
  );
}
