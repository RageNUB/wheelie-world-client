import { useContext } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { DataContext } from "../../providers/DataProvider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MyToyTable = ({ product, handleDelete }) => {
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
              <img src={img} alt={toy_name} />
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
          htmlFor="my-modal-2"
          className="btn btn-ghost btn-sm"
        >
          <FaEdit></FaEdit> <span className="ml-1">edit</span>
        </label>
      </th>
      <th>
        <label
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-sm"
        >
          <FaRegTrashAlt></FaRegTrashAlt> <span className="ml-1">delete</span>
        </label>
      </th>
    </tr>
  );
};

export default MyToyTable;
