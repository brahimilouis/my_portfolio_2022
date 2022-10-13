import React, {useState} from 'react';
import Containerpopup from "../containerPopup/containerPopup";
import Project from "../project/project";

export enum TypePopup {
    projet,
    listProjet
}

export type OpenPopupOnClickProps = {
    type: TypePopup
    children:React.ReactNode
}

export default function OpenPopupOnClick(props: OpenPopupOnClickProps) {
    const [isOpen, setIsOpen] = useState(false);
    const changeStateOpen = () => {
        setIsOpen(!isOpen)
        document.body.style.overflow =
            !isOpen ? "hidden" : "visible"
    }
    return (<div className="OpenPopupOnClick">
        {
            isOpen ?
                <Containerpopup child={
                    props.type == TypePopup.listProjet ?
                        <Project close={changeStateOpen}/> : null
                }/> : null
        }
        <div onClick={changeStateOpen}>
            {props.children}
        </div>
    </div>);
}
