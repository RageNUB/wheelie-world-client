import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import Modal from "../pages/Shared/Modal";
import ModalEdit from "../pages/Shared/ModalEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Modal></Modal>
      <ModalEdit></ModalEdit>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Main;
