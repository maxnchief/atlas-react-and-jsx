import openImg from "../assets/open.svg";

function OpenLink({ link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={openImg} alt="Open link" style={{ width: 24, height: 24 }} />
    </a>
  );
}

export default OpenLink;
