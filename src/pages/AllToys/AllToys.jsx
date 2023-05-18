import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";

const AllToys = () => {
    const products = useLoaderData();

  return (
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
          {
            products.map(product => <ToyTable
             key={product._id}
             product={product}
            ></ToyTable>)
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
