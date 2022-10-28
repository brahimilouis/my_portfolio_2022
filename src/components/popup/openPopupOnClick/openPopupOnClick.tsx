import React, {useState} from 'react';
import Containerpopup from "../containerPopup/containerPopup";
import Project from "../projectPopup/project";
import ListProjectPopup, {ListProjectPopupProps} from "../listProjectPopup/listProjectPopup";

export enum TypePopup {
    projet,
    listProjet
}

export type OpenPopupOnClickProps = {
    type: TypePopup
    children:React.ReactNode
    childrenProps: any
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
                    props.type == TypePopup.projet ?
                        <Project close={changeStateOpen} jsonPath={props.childrenProps}/> :
                        <ListProjectPopup
                            close={changeStateOpen}
                            listProjectsProps={props.childrenProps}/>
                }/> : null
        }
        <div onClick={changeStateOpen}>
            {props.children}
        </div>
    </div>);
}
