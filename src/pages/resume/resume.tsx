import React, {useState} from 'react';
import './_resume.scss'
import resume from "../../assets/cv.pdf";
export type ResumeProps = {}

export default function Resume({}: ResumeProps) {
    return (<section className="resume">
        <h1 className={"titre-section"}>Mon CV</h1>
        <embed title={"cv"} src={resume} type='application/pdf'/>
    </section>);
}
