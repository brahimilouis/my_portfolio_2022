import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from "./components/navigations/Navigation";
import "./styles/Porfolio.scss"
import "./styles/reset.scss"
import Profil from "./components/profil/profil";
import Portfolio from "./components/portfolio/portfolio";
import Timeline from "./components/timeline/timeline";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Main from "./components/main/main";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <div className="App">
            <Main/>
        </div>
    </React.StrictMode>
);