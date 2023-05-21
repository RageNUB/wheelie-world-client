import { useContext, useEffect, useState } from "react";
import MyToyTable from "./MyToyTable";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "../Shared/Spinner";
import { Helmet } from "react-helmet-async";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  if(products.length < 1) {
    <Spinner></Spinner>
  }

  const url = `https://wheelie-world-server.vercel.app/myToys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [url]);

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
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
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
