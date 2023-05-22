import ToyTable from "./ToyTable";
import Spinner from "../Shared/Spinner";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const page = Math.ceil(loadedProducts.length / 20);
  const pageNumbers = [...Array(page).keys()];
  const [search, setSearch] = useState("");
  const searchArea = useRef(null)

  useEffect(() => {
    fetch(
      `https://wheelie-world-server.vercel.app/products?page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage]);

  if (products.length < 1) {
    <Spinner></Spinner>;
  }

  const handleSearch = () => {
    setSearch(searchArea.current.value);
    fetch(`https://wheelie-world-server.vercel.app/product?search=${search}`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }

  return (
    <div className="mt-5 mb-5">
      <Helmet>
        <title>Wheelie World | All Toys</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center mb-5 uppercase">
        All Toys
      </h2>

      <div className="flex justify-end mb-4">
        <div className="form-control">
          <div className="input-group">
            <input
              ref={searchArea}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
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
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page + 1)}
                className={
                  currentPage === page + 1
                    ? "btn btn-active"
                    : "btn btn-secondary"
                }
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
