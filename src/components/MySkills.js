import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSearch,
  FaLightbulb,
  FaCamera,
  FaClipboardList,
  FaVideo,
  FaPaintBrush,
} from "react-icons/fa"; // Import semua ikon
import "./MySkills.css"; // Import CSS untuk styling

const MySkills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} /> },
    { name: "CSS", icon: <FaCss3Alt size={50} /> },
    { name: "JavaScript", icon: <FaJs size={50} /> },
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Research", icon: <FaSearch size={50} /> },
    { name: "Creativity", icon: <FaLightbulb size={50} /> },
    { name: "Photography", icon: <FaCamera size={50} /> },
    { name: "Content Planning", icon: <FaClipboardList size={50} /> },
    { name: "Videography", icon: <FaVideo size={50} /> },
    { name: "Graphic Design", icon: <FaPaintBrush size={50} /> },
  ];

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <div className="icon-container">{skill.icon}</div>
                  <h5 className="card-title">{skill.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
