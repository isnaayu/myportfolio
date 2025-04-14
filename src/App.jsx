import { BrowserRouter } from "react-router-dom";
import { ButtonChat } from "./components/ButtonChat";
import { Footer } from "./layouts/Footer";
import { Navbar } from "./layouts/Navbar";
import { Certifications } from "./pages/Certifications";
import { ContactMe } from "./pages/ContactMe";
import { Educations } from "./pages/Educations";
import { Experiences } from "./pages/Experiences";
import { Gallery } from "./pages/Gallery";
import { Hero } from "./pages/Hero";
import { Organizations } from "./pages/Organizations";
import  Projects  from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { ChatBot } from "./components/ChatBot";
import { ChatFeature } from "./components/ChatFeature";

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
      
      <Hero/>
      <Skills/>
      <Experiences/>
      <Educations/>
      <Organizations/>
      <Projects/>
      <Certifications/>
      {/* <ChatBot/>
      <ButtonChat/> */}
      <ChatFeature/>
      <Gallery/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default App;
