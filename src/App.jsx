import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from  "lottie-react";
import Stripes from "./LottieFiles/GIF-4.gif";
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const[Loading,SetLoading]= useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <PacmanLoader
          color={'#ffffffff'}
          loading={true}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
          <img className="bg" src={Stripes} alt="background" />
          <img className="bgtwo" src={Stripes} alt="background" />
          <img className="bgtemp" src={Stripes} alt="background" />

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
