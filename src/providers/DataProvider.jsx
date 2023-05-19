import { createContext, useState } from "react";

export const DataContext = createContext([]);

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const handleSingleData = id => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
    }
    
    const dataInfo = {
        data,
        handleSingleData,
    }
    return (
        <DataContext.Provider value={dataInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;