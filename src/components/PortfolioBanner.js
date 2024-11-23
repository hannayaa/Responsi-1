import React from "react";
import "./PortfolioBanner.css";
import BannerImage from "../assets/banner-image.jpg"; // Path ke gambar di folder assets

const PortfolioBanner = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf"; // Path ke file PDF di folder public
    link.download = "Hannayaa_CV.pdf"; // Nama file saat diunduh
    link.click();
  };

  return (
    <section
      className="portfolio-banner"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="profile-section">
        <img
          src={require("../assets/banner-image.jpg")}
          alt="Profile"
          className="profile-img animate-profile"
        />
      </div>
      <h1 className="animate-heading">PORTFOLIO</h1>
      <h2 className="animate-subheading">By Jaehyun's girl</h2>
      <div>
        <button
          className="btn btn-primary animate-button"
          onClick={handleDownload}
        >
          Download CV
        </button>
      </div>
    </section>
  );
};

export default PortfolioBanner;
