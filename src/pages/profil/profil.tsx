import React, {useState} from 'react';
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
import FetchData from "../../class/fetchData";
export type ProfilProps = {}

type SkillModel = {
    "type":string,
    "texts":Array<string>
}

type ProfilModel = {
    "titleText": string,
    "texts": Array<string>,
    "titleTools": string,
    "titleSkills": string,
    "skills": Array<SkillModel>
}

export default function Profil({}: ProfilProps) {
    const [datas, setDatas] = useState<null|ProfilModel>(null);
    if (datas == null) {
        new FetchData("profil.json").fetchData().then((json) => {
            setDatas(json)
        })
    }
    const tools = [
        <AppleToolIcon key={"tool-apple"}/>,
        <GithubToolIcon key={"tool-github"}/>,
        <JetbrainsToolIcon key={"tool-jetbrain"}/>,
        <NotionsToolIcon key={"tool-notion"}/>,
        <FigmaToolIcon key={"tool-figma"}/>,
        <OfficeToolIcon key={"tool-office"}/>,
        <StackToolIcon key={"tool-stack"}/>
    ];
    function getIconSkill(skill:string) {
        switch (skill) {
            case 'web':
                return <WebSkillIcon/>;
            case 'mobile':
                return <MobileSkillIcon/>;
            case 'design':
                return <DesignSkillIcon/>
            case 'bdd':
                return <DataSkillIcon/>;
            case 'code':
                return <CodeSkillIcon/>;
            case 'team':
                return <TeamSkillIcon/>;
        }
    }

    return (<section className="profil" id="profil">
        <div className={"titre-section"}>
            <ProfileIcon/>
            <span/>
            <h1>A propos de moi</h1>
        </div>
        {
            datas == null ? <div/> :
                <div className={"content-profil"}>
                    <div className={"top"}>
                        <h2>{datas.titleText}</h2>
                    </div>
                    <div className={"middle"}>
                        <div className={"left"}>
                            <div>
                                {
                                    datas.texts.map((text, index) => (
                                        <p key={"profiltext-"+index} dangerouslySetInnerHTML={{__html: text}}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={"right"}>

                            <h3 className={"title-profil"}>{datas.titleSkills}</h3>
                            <div className={"grid"}>
                                {
                                    datas.skills.map((skill, index) => (
                                        <div className={"skill"} key={"skill-" + index}>
                                            {getIconSkill(skill.type)}
                                            <div className={"container-text"}>
                                                {
                                                skill.texts.map((text, index) => (
                                                    <p key={skill.type+index}>{text}</p>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"bottom"}>
                        <h3 className={"title-profil"}>{datas.titleTools}</h3>
                        <div className={"container-tools"}>
                            {tools}
                        </div>
                    </div>
                </div>
        }
    </section>);
}
