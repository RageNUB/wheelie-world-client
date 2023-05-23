import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  const url = `https://wheelie-world-server.vercel.app/all-products`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold text-center mb-8">Popular Toys</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {toys.map((toy) => (
            <SwiperSlide className="mx-72 lg:mx-20" key={toy._id}>
              <ToyCard toy={toy}></ToyCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default PopularToys;
