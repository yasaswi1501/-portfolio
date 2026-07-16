import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2>Featured Projects</h2>

      {projects.map((category) => (
        <div className="project-category" key={category.category}>
          <h3 className="project-category-title">
            {category.category}
          </h3>

          <div className="projects-grid">
            {category.items.map((project) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="project-image"
                    loading="lazy"
                  />

                  {project.featured && (
                    <span className="featured-badge">
                      Featured Project
                    </span>
                  )}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <span key={`${project.title}-${tech}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.github && project.github !== "#") ||
                  (project.live && project.live !== "#") ? (
                    <div className="project-actions">
                      {project.github &&
                        project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn project-btn-primary"
                          >
                            GitHub Repository
                          </a>
                        )}

                      {project.live &&
                        project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn project-btn-secondary"
                          >
                            Live Demo
                          </a>
                        )}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;