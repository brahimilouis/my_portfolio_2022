import React, {useState} from 'react';
import Navigation from "../navigations/Navigation";
import Home from "../home/home";
import Profil from "../profil/profil";
import Portfolio from "../portfolio/portfolio";
import Timeline from "../timeline/timeline";
import Resume from "../resume/resume";
import Contact from "../contact/contact";
import "./_main.scss"

export type MainProps = {}

export default function Main({}: MainProps) {
    return (<div className="main">
        <header>
            <Navigation/>
        </header>
        <div className="content">
            <Home key="component-0"/>
            <Profil key="component-1"/>
            <Portfolio key="component-2"/>
            <Timeline key="component-3"/>
            <Resume key="component-4"/>
            <Contact key="component-5"/>
        </div>
    </div>);
}
