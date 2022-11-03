import React, {useState} from "react";
import { Link } from 'react-scroll';
import './_Navigation.scss';
import logo from '../../../public/logo_lb_numerique.png';
import MenuIcon from "../../assets/icons/contact/menuIcon";
import CloseIcon from "../../assets/icons/closeIcon";
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
    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className={"content-nav"+ (color ? " light" : "") + (menuOpen ? " open" : "")}>
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
                            // <img src={logo} alt="image"/>
                        }
                        </Link>
                    </div>
                    <div className={"menu-small"} onClick={() => setMenuOpen(!menuOpen)}>
                        {
                            menuOpen ? <CloseIcon/> : <MenuIcon/>
                        }
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
                </ul>
            </div>
        </nav>
    );
}

export default Navigation