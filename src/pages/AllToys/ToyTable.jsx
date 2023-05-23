import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { AuthContext } from "../../providers/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ToyTable = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { handleSingleData } = useContext(DataContext);
  const { _id, toy_name, img, seller_name, price, quantity, sub_category } =
    product;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <tr
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="1000"
    >
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toy_name}</div>
          </div>
        </div>
      </td>
      <td>{seller_name}</td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{quantity}pcs</td>
      <th>
        <label
          onClick={() => handleSingleData(_id)}
          htmlFor={user ? "my-modal-3" : ""}
          className="btn btn-ghost btn-sm"
        >
          view details
        </label>
      </th>
    </tr>
  );
};

export default ToyTable;
