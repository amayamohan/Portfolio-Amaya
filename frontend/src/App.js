
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'; 
import Home from './components/home';
import About from './components/about';
import Publication from './components/publication';
import Skills from './components/skill';
import Projects from './components/project';
import Education from './components/education';
import Certificates from './components/certifications';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Publication/>      
      <Skills/>
      <Projects/>
      <Education/>  
      <Certificates/>    
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
