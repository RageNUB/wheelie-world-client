import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useEffect, useState } from "react";
import Photo from "./Photo";

const PhotoGallery = () => {
  const [product, setProduct] = useState([]);

  useEffect( ()=> {
    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])
  console.log(product)
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
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
