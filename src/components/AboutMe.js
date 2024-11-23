import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./AboutMe.css";
import profileImage from "../assets/profile.jpg"; // Path sesuai lokasi file gambar

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <div className="profile-picture">
            <img
               src={profileImage}
               alt="Profile"
               className="rounded-image"
               style={{
                 width: "200px",
                 height: "300px",
                 objectFit: "cover",
                 borderRadius: "0 0 50px 50px",
               }}
             />
          </div>
          <div className="profile-details">
            <h3>Hanna Hasanah</h3>
            <p className="text-muted">Jaehyun's girl</p>
            <div className="contact-details">
              <p>
                <a
                  href="https://wa.me/081392617408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  081392617408
                </a>
              </p>
              <p>
                <a
                  href="hannahasanah93@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  hannahasanah93@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.chttps://mahttps://maps.app.goo.gl/bNfK5tPQ9nWESEQh7ps.app.goo.gl/jaXEorFCWUcHWC1z6om/maps?q=Lac+Long+Quan+street,+ward+5,+district+11,+HCM+city"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  689M+6J4, Jl. Cokrowijayan, Cokrowijayan, Banyuraden, Kec. Gamping, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55293
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/han_naayaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                  han_naayaa
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
