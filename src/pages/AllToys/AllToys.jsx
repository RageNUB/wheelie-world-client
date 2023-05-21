import ToyTable from "./ToyTable";
import Spinner from "../Shared/Spinner";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage]);

  if (products.length < 1) {
    <Spinner></Spinner>;
  }

  // useEffect(() => {

  // },[])
  const handleFilter = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setData(data));
    if (search !== "") {
      const filteredData = data.filter((toy) => toy.toy_name == search);
      setProducts(filteredData);
    } else {
      fetch(`http://localhost:5000/products?&page=${currentPage}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  };

  return (
    <div className="mt-5 mb-5">
      <Helmet>
        <title>Wheelie World | All Toys</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center mb-5 uppercase">
        All Toys
      </h2>
      <div className="flex justify-end">
      <form className=" mb-5 mt-5 btn-group" onSubmit={handleFilter}>
        <input
          type="text"
          placeholder="Search By Name"
          name="search"
          className="input input-bordered w-full max-w-xs"
        />
        <input className="btn btn-primary" type="submit" value="Search" />
      </form>
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
            <button
              onClick={() => setCurrentPage(1)}
              className={
                currentPage == 1 ? "btn btn-active" : "btn btn-secondary"
              }
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={
                currentPage == 2 ? "btn btn-active" : "btn btn-secondary"
              }
            >
              2
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={
                currentPage == 3 ? "btn btn-active" : "btn btn-secondary"
              }
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
