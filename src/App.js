import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rajasthan from "./Rajasthan/Rajasthan.jsx";
import Home from "./Project/Home.jsx";
import Layout from "./Project/Layout.jsx";
import Gujrat from "./Gujrat/Gujrat.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/rajasthan',
        element: <Rajasthan />
      },
      {
        path:'/gujrat',
        element:<Gujrat/>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
