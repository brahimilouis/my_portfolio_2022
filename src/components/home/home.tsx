import React from 'react';
import "./_home.scss"
import Img from './../../assets/image-home.png'

export type HomeProps = {}
export default function Home({}: HomeProps) {
    return (<div className="home">
        <h1>Home</h1>
        <img src={Img} alt="image"/>
    </div>);
}
