import React from 'react';
import './_profil.scss'
import ProfileIcon from "../../assets/icons/profileIcon";
import WebSkillIcon from "../../assets/icons/skill/webSkillIcon";
import MobileSkillIcon from "../../assets/icons/skill/mobileSkillIcon";
import DesignSkillIcon from "../../assets/icons/skill/designSkillIcon";
import DataSkillIcon from "../../assets/icons/skill/dataSkillIcon";
import CodeSkillIcon from "../../assets/icons/skill/codeSkillIcon";
import TeamSkillIcon from "../../assets/icons/skill/teamSkillIcon";
import AppleToolIcon from "../../assets/icons/tools/appleToolIcon";
import GithubToolIcon from "../../assets/icons/tools/githubToolIcon";
import JetbrainsToolIcon from "../../assets/icons/tools/jetbrainsToolIcon";
import NotionsToolIcon from "../../assets/icons/tools/notionsToolIcon";
import FigmaToolIcon from "../../assets/icons/tools/figmaToolIcon";
import OfficeToolIcon from "../../assets/icons/tools/officeToolIcon";
import StackToolIcon from "../../assets/icons/tools/stackToolIcon";
export type ProfilProps = {}

export default function Profil({}: ProfilProps) {
    const skills = [
        {
            icon: <WebSkillIcon/>,
            text: [<p><div/>Application web</p>]
        },
        {
            icon: <MobileSkillIcon/>,
            text: [<p><div/>Application mobile</p>]
        },
        {
            icon: <DesignSkillIcon/>,
            text: [<p><div/>Responsive design</p>]
        },
        {
            icon: <DataSkillIcon/>,
            text: [
                <p><div/>Base de données</p>,
                <p><div/>Utilisation d'API</p>
            ]
        },
        {
            icon: <CodeSkillIcon/>,
            text: [
                <p><div/>Clean code</p>,
                <p><div/>Documentation</p>,
                <p><div/>Optimisation</p>,
            ]
        },
        {
            icon: <TeamSkillIcon/>,
            text: [
                <p><div/>Travail en équipe</p>,
                <p><div/>Organisation</p>,
                <p><div/>Communication</p>,
            ]
        },
    ];
    const tools = [
        <AppleToolIcon/>,
        <GithubToolIcon/>,
        <JetbrainsToolIcon/>,
        <NotionsToolIcon/>,
        <FigmaToolIcon/>,
        <OfficeToolIcon/>,
        <StackToolIcon/>
    ];

    return (<section className="profil" id="profil">
        <div className={"titre-section"}>
            <ProfileIcon/>
            <span/>
            <h1>A propos de moi</h1>
        </div>
        <div className={"content-profil"}>
            <div className={"top"}>
                <h2>Bienvenue sur mon portfolio !</h2>
            </div>
            <div className={"middle"}>
                <div className={"left"}>
                    <div>
                        <p>
                            Je suis Développeur Web Full Stack en 5ième année à <strong>EPITECH</strong>.                    </p>
                        <p>
                            Ma formation m’a permis d’acquérir de solides connaissances en <strong>informatique et gestion de projets.</strong></p>
                        <p>
                            Durant mon parcours, J’ai choisi de réaliser un année de césure pour intégrer une startup éditeur de plateformes collaboratives et développer ainsi une première <strong>expérience dans le web social.</strong></p>
                        <p>
                            J’ai ensuite passé ma 4ième année d’étude à l’université <strong>Technological Unisversity Dublin</strong>  où j’ai validé un double diplôme en IT Management tout en continuant à travailler en <strong>freelance</strong> à distance.</p>
                        <p>De nature <strong>persévérante</strong> et <strong>rigoureuse</strong>, je suis organisé et à l’écoute des besoins. Je sais  m’adapter rapidement à un environnement technique, <strong>être autonome</strong> mais aussi <strong>échanger</strong> pour progresser ensemble.</p>
                        <p>Mon portefolio vous permettra de découvrir mes travaux réalisés durant mon cursus étudiant et professionnel.</p>
                        <p>J’aurai plaisir à échanger avec vous autour d’un nouveau projet et relever de nouveaux défis !</p>
                    </div>
                </div>
                <div className={"right"}>

                        <h3 className={"title-profil"}>Ce que je sais faire ...</h3>
                        <div className={"grid"}>
                            {
                                skills.map((skill) => (
                                    <div className={"skill"}>
                                        {skill.icon}
                                        <div className={"container-text"}>{skill.text}</div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
            <div className={"bottom"}>
                <h3 className={"title-profil"}>Les outils que j'utilise le plus ...</h3>
                <div className={"container-tools"}>
                    {tools}
                </div>
            </div>
        </div>
    </section>);
}
