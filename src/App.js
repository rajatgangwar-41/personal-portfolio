import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education/>
      <br/><br/><br/><br/><br/>
      <Skills />
      <br/><br/><br/>
      <Projects/>
      <br/><br/><br/>
      <Contact/>
    </div>
  );
}

export default App;