import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tags">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="links">
              <a href={project.github}>GitHub</a>
              <a href={project.live}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;