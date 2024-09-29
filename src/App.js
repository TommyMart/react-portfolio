
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.js";
import Projects from "./components/projects/projects.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
