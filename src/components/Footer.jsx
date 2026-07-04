const Footer = () => {
  return (
    <footer className="footer">
      <h2>Yasaswi Vadrevu</h2>

      <p>
        <a href="mailto:vadrevuyasaswi@gmail.com">
          vadrevuyasaswi@gmail.com
        </a>
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/yasaswi1501"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yasaswi-vadrevu"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Yasaswi Vadrevu
      </p>
    </footer>
  );
};

export default Footer;