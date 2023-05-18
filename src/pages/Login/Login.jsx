import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
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
          <div className="card-body">
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Login</button>
            </div>
            <div className="divider">OR</div>
              <div className="rounded-full flex justify-center">
                <button className="btn btn-wide btn-outline text-primary hover:bg-primary hover:border-none mb-2"><FaGoogle className="mr-2"></FaGoogle>login with Google</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
