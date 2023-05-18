
const ToyTable = ({product}) => {
    const {toy_name, img, seller_name, price, quantity, sub_category} = product;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{toy_name}</div>
          </div>
        </div>
      </td>
      <td>
        {seller_name}
      </td>
      <td>{sub_category}</td>
      <td>${price}</td>
      <td>{quantity}pcs</td>
      <th>
        <button className="btn btn-ghost btn-sm">details</button>
      </th>
    </tr>
  );
};

export default ToyTable;
