import {React} from "react";
import {Route, Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import './App.css';
import NavBar from "./components/NavBar";
import 'tailwindcss/tailwind.css';
import MatchesPic from "./components/MatchesPic";
import ProjectContainer from './components/ProjectContainer';
import Resume from "./components/Resume";
import MessageMe from "./components/MessageMe";
import About from "./components/About";
import Home from "./components/Home";
import { useLocation } from 'react-router-dom';
import HomeP from "./components/HomeP";




function App() {
  
  const location = useLocation();

  
  
  return (
    <body className="main-background">
      <div className="w-screen flex flex-col h-screen justify-between">
          <NavBar/>
          {location.pathname === '/' ? (

        <header className= "pt-20 font-bold text-center font-['Quicksand'] text-4xl pt-.5 text-red-800">
              Mae Schreck
              <br/>
          <div className="text-center font-['Quicksand'] font-bold text-3xl pt-.5 text-red-800 pt-10">
              Full Stack Software Engineer
              <HomeP className=""/>
          </div>
        </header>
                ): null}
          <div>
            <Routes className ="">
                <Route exact path = "/projectcontainer" element={<ProjectContainer/>} />
                <Route exact path = "/resume" element={<Resume/>} />
                <Route exact path = "/messageme" element={<MessageMe/>} />
                <Route exact path = "/about" element={<About/>} />
            </Routes>
          </div>
          <Home/>
      </div>
      <Footer/>
    </body>
    );
  }

export default App;







