import profileImage from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero">
      
      <div className="hero-content">
        
        <div className="hero-left">
          <h1>Yasaswi Vadrevu</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build scalable web applications and beautiful user experiences
            using modern technologies.
          </p>

          <div className="hero-buttons">
            <button>View Projects</button>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img
            src={profileImage}
            alt="Yasaswi Vadrevu"
            className="profile-image"
          />
        </div>

      </div>

    </section>
  );
};

export default Hero;