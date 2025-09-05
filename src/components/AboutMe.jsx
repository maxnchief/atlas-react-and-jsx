import profileImg from "../assets/profile.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <img
        src={profileImg}
        alt="Professional portrait of Maxwell Logan"
        style={{ width: 200, height: 200, borderRadius: "15%", objectFit: "cover" }}
      />
    <p>My name is Maxwell Logan. I'm a T5 student at Atlas School studying to become a Full Stack Developer. I really enjoy using CSS and JavaScript to make fun websites. It's been my favorite thing to do in school. Afterwards I'd like to work for fun ambitious projects. Outside of school I enjoy playing video games and basketball. As well as walking my dog, and enjoying a really nice lunch in a restaurant with great ambiance.</p>
    </div>
  );
}

export default AboutMe;
