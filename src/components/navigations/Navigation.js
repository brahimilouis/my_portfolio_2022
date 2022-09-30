import './Navigation.scss';
import './../../styles/Porfolio.scss'
import {useState} from "react";

function Navigation() {
    const items = ["LOUIS BRAHIMI", "PROFIL", "PORTFOLIO", "PARCOURS", "CV", "CONTACT"];
    const [indexSelected, setIndexSelected] = useState(0);
    return (
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li
                        className={(indexSelected === index && ("selected"))}
                        key={"nav-" + index}
                        onClick={() => setIndexSelected(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation