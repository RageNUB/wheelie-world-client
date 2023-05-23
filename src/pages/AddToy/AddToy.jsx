import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const photo = form.photo.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const sub = form.sub.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const myToy = {
      toy_name: toyName,
      img: photo,
      seller_name: sellerName,
      seller_email: email,
      price: parseFloat(price),
      rating: parseFloat(rating),
      sub_category: sub,
      quantity: parseInt(quantity),
      description: details,
    };

    fetch("https://wheelie-world-server.vercel.app/myToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleAlert();
        form.reset();
      });
  };
  const handleAlert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Toy added to your My Toy list",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <form onSubmit={handleAddToy}>
      <Helmet>
        <title>Wheelie World | Add A Toy</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mt-8 ">Add A Toy</h1>
      <div className="grid grid-cols-2 gap-5 mt-6 mb-8">
        <div>
          <label>
            <p className="text-md font-semibold">Picture URL</p>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Picture URL"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Toy Name</p>
          </label>
          <input
            type="text"
            name="toyName"
            placeholder="Toy Name"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Seller Name</p>
          </label>
          <input
            type="text"
            name="sellerName"
            defaultValue={user?.displayName}
            placeholder={user.displayName ? "" : "Seller Name"}
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Seller Email</p>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Seller Email"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Sub-Category</p>
          </label>
          <input
            type="text"
            name="sub"
            placeholder="Sub-Category"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Price</p>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Price-$"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Rating</p>
          </label>
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div>
          <label>
            <p className="text-md font-semibold">Available Quantity</p>
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Available Quantity"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <div className="col-span-2">
          <label>
            <p className="text-md font-semibold">Detail Description</p>
          </label>
          <input
            type="text"
            name="details"
            placeholder="Detail Description"
            className="input input-bordered input-primary w-full"
          />
        </div>
        <input
          className="btn btn-primary text-white btn-block col-span-2"
          type="submit"
          value="Add Toy"
        />
      </div>
    </form>
  );
};

export default AddToy;
