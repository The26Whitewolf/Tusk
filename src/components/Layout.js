import React, { useContext } from "react";
import Navbar from "./navigation/Navbar";
import NavItem from "./navigation/NavItem";
import Header from "./Header";
import FirebaseContext from "../contexts/FirebaseContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { FiLogOut, FiPlus, FiGrid } from "react-icons/fi";

function Layout({ children, title }) {
  const { auth } = useContext(FirebaseContext);
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();

  const pageItem =
    pathname === "/" ? (
      <NavItem icon={<FiPlus />} to="/add" />
    ) : (
      <NavItem icon={<FiGrid />} to="/" />
    );

  return (
    <>
      <Navbar>
        {user && (
          <>
            {pageItem}
            <NavItem icon={<FiLogOut />} to="/sign-out" />
          </>
        )}
      </Navbar>
      <Header title={title} />
      {children}
    </>
  );
}

export default Layout;
