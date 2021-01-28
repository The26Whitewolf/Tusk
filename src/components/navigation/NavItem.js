import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavItem({ icon, children, to }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link
        to={to || "#"}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {icon}
      </Link>
      {open && children}
    </li>
  );
}

export default NavItem;
