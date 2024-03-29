import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Spinner from "./Spinner";

const Modal = () => {
  const { data } = useContext(DataContext);
  const {
    toy_name,
    img,
    seller_name,
    seller_email,
    price,
    quantity,
    rating,
    description,
  } = data;

  if (!data) {
    <Spinner></Spinner>;
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="lg:flex items-center">
            <div>
              <figure>
                <img
                  className="w-full rounded-xl max-w-md"
                  src={img}
                  alt="Movie"
                />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title">{toy_name}</h2>
              <p>
                <span>{description}</span>
              </p>
              <p>
                Seller: <span className="text-md font-bold">{seller_name}</span>
              </p>
              <p>
                Email:{" "}
                <span className="text-sm font-semibold">{seller_email}</span>
              </p>
              <p>
                Price: <span className="text-sm font-semibold">${price}</span>
              </p>
              <p>
                Available Quantity:{" "}
                <span className="text-sm font-semibold">{quantity}</span>
              </p>
              <div className="flex items-center">
                Rating:{" "}
                <span className="text-sm font-semibold ml-1 mr-2">
                  {rating}
                </span>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={rating}
                  readOnly
                ></Rating>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
