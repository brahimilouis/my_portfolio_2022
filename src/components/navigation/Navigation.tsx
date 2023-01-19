import React, {Dispatch, SetStateAction, useState} from "react";
import {Link} from 'react-scroll';
import './_Navigation.scss';
import MenuIcon from "../../assets/icons/contact/menuIcon";
import CloseIcon from "../../assets/icons/closeIcon";
import {Language} from "../../index";
import FrenchFlagIcon from "../../assets/icons/flag/frenchFlag";
import EnglishFlagIcon from "../../assets/icons/flag/englishFlag";

export type NavigationProps = {
    language : Language,
    setLanguage : Dispatch<SetStateAction<Language>>
}

function Navigation({language, setLanguage} : NavigationProps) {
    const items = [
        {
            href: "profil",
            name: "PROFIL"
        },
        {
            href: "portfolio",
            name: "PORTFOLIO"
        },
        {
            href: "timeline-section",
            name: "PARCOURS"
        },
        {
            href: "resume",
            name: "CV"
        },
        {
            href: "contact",
            name: "CONTACT"
        },
    ]
    const [color, setColor] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    function switchlanguage (languageSelected : Language) {
        setLanguage(languageSelected);
    }

    const changeColor = () => {
        if (window.scrollY <= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    const divLanguage = () => {
      return language === Language.english ?
          <span onClick={() => switchlanguage(Language.french)}><FrenchFlagIcon/></span>:
          <span onClick={() => switchlanguage(Language.english)}><EnglishFlagIcon/></span>
    }
    window.addEventListener('scroll', changeColor)
    return (
        <nav>
            <div className={"content-nav" + (color ? " light" : "") + (menuOpen ? " open" : "")}>
                <div className={"row"}>
                    <div key={"nav-home"} className={"item-nav"}>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to={"home"}
                            activeClass='active'
                            spy={true}
                            offset={-48}
                            className='transition-all duration-300'>{
                            "Louis BRAHIMI"
                        }
                        </Link>
                    </div>
                    <div className={"menu-small"}>
                        <div className={"flag"}>
                                {divLanguage()}
                            </div>
                        <div onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <CloseIcon/> :
                                <div className={"container-menu-small"}>

                                <MenuIcon/>
                            </div>}</div>

                    </div>
                </div>
                <ul className={"menu-big"}>
                    {items.map((item, index) => (
                        <li className={"item-nav"} key={"nav-" + index}>
                            <Link
                                onClick={() => setMenuOpen(false)}
                                to={item.href}
                                activeClass='active'
                                spy={true}
                                offset={-48}
                                className='transition-all duration-300'>{item.name}
                            </Link>
                        </li>
                    ))}
                    <li className={"item-nav flag"} key={"nav-flag"}>
                        {divLanguage()}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation