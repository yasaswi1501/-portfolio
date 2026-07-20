import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2>Featured Projects</h2>

      {projects.map((category) => (
        <div className="project-category" key={category.category}>
          <h3 className="project-category-title">{category.category}</h3>

          <div className="projects-grid">
            {category.items.map((project) => (
              <article
                className="project-card"
                id={project.id}
                key={project.title}
              >
                {project.image ? (
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.imageAlt || project.title}
                      className="project-image"
                      loading="lazy"
                    />

                    {project.featured && (
                      <span className="featured-badge">Featured Project</span>
                    )}
                  </div>
                ) : (
                  <div className="project-header-banner">
                    {project.featured && (
                      <span className="featured-badge inline-featured">
                        Featured Project
                      </span>
                    )}
                  </div>
                )}

                <div className="project-content">
                  <div className="project-title-group">
                    <h3>{project.title}</h3>
                    {project.subtitle && (
                      <span className="project-subtitle">{project.subtitle}</span>
                    )}
                  </div>

                  <div className="project-description">
                    {project.description.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {(project.myContributions || project.contributions) && (
                    <div className="project-contributions">
                      <h4 className="project-section-subtitle">
                        My Contributions
                      </h4>
                      <div className="project-tags contribution-tags">
                        {(project.myContributions || project.contributions).map(
                          (item, i) => (
                            <span key={i} className="contribution-chip">
                              ✓ {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="project-highlights">
                      <h4 className="project-section-subtitle">
                        Highlights & Architecture
                      </h4>
                      <div className="project-tags">
                        {project.highlights.map((item, i) => (
                          <span key={i} className="highlight-tag">
                            ✦ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="project-tags main-tech-tags">
                    {project.tech.map((tech) => (
                      <span key={`${project.title}-${tech}`}>{tech}</span>
                    ))}
                  </div>

                  {(project.github && project.github !== "#") ||
                  (project.live && project.live !== "#") ? (
                    <div className="project-actions">
                      {project.github && project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn project-btn-primary"
                        >
                          GitHub Repository
                        </a>
                      )}

                      {project.live && project.live !== "#" && (
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