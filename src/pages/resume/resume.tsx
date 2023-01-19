import React from 'react';
import './_resume.scss'
import resumeFr from "../../assets/resume-fr.pdf";
import resumeEn from "../../assets/resume-en.pdf";
import ResumeIcon from "../../assets/icons/resumeIcon";
import {Language} from "../../index";

export type ResumeProps = {
    language:Language
}

export default function Resume({language}: ResumeProps) {
    return (<section className="resume">
        <div className={"titre-section"}>
            <ResumeIcon language={language}/>
            <span/>
            <h1>{language === Language.french ? "Mon CV" : "My resume"}</h1>
        </div>
        <embed key={"o"} title={"cv"} src={language === Language.french ? resumeFr : resumeEn} type='application/pdf'/>
    </section>);
}
