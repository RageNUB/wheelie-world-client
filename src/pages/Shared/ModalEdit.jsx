import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import Swal from "sweetalert2";

const ModalEdit = () => {
  const { data } = useContext(DataContext);
  const {
    _id,
    toy_name,
    img,
    seller_name,
    seller_email,
    price,
    quantity,
    sub_category,
    rating,
    description,
  } = data;

  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const toy = {photo, price, quantity, details}
    console.log(toy, _id)

    fetch(`https://wheelie-world-server.vercel.app/myToys/${_id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Toy Details has been updated',
            showConfirmButton: false,
            timer: 1500
          })
    })

  }
  return (
    <div>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl relative">
          <label
            htmlFor="my-modal-2"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleUpdate}>
            <h1 className="text-4xl font-bold text-center mt-2 ">Edit Details</h1>
            <div className="grid grid-cols-2 gap-5 mt-2 mb-3">
              <div>
                <label>
                  <p className="text-md font-semibold">Picture URL</p>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={img}
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
                  defaultValue={toy_name}
                  placeholder="Toy Name"
                  className="input input-bordered input-primary w-full"
                  disabled
                />
              </div>
              <div>
                <label>
                  <p className="text-md font-semibold">Seller Name</p>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={seller_name}
                  placeholder="Seller Name"
                  className="input input-bordered input-primary w-full"
                  disabled
                />
              </div>
              <div>
                <label>
                  <p className="text-md font-semibold">Seller Email</p>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={seller_email}
                  placeholder="Seller Email"
                  className="input input-bordered input-primary w-full"
                  disabled
                />
              </div>
              <div>
                <label>
                  <p className="text-md font-semibold">Sub-Category</p>
                </label>
                <input
                  type="text"
                  name="sub"
                  defaultValue={sub_category}
                  placeholder="Sub-Category"
                  className="input input-bordered input-primary w-full"
                  disabled
                />
              </div>
              <div>
                <label>
                  <p className="text-md font-semibold">Price</p>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
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
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input input-bordered input-primary w-full"
                  disabled
                />
              </div>
              <div>
                <label>
                  <p className="text-md font-semibold">Available Quantity</p>
                </label>
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
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
                  defaultValue={description}
                  placeholder="Detail Description"
                  className="input input-bordered input-primary w-full"
                />
              </div>
              <label className="col-span-2" htmlFor="my-modal-2">
              <input
                className="btn btn-primary text-white btn-block"
                type="submit"
                value="Update Details"
              />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
