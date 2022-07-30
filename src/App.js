import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


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
      <br/><br/><br/><br/><br/>
      <Hobbies/>
      <br/><br/><br/><br/><br/>
      <Achievements/>
      <br/><br/><br/><br/><br/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;