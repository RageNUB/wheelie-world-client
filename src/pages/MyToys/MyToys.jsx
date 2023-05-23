import { useContext, useEffect, useState } from "react";
import MyToyTable from "./MyToyTable";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "../Shared/Spinner";
import { Helmet } from "react-helmet-async";
import { FaAngleDown } from "react-icons/fa";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(1);

  if (products.length < 1) {
    <Spinner></Spinner>;
  }

  useEffect(() => {
    fetch(
      `https://wheelie-world-server.vercel.app/myToys?email=${user.email}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user, sort]);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-error ml-4 text-white",
        cancelButton: "btn btn-success",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://wheelie-world-server.vercel.app/myToys/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              const remaining = products.filter(
                (product) => product._id !== id
              );
              setProducts(remaining);
            });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Cancelled Successfully",
            "error"
          );
        }
      });
  };

  return (
    <div className="mt-5 mb-5">
      <Helmet>
        <title>Wheelie World | My Toys</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center mb-5 uppercase">My Toys</h2>
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
              <th>Edit Item</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <MyToyTable
                key={product._id}
                product={product}
                handleDelete={handleDelete}
              ></MyToyTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
