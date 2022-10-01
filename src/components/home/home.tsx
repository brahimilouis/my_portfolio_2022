import React from 'react';
import "./_home.scss"
import background from './../../assets/image-home.png'
import moi from './../../assets/louis.png'

export type HomeProps = {}
export default function Home({}: HomeProps) {
    return (<section className="home">
        <div className="conteneurTitre">
            <h1>Louis BRAHIMI</h1>
            <h2>Developper full stack</h2>
            <p>Epitech promo 2022</p>
        </div>
        <img className="moi" src={moi} alt="image"/>
        <img className="background" src={background} alt="image"/>
    </section>);
}
