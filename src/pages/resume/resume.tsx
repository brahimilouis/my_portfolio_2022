import React from 'react';
import './_resume.scss'
import resume from "../../assets/resume.pdf";
import ResumeIcon from "../../assets/icons/resumeIcon";
import {Language} from "../../index";

export type ResumeProps = {
    language:Language
}

export default function Resume({language}: ResumeProps) {
    return (<section className="resume">
        <div className={"titre-section"}>
            <ResumeIcon/>
            <span/>
            <h1>Mon CV</h1>
        </div>
        <embed key={"o"} title={"cv"} src={resume} type='application/pdf'/>
    </section>);
}
