import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";
import Spinner from "../Shared/Spinner";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
  const products = useLoaderData();

  if(products.length < 1) {
    <Spinner></Spinner>
  }

  return (
    <div className="mt-5 mb-5">
      <Helmet>
        <title>Wheelie World | All Toys</title>
      </Helmet>
        <h2 className="text-4xl font-bold text-center mb-5 uppercase">All Toys</h2>
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
              <ToyTable key={product._id} product={product}></ToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
