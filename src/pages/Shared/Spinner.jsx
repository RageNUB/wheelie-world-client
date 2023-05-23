import { ThreeCircles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center mt-14 mb-14">
      <ThreeCircles
        height="100"
        width="100"
        color="#2cf79f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Spinner;
