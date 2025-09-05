import links from "../assets/links.json";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <ul>
        {Array.isArray(links) && links.map((item, idx) => (
          <li key={idx}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div>© {year} Atlas School</div>
    </footer>
  );
}

export default Footer;
