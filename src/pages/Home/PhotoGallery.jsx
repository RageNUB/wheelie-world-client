import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner";
import Photo from "./Photo";


const PhotoGallery = () => {
  const [product, setProduct] = useState([]);

  if(product.length < 1) {
    <Spinner></Spinner>
  }

  useEffect( ()=> {
    fetch("https://wheelie-world-server.vercel.app/products")
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])


  return (
    <div className="App mt-8 text-center">
      <h2 className="text-4xl font-bold uppercase mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {
        product.map(photo => <Photo
         key={photo._id}
         photo={photo}
        ></Photo>)
      }
      </div>
    </div>
  );
};

export default PhotoGallery;
