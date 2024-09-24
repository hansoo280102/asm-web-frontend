import React from "react";
import { NavLink } from "react-router-dom";
const navList = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Contact", path: "/contact-us" },
];

export default function Navbar() {
  return (
    <header className="bg-white py-6 border">
      <nav className="container mx-auto flex justify-between px-5">
        <a href="/">
          <img src="/logo.png" alt="" className="h-12" />
        </a>
        <ul className="sm:flex hidden items-center gap-8">
          {navList.map((list, index) => {
            return (
              <li>
                <NavLink
                  to={`${list.path}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {list.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
