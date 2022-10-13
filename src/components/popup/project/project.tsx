import React from 'react';
import './_project.scss';
import CloseIcon from "../../../assets/icons/closeIcon";
import LanguageIcon from "../../../assets/icons/languageIcon";
import DateIcon from "../../../assets/icons/dateIcon";
import TimeIcon from "../../../assets/icons/timeIcon";
import PeopleIcon from "../../../assets/icons/peopleIcon";
import GithubIcon from "../../../assets/icons/githubIcon";

export type ProjectProps = {
    close: () => void,
}

export default function Project(props: ProjectProps) {
    // console.log(Projects);
    const project = {
        name: "My RPG",
        date: "Janvier 2022",
        time: 3,
        nbrPeople: 2,
        pathImage: "rpg/",
        nbrImage: 7,
        language: "C",
        body: [
            {
                title: 'Goal of the project',
                text: 'We are in 2048, 10 years after<i> the terrible</i> chemical attack on Manhattan. Let me give you a short summary of this tragedy. The United States had been in conflict with Russia for several years. As calm gradually returned, Russia ordered a chemical attack against their enemies and more precisely in the famous district of New York "Manhattan". Caught short, thousands of Americans were turned into zombies, it was then that the President decided to evacuate this area to stop this virus. To date, the district is only ruined, invaded by zombies but yet there are still two fugitives who have survived for more than 10 years old, Percy and Sora. They learned to protect themselves from these monsters, they know their behavior perfectly: the zombies burned as soon as they are exposed to the sun and they are hungry as soon as they smell the blood.'
            },
            {
                title: 'Other title',
                text: 'We are in 2048, 10 years after the terrible chemical attack on Manhattan. Let me give you a short summary of this tragedy. The United States had been in conflict with Russia for several years. As calm gradually returned, Russia ordered a chemical attack against their enemies and more precisely in the famous district of New York "Manhattan". Caught short, thousands of Americans were turned into zombies, it was then that the President decided to evacuate this area to stop this virus. To date, the district is only ruined, invaded by zombies but yet there are still two fugitives who have survived for more than 10 years old, Percy and Sora. They learned to protect themselves from these monsters, they know their behavior perfectly: the zombies burned as soon as they are exposed to the sun and they are hungry as soon as they smell the blood.'
            },
            {
                title: 'Other title',
                text: 'We are in 2048, 10 years after the terrible chemical attack on Manhattan. Let me give you a short summary of this tragedy. The United States had been in conflict with Russia for several years. As calm gradually returned, Russia ordered a chemical attack against their enemies and more precisely in the famous district of New York "Manhattan". Caught short, thousands of Americans were turned into zombies, it was then that the President decided to evacuate this area to stop this virus. To date, the district is only ruined, invaded by zombies but yet there are still two fugitives who have survived for more than 10 years old, Percy and Sora. They learned to protect themselves from these monsters, they know their behavior perfectly: the zombies burned as soon as they are exposed to the sun and they are hungry as soon as they smell the blood.'
            },
            {
                title: 'Other title',
                text: 'We are in 2048, 10 years after the terrible chemical attack on Manhattan. Let me give you a short summary of this tragedy. The United States had been in conflict with Russia for several years. As calm gradually returned, Russia ordered a chemical attack against their enemies and more precisely in the famous district of New York "Manhattan". Caught short, thousands of Americans were turned into zombies, it was then that the President decided to evacuate this area to stop this virus. To date, the district is only ruined, invaded by zombies but yet there are still two fugitives who have survived for more than 10 years old, Percy and Sora. They learned to protect themselves from these monsters, they know their behavior perfectly: the zombies burned as soon as they are exposed to the sun and they are hungry as soon as they smell the blood.'
            },
            {
                title: 'Other title',
                text: 'We are in 2048, 10 years after the terrible chemical attack on Manhattan. Let me give you a short summary of this tragedy. The United States had been in conflict with Russia for several years. As calm gradually returned, Russia ordered a chemical attack against their enemies and more precisely in the famous district of New York "Manhattan". Caught short, thousands of Americans were turned into zombies, it was then that the President decided to evacuate this area to stop this virus. To date, the district is only ruined, invaded by zombies but yet there are still two fugitives who have survived for more than 10 years old, Percy and Sora. They learned to protect themselves from these monsters, they know their behavior perfectly: the zombies burned as soon as they are exposed to the sun and they are hungry as soon as they smell the blood.'
            },
        ]
    }

    function buildImage() {
        let images = [];
        console.log(project.nbrImage)
        for (let i = 1; i <= project.nbrImage; i++) {
            console.log(i);
            images.push(
                <img
                    key={i + "-image"}
                    src={require(`./../../../assets/projects/${project.pathImage}${i.toString()}.png`)}
                    alt="image"
                />)
        }

        return images
    }

    return (<div className="project">
        <div className={"left"}>
            <div className={"content"}>
                <div className={"header"}>
                    <div className={"conteneur-close"} onClick={props.close}><CloseIcon/></div>
                    {/*<Close className{"ok"}/>*/}
                    {/*<img src={close} className={"close-popup"} onClick={props.close}/>*/}
                    <a href={"https://github.com/brahimilouis/my_rpg_2017"} target={"_blank"}>
                        <span className={"title hover"}>
                            <GithubIcon/>{project.name}
                        </span>
                    </a>
                    <span className={"language"}><LanguageIcon/>{project.language}</span>
                </div>
                <div className={"info"}>
                    <span className={"date"}><DateIcon/>{project.date}</span>
                    <span className={"time"}><TimeIcon/>{project.time + " semaines"}</span>
                    <span className={"people"}><PeopleIcon/>{project.nbrPeople + " personnes"}</span>
                </div>
                <div className={"body"}>
                    {
                        project.body.map((body) =>
                            <div className={"body-item"}>
                                <h3>{body.title}</h3>
                                <p dangerouslySetInnerHTML={{__html: body.text}}></p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        <div className={"right"}>
            {buildImage()}
        </div>
    </div>);
}
