import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button"
import  NavBar from "./components/Navbar section/NavBar"
import {HeroSection} from "./components/HeroSection/HeroSection"
import Footer from "./components/FooterSection/Footer"
import ArticleSection from "./components/ArticleSection/ArticleSection";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ArticleSection/>
      <Footer />
   
      
    </>
  );
}

export default App;
