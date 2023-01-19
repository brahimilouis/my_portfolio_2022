import React, {useEffect, useState} from 'react';
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

export enum Language {
    french,
    english
}

function App () {
    const [language, setLanguage] = useState(Language.french);
    return (
        <div className="App">
            <div className="main">
                <header>
                    <Navigation language={language} setLanguage={setLanguage}/>
                </header>
                <div className="content">
                    <Home key="section-home"/>
                    <Profil key="section-profil" language={language}/>
                    <Portfolio key="section-portfolio" language={language}/>
                    <Timeline key="section-timeline" language={language}/>
                    <Resume key="section-resume" language={language}/>
                    <Contact key="section-contact" language={language}/>
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);