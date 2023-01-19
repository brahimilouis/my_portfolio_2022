import React, {useState} from 'react';
import './_project.scss';
import CloseIcon from "../../../assets/icons/closeIcon";
import LanguageIcon from "../../../assets/icons/languageIcon";
import DateIcon from "../../../assets/icons/dateIcon";
import TimeIcon from "../../../assets/icons/timeIcon";
import PeopleIcon from "../../../assets/icons/peopleIcon";
import GithubIcon from "../../../assets/icons/githubIcon";
import FetchData from "../../../class/fetchData";
import {Language} from "../../../index";

export type ProjectProps = {
    close: () => void,
    jsonPath: string,
    language:Language
}

type ProjectBodyItemModel = {
    "title": string,
    "text": string
}
type ProjectModel = {
    "name": string,
    "date": string,
    "time": string,
    "nbrPeople": number,
    "pathImage": string,
    "nbrImage": number,
    "language": string,
    linkGithub: string | undefined
    "body": Array<ProjectBodyItemModel>
}

export default function Project(props: ProjectProps) {
    const [datas, setDatas] = useState<null | ProjectModel>(null);
    if (datas == null) {
        new FetchData(props.jsonPath, props.language).fetchData().then((json) => {
            setDatas(json)
        })
    }

    function buildImage() {
        let images = [];
        if (datas != null) {
            for (let i = 1; i <= datas.nbrImage; i++) {
                images.push(
                    <img
                        key={i + "-image"}
                        src={require(`./../../../assets/projects/${datas.pathImage}${i.toString()}.png`)}
                        alt="image"
                    />)
            }
        } else {
            return [];
        }
        return images
    }

    return (<div className="project">
        <div className={"left"}>
            <div className={"content-popup"}>
                <div className={"header"}>
                    <div className={"content-header"}>
                        <div className={"conteneur-close"} onClick={props.close}><CloseIcon/></div>
                        {
                            datas != null && datas.linkGithub != "" ?
                                <a href={datas.linkGithub} target={"_blank"}>
                                <span className={"title hover"}>
                                    <GithubIcon/>{datas.name}
                                </span>
                                </a> :
                                <span className={"title"}>
                                {datas == null ? "" : datas.name}
                            </span>
                        }
                        <span
                            className={"language span-icon"}><LanguageIcon/>{datas == null ? "" : datas.language}</span>
                    </div>
                </div>
                {
                    datas == null ? null : [
                        <div className={"info"} key={"info-project"}>
                            <span className={"date span-icon"} key={"project-date"}><DateIcon/>{datas.date}</span>
                            <span className={"time span-icon"} key={"project-time"}><TimeIcon/>{datas.time}</span>
                            <span className={"people span-icon"} key={"project-people"}><PeopleIcon/>{datas.nbrPeople + " personne" + (datas.nbrPeople > 1 ? 's' : '')}</span>
                        </div>,
                        <div className={"body"} key={"body-project"}>
                            {
                                datas.body.map((body, index) =>
                                    <div className={"body-item"} key={"body-item-"+index}>
                                        <h3>{body.title}</h3>
                                        <p dangerouslySetInnerHTML={{__html: body.text}}></p>
                                    </div>
                                )
                            }
                        </div>
                    ]
                }

            </div>
        </div>
        <div className={"right"}>
            {buildImage()}
        </div>
    </div>);
}
