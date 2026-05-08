import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section className="section">
      <h2>Education</h2>

      <div className="grid">
        {education.map((item, index) => (
          <div className="card education-card" key={index}>
            
            <div className="education-top">
              <img
                src={item.logo}
                alt={item.college}
                className="college-logo"
              />

              <div>
                <h3>{item.degree}</h3>
                <p>{item.college}</p>
              </div>
            </div>

            <div className="education-details">
              <p>{item.duration}</p>
              <p>{item.cgpa}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;