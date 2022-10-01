import React, {useState} from "react";
import { Link } from 'react-scroll';
import './_Navigation.scss';
import './../../styles/Porfolio.scss'

export type NavigationProps = {}

function Navigation() {
    const items = [
        {
            href: "home",
            name: "LOUIS BRAHIMI"
        },
        {
            href: "profil",
            name: "PROFIL"
        },
        {
            href: "portfolio",
            name: "PORTFOLIO"
        },
        {
            href: "timeline",
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
        console.log('TEST')
        if (window.scrollY <= 40) {
            setColor(true);
        } else {
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <nav className={color ? "light" : ""}>
            <ul>
                {items.map((item, index) => (
                    <li key={"nav-" + index}>
                        <Link
                                to={item.href}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='transition-all duration-300'>{item.name}
                            </Link>
                        {/*<Link>*/}

                        {/*</Link>*/}

                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation