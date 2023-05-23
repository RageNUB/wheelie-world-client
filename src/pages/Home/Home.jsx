import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PhotoGallery from "./PhotoGallery";
import ShopByCategory from "./ShopByCategory";
import ContactUs from "./ContactUs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PopularToys from "./PopularToys";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Wheelie World | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularToys></PopularToys>
      <PhotoGallery></PhotoGallery>
      <div data-aos="fade-up-left">
        <ShopByCategory></ShopByCategory>
      </div>
      <div data-aos="fade-up-right">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
