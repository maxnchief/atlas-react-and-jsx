
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        <p>
          React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. Using a virtual DOM, React optimizes updates and rendering, making applications fast and responsive. It uses JSX, a syntax exttension for JavaScript mergin HTML elements with Javascript to make UI structure more intuitive.
       </p>
      </Section>
    </div>
  );
}

export default App;
