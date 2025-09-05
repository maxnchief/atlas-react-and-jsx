import linkedinImg from "../assets/linkedin.svg";
import githubImg from "../assets/github.svg";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/maxwell-logan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinImg} alt="LinkedIn" style={{ width: 32, height: 32, marginRight: "1em" }} />
      </a>
      <a
        href="https://github.com/maxnchief/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubImg} alt="GitHub" style={{ width: 32, height: 32 }} />
      </a>
    </div>
  );
}

export default SocialLinks;
