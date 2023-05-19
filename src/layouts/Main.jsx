import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import Modal from "../pages/Shared/Modal";
import ModalEdit from "../pages/Shared/ModalEdit";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Modal></Modal>
            <ModalEdit></ModalEdit>
        </div>
    );
};

export default Main;