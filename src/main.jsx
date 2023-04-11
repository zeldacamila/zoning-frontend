import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ids from "./views/Home";
import Form from "./views/Form";
import "antd/dist/reset.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ids />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
