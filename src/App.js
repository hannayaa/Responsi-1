import React from "react";
import Header from './components/Header';
import PortfolioBanner from './components/PortfolioBanner';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Crud from './components/Crud';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <PortfolioBanner /> {/* Bagian Baru */}
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Crud />
      <Footer />
    </div>
  );
}

export default App;
