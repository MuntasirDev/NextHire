import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import {
  FaBriefcase,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt,
  FaTachometerAlt,
  FaPlusCircle,
  FaHome,
  FaSearch,
  FaInfoCircle,
} from "react-icons/fa";
import { nav } from "motion/react-client";

const NavBar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Signed Out User");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = [
    { to: "/", 
      label: "Home",
      icon: <FaHome className="inline-block mr-1"></FaHome> 
    },
    { to: "BrowseJobs", label: "Browse Jobs", icon: <FaSearch className="inline-block mr-1"></FaSearch> },
  ];

  // for applicant links,check roles as well

  if (user) {
    navLinks.push({
      to: "/dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt className="inline-block mr-1" />,
    });
  }

//   for recruiter links,check roles as well

{
    navLinks.push({
      to: "/addJob",
      label: "Add Job",
      icon: <FaPlusCircle className="inline-block mr-1" />,
    });

    navLinks.push(
        {
           to: "/Postedjob",
      label: "My Posted Job",
      icon: <FaBriefcase className="inline-block mr-1" />,
        }
    )

    navLinks.push(
        {
           to: "/aboutus",
      label: "About Us",
      icon: <FaInfoCircle className="inline-block mr-1" />,
        }
    )
}



  const links = (
    <>
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-bold border-b-2 border-violet-600 px-3 py-2 transition duration-200"
                : "text-gray-700 hover:text-violet-600 px-3 py-2 transition duration-200"
            }
          >
            {link.icon} {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-30 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {links}
          </ul>
        </div>

        <NavLink to="/" className="text-2xl font-extrabold text-gray-900 ml-2">
          <FaBriefcase className="inline text-violet-600 mr-2" />
          <span className="text-violet-700">Next</span>
          <span className="text-indigo-600">Hire</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-red-500 hover:bg-red-600 text-white border-none font-semibold transition duration-200"
          >
            <FaSignOutAlt /> Sign Out
          </button>
        ) : (
          <>
            <NavLink
              className="btn btn-ghost text-gray-700 hover:bg-gray-100 hover:text-indigo-600 transition duration-200"
              to="/signin"
            >
              <FaSignInAlt /> Sign In
            </NavLink>

            <NavLink
              className="btn bg-violet-600 hover:bg-violet-700 text-white border-none font-semibold transition duration-200"
              to="/register"
            >
              <FaUserPlus /> Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
