import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full rounded-lg">
        <img
          src="https://img.freepik.com/premium-photo/yellow-school-bus-toy-model-country-roadback-school-concept-background_154224-2093.jpg?w=1380"
          className="w-full rounded-lg"
        />
        <div className="absolute rounded-lg flex items-center bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,212,255,0)] left-0 bottom-0 top-0 right-0">
          <div className="ml-5 space-y-5">
            <h1 className="lg:text-6xl text-2xl font-bold text-base-100">
              Drive into adventure <br /> with our high-quality <br /> car toys!
            </h1>
            <p className="text-white text-xl">
              If you are looking for a toy shop then look no further. Go on,
              treat the kids with our huge collection of car toys.
            </p>
            <button className="btn btn-primary text-white"><FaShoppingCart></FaShoppingCart> <span className="ml-2">Buy Now</span></button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 left-5 bottom-3.5">
          <a href="#slide4" className="btn btn-circle btn-primary">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide2" className="btn btn-circle ml-3 btn-primary">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-lg">
        <img
          src="https://img.freepik.com/premium-photo/top-view-cars-miniature-toy-model-accident-street-insurance-concept_154224-158.jpg?w=1380"
          className="w-full rounded-lg"
        />
        <div className="absolute rounded-lg flex items-center bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,212,255,0)] left-0 bottom-0 top-0 right-0">
          <div className="ml-5 space-y-5">
            <h1 className="lg:text-6xl text-2xl font-bold text-base-100">
              Drive into adventure <br /> with our high-quality <br /> car toys!
            </h1>
            <p className="text-white text-xl">
              If you are looking for a toy shop then look no further. Go on,
              treat the kids with our huge collection of car toys.
            </p>
            <button className="btn btn-primary text-white"><FaShoppingCart></FaShoppingCart> <span className="ml-2">Buy Now</span></button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-3.5">
          <a href="#slide1" className="btn btn-circle btn-primary">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide3" className="btn btn-circle ml-3 btn-primary">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-lg">
        <img
          src="https://img.freepik.com/free-vector/when-game-start-player-can-select-racing-car-game-library-june-up-performance-racing-car_1150-47250.jpg?w=1380&t=st=1684430389~exp=1684430989~hmac=262ba78cada9e708cd56fc03c843d6cae2e41c6cd0a885a69017d4b477f7dcbb"
          className="w-full rounded-lg"
        />
        <div className="absolute rounded-lg flex items-center bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,212,255,0)] left-0 bottom-0 top-0 right-0">
          <div className="ml-5 space-y-5">
            <h1 className="lg:text-6xl text-2xl font-bold text-base-100">
              Drive into adventure <br /> with our high-quality <br /> car toys!
            </h1>
            <p className="text-white text-xl">
              If you are looking for a toy shop then look no further. Go on,
              treat the kids with our huge collection of car toys.
            </p>
            <button className="btn btn-primary text-white"><FaShoppingCart></FaShoppingCart> <span className="ml-2">Buy Now</span></button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-3.5">
          <a href="#slide2" className="btn btn-circle btn-primary">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide4" className="btn btn-circle ml-3 btn-primary">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full rounded-lg">
        <img
          src="https://img.freepik.com/premium-photo/business-images-travel-planning_250469-13082.jpg?w=1380"
          className="w-full rounded-lg"
        /><div className="absolute rounded-lg flex items-center bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,212,255,0)] left-0 bottom-0 top-0 right-0">
        <div className="ml-5 space-y-5">
          <h1 className="lg:text-6xl text-2xl font-bold text-base-100">
            Drive into adventure <br /> with our high-quality <br /> car toys!
          </h1>
          <p className="text-white text-xl">
            If you are looking for a toy shop then look no further. Go on,
            treat the kids with our huge collection of car toys.
          </p>
          <button className="btn btn-primary text-white"><FaShoppingCart></FaShoppingCart> <span className="ml-2">Buy Now</span></button>
        </div>
      </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-3.5">
          <a href="#slide3" className="btn btn-circle btn-primary">
            <FaArrowLeft></FaArrowLeft>
          </a>
          <a href="#slide1" className="btn btn-circle ml-3 btn-primary">
            <FaArrowRight></FaArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
