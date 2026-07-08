import profileImage from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>Yasaswi Vadrevu</h1>

          <h2>
            Computer Science Student | DSA | AI/ML
          </h2>

          <p>
            I solve complex problems through strong Data Structures and
            Algorithms fundamentals while developing practical skills in
            AI/ML and exploring modern full-stack development.
          </p>

          <p className="hero-status">
            Open to AI/ML, Full-Stack Development, and Software Engineering Internship Opportunities
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              type="application/pdf"
            >
              View Resume
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/yasaswi1501"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yasaswi Vadrevu's GitHub profile"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yasaswi-vadrevu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yasaswi Vadrevu's LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={profileImage}
            alt="Portrait of Yasaswi Vadrevu"
            className="profile-image"
            width="320"
            height="320"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;