import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Projects';
import ContactMe from './Component/ContactMe';
import ProjectsData from './data';
import SkillsData from './skillsData';
import Footer from './Component/Footer';
import GoToTop from './Component/GoToTop';
import Skills from './Component/Skills';
import Qualifications from './Component/Qualifications';

function App() {

  const [theme, setTheme] = useState("light");

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme("dark");
        }
    }, [])

    useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove("dark")
      }
    },[theme])

    const modeHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(theme);
    }

  return (
    <div className='w-screen font-normal text-base dark:bg-[#1f1627] dark:text-white overflow-x-hidden'>
      <Navbar theme={theme} modeHandler={modeHandler}/>
      <GoToTop/>
      <div className='w-full'>
        <Home/>
        <About/>
        <Skills  SkillsData={SkillsData} />
        <Qualifications/>
        <Projects ProjectsData={ProjectsData}/>
        <ContactMe/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
