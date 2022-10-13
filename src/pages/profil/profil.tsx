import React from 'react';
import './_profil.scss'
import ProfileIcon from "../../assets/icons/profileIcon";
export type ProfilProps = {}

export default function Profil({}: ProfilProps) {
    return (<section className="profil" id="profil">
        <div className={"titre-section"}>
            <ProfileIcon/>
            <span/>
            <h1>A propos de moi</h1>
        </div>
    </section>);
}
