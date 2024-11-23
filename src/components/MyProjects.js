import React from "react";
import "./MyProjects.css"; // Pastikan file CSS sudah benar

const MyProjects = () => {
  const projects = [
    {
      name: "Virus Movement ",
      description:
        "Membuat minigames dengan menggunakan Bahasa Pemrograman Java",
      image: require("../assets/virusmovement.jpg"), // Menunjuk ke gambar di folder assets
      type: "programming",
    },
    {
      name: "Game Pasien",
      description:
        "Membuat minigames dengan menggunakan  Bahasa Pemrograman C.",
      image: require("../assets/posterdaspro.png"), // Menunjuk ke gambar di folder assets
      type: "programming",
    },
    {
        name: "Website UMKM",
        description:
          "Membuat desain website menggunakan figma.",
        image: require("../assets/desain website.png"), // Menunjuk ke gambar di folder assets
        type: "design",
      },
      {
        name: "Poster UMKM",
        description:
          "Membuat desain poster menggunakan figma.",
        image: require("../assets/posterwebsite.png"), // Menunjuk ke gambar di folder assets
        type: "poster",
      },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="card shadow-sm project-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    {/* Gambar dengan style border-radius */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="img-fluid rounded-start profile-img" // Gunakan class profile-img untuk styling
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                      <span className="badge bg-primary">{project.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
