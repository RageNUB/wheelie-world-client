import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import Spinner from "../Shared/Spinner";

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
  
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App mt-8 text-center">
      <h2 className="text-4xl font-bold uppercase mb-6">Gallery</h2>
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
        {
          product.map(pd => <Photo
           key={pd._id}
          >{pd.img}</Photo>)
        }
      </LightGallery>
    </div>
  );
};

export default PhotoGallery;
