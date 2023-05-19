import { useContext } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { DataContext } from "../../providers/DataProvider";

const MyToyTable = ({ product, handleDelete }) => {
  const { handleSingleData } = useContext(DataContext);
  const { _id, toy_name, img, seller_name, price, quantity, sub_category } =
    product;

  return (
    <tr>
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
