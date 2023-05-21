import ToyTable from "./ToyTable";
import Spinner from "../Shared/Spinner";
import { Helmet } from "react-helmet-async";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/products?sort=${sort}&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [sort, currentPage]);

  if (products.length < 1) {
    <Spinner></Spinner>;
  }

  return (
    <div className="mt-5 mb-5">
      <Helmet>
        <title>Wheelie World | All Toys</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center mb-5 uppercase">
        All Toys
      </h2>
      <div className="dropdown dropdown-bottom flex justify-end">
        <label tabIndex={0} className="btn btn-secondary m-1">
          <span className="pr-2">Sort By</span> <FaAngleDown></FaAngleDown>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={() => setSort(1)}>Ascending Price</a>
          </li>
          <li>
            <a onClick={() => setSort(0)}>Descending Price</a>
          </li>
        </ul>
      </div>
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
        <div className="text-center">
        <div className="btn-group">
          <button onClick={() => setCurrentPage(1)} className={currentPage == 1 ? "btn btn-active" : "btn btn-secondary"}>1</button>
          <button onClick={() => setCurrentPage(2)} className={currentPage == 2 ? "btn btn-active" : "btn btn-secondary"}>2</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
