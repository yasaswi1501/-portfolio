import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>

      <div className="grid">
        {projects.map((project, index) => (
          <article
            className="card"
            key={project.title || index}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tags">
              {project.tech.map((tech) => (
                <span key={`${project.title}-${tech}`}>
                  {tech}
                </span>
              ))}
            </div>

            {(project.github && project.github !== "#") ||
            (project.live && project.live !== "#") ? (
              <div className="links">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;