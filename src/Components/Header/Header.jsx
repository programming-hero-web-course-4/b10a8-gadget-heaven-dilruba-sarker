// 

import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Header = ({data }) => {
  const item = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statisctics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-2xl">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {item}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{item}</ul>
      </div>
      <div className="navbar-end flex gap-4 mr-8">
        <div className="p-2 rounded-4xl shadow-2xs bg-amber-50 text-black relative">
          <IoCartOutline />
          {data> 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full px-1">
              {data}
            </span>
          )}
        </div>
        <div className="p-2 rounded-4xl shadow-2xs bg-amber-50 text-black">
          <CiHeart />
        </div>
      </div>
    </div>
  );
};

export default Header;
