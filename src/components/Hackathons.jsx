import { useState } from "react";
import { hackathons } from "../data/portfolioData";

const HackathonCard = ({ hackathon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showMobileHighlights, setShowMobileHighlights] = useState(false);

  const handleCardClick = (e) => {
    // Don't flip card if clicking on action buttons/links
    if (e.target.closest("a") || e.target.closest("button")) {
      return;
    }
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target.tagName.toLowerCase() === "a") return;
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  const toggleMobileHighlights = (e) => {
    e.stopPropagation();
    setShowMobileHighlights((prev) => !prev);
  };

  const handleViewProject = (e, projectId) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const primaryHeading = hackathon.project || hackathon.title;
  const modifierClass = hackathon.projectId
    ? `hackathon-flip-card--${hackathon.projectId.replace("-project", "")}`
    : "";

  return (
    <article className={`hackathon-card-wrapper ${modifierClass}`}>
      <div
        className={`hackathon-flip-container ${isFlipped ? "flipped" : ""} ${modifierClass}`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={`${primaryHeading} hackathon details`}
      >
        <div className="hackathon-card-inner">
          {/* FRONT FACE */}
          <div className="hackathon-card-face hackathon-card-front">
            <div className="hackathon-card-header">
              <div className="hackathon-title-group">
                <span className="hackathon-event-context">
                  {hackathon.title}
                </span>
                <h3>{primaryHeading}</h3>
              </div>
              <span className="flip-hint-badge" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                Hover for Highlights
              </span>
            </div>

            <div className="hackathon-meta">
              <div className="meta-item">
                <span className="meta-label">Organizer</span>
                <span className="meta-value">{hackathon.organizer}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Role</span>
                <span className="meta-value">{hackathon.role}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{hackathon.duration}</span>
              </div>
            </div>

            <div className="hackathon-description-wrapper">
              <div className="hackathon-description">
                {hackathon.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {hackathon.tech && hackathon.tech.length > 0 && (
              <div className="hackathon-tech-stack">
                <span className="tech-stack-label">Technology Stack</span>
                <div className="project-tags">
                  {hackathon.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="hackathon-card-actions">
              <a
                href={hackathon.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
                tabIndex={isFlipped ? -1 : 0}
                onClick={(e) => e.stopPropagation()}
              >
                View Certificate
              </a>

              {hackathon.projectId && (
                <a
                  href={`#${hackathon.projectId}`}
                  className="project-btn project-btn-secondary"
                  tabIndex={isFlipped ? -1 : 0}
                  onClick={(e) => handleViewProject(e, hackathon.projectId)}
                >
                  View Project
                </a>
              )}

              <button
                type="button"
                className="mobile-highlights-toggle"
                onClick={toggleMobileHighlights}
                aria-expanded={showMobileHighlights}
              >
                {showMobileHighlights ? "Hide Highlights" : "View Highlights"}
              </button>
            </div>
          </div>

          {/* BACK FACE */}
          <div className="hackathon-card-face hackathon-card-back">
            <div className="back-content-header">
              <h3>Hackathon Highlights</h3>
              <span className="back-subtitle">{primaryHeading}</span>
            </div>

            <div className="highlights-grid">
              {hackathon.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-chip">
                  <span className="highlight-bullet">✦</span>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="hackathon-card-actions back-actions">
              <a
                href={hackathon.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
                tabIndex={isFlipped ? 0 : -1}
                onClick={(e) => e.stopPropagation()}
              >
                View Certificate
              </a>
              {hackathon.projectId && (
                <a
                  href={`#${hackathon.projectId}`}
                  className="project-btn project-btn-secondary"
                  tabIndex={isFlipped ? 0 : -1}
                  onClick={(e) => handleViewProject(e, hackathon.projectId)}
                >
                  View Project
                </a>
              )}
              <span className="flip-back-hint">Hover out to return</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE EXPANDABLE HIGHLIGHTS */}
      {showMobileHighlights && (
        <div className="mobile-highlights-drawer">
          <h4 className="mobile-drawer-title">Hackathon Highlights</h4>
          <div className="highlights-grid mobile-grid">
            {hackathon.highlights.map((highlight, idx) => (
              <div key={idx} className="highlight-chip">
                <span className="highlight-bullet">✦</span>
                <span className="highlight-text">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

const Hackathons = () => {
  return (
    <section id="hackathons" className="section hackathons-section">
      <h2>Hackathons</h2>

      <div className="hackathons-grid">
        {hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.title} hackathon={hackathon} />
        ))}
      </div>
    </section>
  );
};

export default Hackathons;