import React from "react";
import styles from "./Experience.module.css";
import skills from "../../Data/Skill.json";
import cPlusImage from "../../Assets/Skill/c+.png";
import CImage from "../../Assets/Skill/csharp.png";
import unityImage from "../../Assets/Skill/unity_logo.png"


const getImage = (imageSrc) => {
  switch (imageSrc) {
    case "Skill/csharp.png":
      return CImage;
    case "Skill/c+.png":
      return cPlusImage
    case "Skill/unity_logo.png":
      return unityImage;
    default:
      return null;
  }
};

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        My <span>Skills</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {/* Renderização dos botões de imagem */}
          {skills.map((skill, skillId) => (
            <div key={skillId} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImage(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
