import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Donors from "./Donors";
import PageNotFound from "./PageNotFound";
import DonorDetails from "./DonorDetails";
import NavBar from "./NavBar";




function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path='/donors/:id' element={<DonorDetails />} />



      </Routes>


    </>
  );
}

export default App;
