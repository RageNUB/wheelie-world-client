import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { AuthContext } from "../../providers/AuthProvider";

const ToyCard = ({ toy }) => {
    const {user} = useContext(AuthContext)
  const { handleSingleData } = useContext(DataContext);
  const { _id, img, toy_name, price, rating } = toy;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-52 rounded-lg mt-4" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toy_name}</h2>
        <div className="text-start mt-3">
          <p className="text-lg">
            Price: $<span className="font-semibold">{price}</span>
          </p>
          <div className="flex items-center">
            Rating:{" "}
            <span className="text-sm font-semibold ml-1 mr-2">{rating}</span>
            <Rating style={{ maxWidth: 130 }} value={rating} readOnly></Rating>
          </div>
        </div>
        <div className="card-actions mt-4">
          <label
            onClick={() => handleSingleData(_id)}
            htmlFor={user ? "my-modal-3" : ""}
            className="btn btn-primary btn-block text-white"
          >
            View Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
