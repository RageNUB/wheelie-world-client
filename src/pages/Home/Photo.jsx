import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Photo = ({ photo }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { img } = photo;
  return (
    <div
      data-aos="zoom-in"
      className="border-2 p-3 rounded-lg bg-secondary flex justify-center items-center"
    >
      <img className="w-72 rounded-lg" src={img} alt="" />
    </div>
  );
};

export default Photo;
