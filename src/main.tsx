import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Layout from "./Layout";
import AddKaryawan from "./pages/AddKaryawan";
import "react-datepicker/dist/react-datepicker.css";

import "react-toastify/dist/ReactToastify.css";
import EditKaryawan from "./pages/EditKaryawan";
import About from "./pages/About";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/addkaryawan",
    element: (
      <Layout>
        <AddKaryawan />
      </Layout>
    ),
  },
  {
    path: "/editkaryawan/:id",
    element: (
      <Layout>
        <EditKaryawan />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
