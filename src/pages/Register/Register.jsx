import { Link } from "react-router-dom";

const Register = () => {
  return (
      <div className="hero min-h-screen bg-base-100 mb-5">
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
            <form className="card-body" >
            <div className="text-center">
            <h1 className="text-3xl font-bold">Please Register!</h1>
          </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password2"
                  required
                  className="input input-bordered"
                />
                <p className="text-error">
                  <small>{}</small>
                </p>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    
                    type="checkbox"
                    name="accept"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">
                    Accept Terms and Conditions
                  </span>
                </label>
              </div>
              <div className="form-control mt-4">
                <button  className="btn btn-primary">
                  Register
                </button>
              </div>
              <p>
                <small>
                  Already Have an Account?{" "}
                  <Link to="/login" className="underline">
                    Please login
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Register;
