import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";

export const DataContext = createContext([]);

const DataProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);

  const handleSingleData = (id) => {
    if (!user) {
      toast.warning("You have to log in first to view details");
    } else {
      fetch(`https://wheelie-world-server.vercel.app/products/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  const dataInfo = {
    data,
    handleSingleData,
  };
  return (
    <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
