const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2>About Me</h2>

      <div className="about-card">
        <p className="about-intro">
          I’m Yasaswi Vadrevu, a third-year Computer Science student at GITAM,
          Visakhapatnam, passionate about Data Structures and Algorithms, AI/ML,
          and building meaningful software experiences.
        </p>

        <p>
          I enjoy solving complex problems through Data Structures and
          Algorithms while developing my knowledge and practical skills in
          AI/ML. I’m interested in building intelligent, efficient, and
          impactful solutions by combining strong problem-solving fundamentals
          with modern technologies.
        </p>

        <p>
          Alongside my core focus on DSA and AI/ML, I’m exploring full-stack
          development and building interactive digital experiences. I’m
          especially interested in opportunities where I can tackle challenging
          problems, deepen my technical expertise, learn from strong engineering
          teams, and contribute to meaningful products.
        </p>

        <div className="about-highlights">
          <div className="about-highlight">
            <span className="about-highlight-label">Focus</span>
            <strong>Data Structures & Algorithms + AI/ML</strong>
          </div>

          <div className="about-highlight">
            <span className="about-highlight-label">Exploring</span>
            <strong>Full-Stack Development</strong>
          </div>

          <div className="about-highlight">
            <span className="about-highlight-label">Building</span>
            <strong>Interactive Digital Experiences</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;