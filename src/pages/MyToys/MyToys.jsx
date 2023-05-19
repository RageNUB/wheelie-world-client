import { useContext, useEffect, useState } from "react";
import MyToyTable from "./MyToyTable";
import { AuthContext } from "../../providers/AuthProvider";

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    const url = `http://localhost:5000/myToys?email=${user.email}`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[url])

  return (
    <div className="mt-5 mb-5">
      <h2 className="text-4xl font-bold text-center mb-5 uppercase">
        My Toys
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <MyToyTable key={product._id} product={product}></MyToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
