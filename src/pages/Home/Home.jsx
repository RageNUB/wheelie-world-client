import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PhotoGallery from "./PhotoGallery";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Wheelie World | Home</title>
            </Helmet>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;