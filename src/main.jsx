import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import DataProvider from "./providers/DataProvider";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <AuthProvider>
      <HelmetProvider>
        <DataProvider>
          <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
          </React.StrictMode>
        </DataProvider>
      </HelmetProvider>
    </AuthProvider>
  </div>
);
