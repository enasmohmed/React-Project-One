import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";

export default function App() {



  let router = createBrowserRouter([


    {path:"", element:<Layout /> , children:[
      {path:"startFramework", element:<Home />},
      {path:"/about", element:<About />},
      {path:"/portfolio", element:<Portfolio />},
      {path:"/contact", element:<Contact />},      
      {path:"/*", element:<div className="vh-100 bg-info d-flex justify-content-center align-items-center">
        <h1>404 Not Found</h1>
      </div>},      
    ]}

    
  ])


  return <>
    
    <RouterProvider router={router} />

  </>
}



