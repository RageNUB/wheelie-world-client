import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-emerald-100 px-4 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-toys">All Toys</Link>
            </li>
            <li>
              <Link to="/my-toys">My Toys</Link>
            </li>
            <li>
              <Link to="/add-a-toy">Add A Toy</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-bold text-2xl">
          Wheelie World
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink
                className={({ isActive }) =>
                  isActive ? "active font-bold text-white" : ""
                }
                to="/"
              >
                Home
              </NavLink>
          </li>
          <li>
            <NavLink
                className={({ isActive }) =>
                  isActive ? "active font-bold text-white" : ""
                }
                to="/all-toys"
              >
                All Toys
              </NavLink>
          </li>
          <li>
            <NavLink
                className={({ isActive }) =>
                  isActive ? "active font-bold text-white" : ""
                }
                to="/my-toys"
              >
                My Toys
              </NavLink>
          </li>
          <li>
            <NavLink
                className={({ isActive }) =>
                  isActive ? "active font-bold text-white" : ""
                }
                to="/add-a-toy"
              >
                Add A Toy
              </NavLink>
          </li>
          <li>
            <NavLink
                className={({ isActive }) =>
                  isActive ? "active font-bold text-white" : ""
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {user && (
            <div className=" mr-3 dropdown dropdown-hover dropdown-bottom dropdown-end">
              {user.photoURL ? (
                <img
                  className="rounded-full w-10"
                  tabIndex={0}
                  src={user?.photoURL}
                />
              ) : (
                <FaUserCircle className="text-4xl"></FaUserCircle>
              )}
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="font-semibold text-lg text-primary">
                    {user.displayName ? user.displayName : "User"}
                  </p>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-primary text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          {user ? (
            ""
          ) : (
            <Link to="/login" className="btn btn-primary text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
