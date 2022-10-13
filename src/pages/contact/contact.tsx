import React from 'react';
import './_contact.scss'
import ContactIcon from "../../assets/icons/contactIcon";
export type ContactProps = {}

export default function Contact({}: ContactProps) {
    return (<section className="contact">
        <div className={"titre-section"}>
            <ContactIcon/>
            <span/>
            <h1>Me contacter</h1>
        </div>
    </section>);
}
