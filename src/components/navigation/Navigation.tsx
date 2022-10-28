import React, {useState} from "react";
import { Link } from 'react-scroll';
import './_Navigation.scss';
import logo from '../../assets/logo_lb_numerique.png';
export type NavigationProps = {}

function Navigation() {
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
    const changeColor = () => {
        if (window.scrollY <= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <nav>
            <div className={"content-nav"+ (color ? " light" : "")}>
                <div key={"nav-home"} className={"item-nav"}>
                    <Link
                        to={"home"}
                        activeClass='active'
                        spy={true}
                        offset={-48}
                        className='transition-all duration-300'>{
                        "Louis BRAHIMI"
                        // <img src={logo} alt="image"/>
                    }
                    </Link>
                </div>
                <ul>
                    {items.map((item, index) => (
                        <li className={"item-nav"} key={"nav-" + index}>
                            <Link
                                to={item.href}
                                activeClass='active'
                                spy={true}
                                offset={-48}
                                className='transition-all duration-300'>{item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation