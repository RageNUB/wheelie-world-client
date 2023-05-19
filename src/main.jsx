import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import DataProvider from "./providers/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <AuthProvider>
      <DataProvider>
        <React.StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
      </DataProvider>
    </AuthProvider>
  </div>
);
