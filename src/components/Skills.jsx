import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section className="section">
      <h2>Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h3>{category.toUpperCase()}</h3>

          <div className="tags">
            {items.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;