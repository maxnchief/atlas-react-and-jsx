import copyImg from "../assets/copy.svg";

function CopyLink({ link }) {
  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link);
    }
  };

  return (
    <img
      className="copy"
      src={copyImg}
      alt="Copy link"
      style={{ width: 24, height: 24, cursor: "pointer" }}
      onClick={handleCopy}
    />
  );
}

export default CopyLink;
