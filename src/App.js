import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rajasthan from "./Rajasthan/Rajasthan.jsx";
import Home from "./Project/Home.jsx";
import Layout from "./Project/Layout.jsx";
import Gujrat from "./Gujrat/Gujrat.jsx";
import MadhyaPradesh from "./MadhyaPradesh/MadhyaPradesh.jsx";
import Maharashtra from "./Maharashtra/Maharashtra.jsx";
import Daman from "./Daman&Diu/Daman.jsx";
import Goa from "./Goa/Goa.jsx";
import Keral from "./Kerala/Keral.jsx";
import Karnataka from "./Karnataka/Karnataka.jsx"
import AndhraPradesh from "./AndhraPradesh/AndhraPradesh.jsx";
import Meghalaya from "./Meghalaya/Meghalaya.jsx";
import Up from "./Up/Up.jsx";

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
      },
      {
        path:'/mp',
        element:<MadhyaPradesh/>
      },
      {
        path:'/maharashtra',
        element:<Maharashtra/>
      },
      {
        path:'/daman',
        element:<Daman/>
      },
 {
        path:'/goa',
        element:<Goa/>
      },
      {
        path:'/keral',
        element:<Keral/>
      },
      {
        path:'/karnataka',
        element:<Karnataka/>
      },
      {
        path:'/andhra',
        element:<AndhraPradesh/>
      },
      {
        path:'/meghalaya',
        element:<Meghalaya/>
      },
      {
        path:'/up',
        element:<Up/>
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
