import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/CareerHub.png";
import MainBtn from "../mainBtn/MainBtn";

const Header = () => {
  const navs = [
    { path: "/statistics", name: "Statistics" },
    { path: "/applied-jobs", name: "Applied Jobs" },
    { path: "/blogs", name: "Blogs" },
  ];

  const navLinks = () => {
    return navs.map((nav, idx) => (
      <li key={idx}>
        <NavLink className={"font-semibold"} to={nav?.path}>
          {nav?.name}
        </NavLink>
      </li>
    ));
  };
  return (
    <div>
      <div className="navbar bg-base-100 w-11/12 md:w-10/12 mx-auto">
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
              {navLinks()}
            </ul>
          </div>
          <Link to={"/"}>
            <img className="w-[100px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks()}</ul>
        </div>
        <div className="navbar-end">
          <MainBtn name="start applying" />
        </div>
      </div>
    </div>
  );
};

export default Header;
