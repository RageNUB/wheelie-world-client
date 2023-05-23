import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>Wheelie World | 404</title>
      </Helmet>
      <div>
        <img
          src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
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
