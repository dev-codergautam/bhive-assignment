import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SpaceOverview from "./components/SpaceOverview";
import AppDownload from "./components/AppDownload";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from "./components/Footer";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <SpaceOverview />
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
