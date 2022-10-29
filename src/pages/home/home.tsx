import React from 'react';
import "./_home.scss"
import background from '../../assets/image-home2.png'
import moi from '../../assets/louis.png'

export type HomeProps = {}
export default function Home({}: HomeProps) {
    return (<section className="home">
        <div className={"container-home"}>
            <div className="conteneurTitre">
                <h1>Louis BRAHIMI</h1>
                <h2>Developper full stack</h2>
                <h3>Epitech promo 2023</h3>
            </div>
            <img className="moi" src={moi} alt="image"/>
            <img className="background" src={background} alt="image"/>
        </div>
    </section>);
}
