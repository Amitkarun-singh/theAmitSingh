import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Projects from './Component/Projects';
import ContactMe from './Component/ContactMe';
// import ProjectsData from './data';
import Footer from './Component/Footer';
import GoToTop from './Component/GoToTop';
import Social from './Component/Social';
import './Component/Home.css'

function App() {

  const [theme, setTheme] = useState("light");

    // useEffect(() => {
    //     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    //         setTheme("dark");
    //     }
    // }, [])

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
    <div className='font-normal text-base dark:bg-black dark:text-white'>
      <Navbar theme={theme} modeHandler={modeHandler}/>
      <GoToTop/>
      <div>
      
        <Home/>
        <About/>
        {/* <Projects ProjectsData={ProjectsData}/> */}
        <ContactMe/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
