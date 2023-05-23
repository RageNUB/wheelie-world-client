import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(from);
        setError("");
      })
      .catch((error) => {
        console.log("showing error", error);
        setError("Email or Password doesn't match. Please try again...");
      });
  };

  return (
    <div className="hero min-h-screen bg-base-100">
      <Helmet>
        <title>Wheelie World | Login</title>
      </Helmet>
      <div className="hero-content flex-col ">
        <div className="lg:flex items-center">
          <h2 className="text-5xl font-bold">Welcome To </h2>
          <img
            className="w-52 mx-auto"
            src="https://i.ibb.co/BLGz6fz/new-wheelieworld-logo.webp"
            alt=""
          />
        </div>

        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Login now!</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p className="text-error">
                <small>{error}</small>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              <small>
                Already Have an Account?{" "}
                <Link to="/register" className="underline">
                  Please Register
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <div className="rounded-full flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-wide btn-outline text-primary hover:bg-primary hover:border-none mb-2"
              >
                <FaGoogle className="mr-2"></FaGoogle>login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
