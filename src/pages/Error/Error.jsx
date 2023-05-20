import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          src="https://i.ibb.co/t4BVMTR/error.png"
          alt=""
        />
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-primary btn-wide text-white mb-5">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
