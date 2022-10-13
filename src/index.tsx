import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/Porfolio.scss"
import "./styles/reset.scss"
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/home";
import Profil from "./pages/profil/profil";
import Portfolio from "./pages/portfolio/portfolio";
import Timeline from "./pages/timeline/timeline";
import Resume from "./pages/resume/resume";
import Contact from "./pages/contact/contact";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className="App">
            <div className="main">
                <header>
                    <Navigation/>
                </header>
                <div className="content">
                    <Home key="section-home"/>
                    <Profil key="section-profil"/>
                    <Portfolio key="section-portfolio"/>
                    <Timeline key="section-timeline"/>
                    <Resume key="section-resume"/>
                    <Contact key="section-contact"/>
                </div>
            </div>
        </div>
    </React.StrictMode>
);