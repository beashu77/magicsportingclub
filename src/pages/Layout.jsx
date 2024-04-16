import React from 'react'
import Home from "./Home";
import Batches from "./Batches";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import SummerCamp from "./SummerCamp";
import { Route,Routes } from 'react-router-dom';
import Tournaments from './Tournaments';
const NotFound = () => <h2>Page not found</h2>;

const Layout = () => {
  return (
    <div>
      <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/batches" element={<Batches/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/summercamp" element={<SummerCamp/>}/>
          <Route path="/tournaments" element={<Tournaments/>}/>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Layout