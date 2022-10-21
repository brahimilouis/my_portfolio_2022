import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from "@hookform/error-message";
import './_contact.scss'
import ContactIcon from "../../assets/icons/contactIcon";
import emailjs from '@emailjs/browser';
import MapMarkerIcon from "../../assets/icons/contact/mapMarkerIcon";
import MailIcon from "../../assets/icons/contact/mailIcon";
import LinkedinIcon from "../../assets/icons/contact/linkedinIcon";
import PhoneIcon from "../../assets/icons/contact/phoneIcon";
import FetchData from "../../class/fetchData";
import {toast, ToastContainer} from "react-toastify";
import GithubContactIcon from "../../assets/icons/contact/githutContactIcon";

export type ContactProps = {}

type FormTextModel = {
    name: string,
    email: string,
    message: string
    button: string
    errorRequired:string,
    errorInvalidEmail:string
    succesMessage:string,
    errorMessage:string

}
type ContactModel = {
    title: string,
    titleForm: string,
    titleCoordinate: string
    form: FormTextModel
}

interface FormInputs {
    name: string
    email: string
    message: string
}

export default function Contact({}: ContactProps) {
    const {register, handleSubmit, formState : {errors, isValid, submitCount, isSubmitting, isSubmitSuccessful}, reset} = useForm<FormInputs>();
    const [datas, setDatas] = useState<null | ContactModel>(null);
    if (datas == null) {
        new FetchData("contact.json").fetchData().then((json) => {
            setDatas(json)
        })
    }

    useEffect(() => {
        reset({message:"", email:"", name:""}, {keepSubmitCount:false, keepIsValid: false})
    }, [isSubmitSuccessful]);

    const onSubmit = async (data: any) => {
        const templateId = 'template_af0q47q';
        const serviceId = 'service_5aj7a0j';
        await sendFeedback(serviceId, templateId, {
            name: data.name,
            email: data.email,
            message: data.message,
        });
    };

    async function sendFeedback(serviceId: string, templateId: string, variables: Record<string, unknown>) {
        await emailjs
            .send(serviceId, templateId, variables, 'hHTy6ekTh7GRQSmRb')
            .then((res) => {
                reset({message:"", email:"", name:""}, {keepSubmitCount:false, keepIsValid: false});
                toast.success(datas == null ? "Error" : datas.form.succesMessage);
                // reset form
            })
            .catch((err) => toast.error(datas == null ? "Error" : datas.form.errorMessage));
    }
    return (<section className="contact"> {datas == null ? null : [
        <div className={"titre-section"} key={"title-section"}>
            <ContactIcon/>
            <span/>
            <h1>{datas.title}</h1>
        </div>,
        <div className={"content-contact"} key={"content-contact"}>
            <div className={"container-coordinate"}>
                <h1 className={"titre-contact"}>{datas.titleCoordinate}</h1>
                <div className={"content-coordinate"}>
                    <div className={"coordinate-group"} key={"coordinate-city"}>
                        <MapMarkerIcon/>
                        <span>Paris</span>
                    </div>
                    <div className={"coordinate-group"} key={"coordinate-mail"}>
                        <MailIcon/>
                        <span><a href="mailto:louis.brahimi@gmail.com">louis.brahimi@gmail.com</a></span>
                    </div>
                    <div className={"coordinate-group"} key={"coordinate-phone"}>
                        <PhoneIcon/>
                        <span>06 16 09 02 49</span>
                    </div>

                    <div className={"coordinate-group"} key={"coordinate-linkedin"}>
                        <LinkedinIcon/>
                        <span><a target={"_blank"}
                                 href={"https://www.linkedin.com/in/louis-brahimi-629ab2187/"}>https://www.linkedin.com/in/louis-brahimi-629ab2187/</a></span>
                    </div>
                    <div className={"coordinate-group"} key={"coordinate-github"}>
                        <GithubContactIcon/>
                        <span><a target={"_blank"}
                                 href={"https://github.com/brahimilouis"}>https://github.com/brahimilouis</a></span>
                    </div>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="titre-contact">{datas.titleForm}</h1>
                <div className="row">
                    <div className={"form-group"}>
                        <input
                            className="input-contact"
                            type="text"
                            {...register("name", {required:datas.form.errorRequired})}
                            placeholder={datas.form.name}
                        />
                        <ErrorMessage
                            errors={errors}
                            name={"name"}
                            render={(message)=>(
                                <p className={"message-error"}>{message.message}</p>
                            )}
                        />
                    </div>
                    <div className={"form-group"}>
                        <input
                            className="input-contact"
                            type="text"
                            {...register("email", {
                                required: datas.form.errorRequired,
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: datas.form.errorInvalidEmail
                                }
                            })}
                            placeholder={datas.form.email}
                        />
                        <ErrorMessage
                            errors={errors}
                            name={"email"}
                            render={(message)=>(
                                <p className={"message-error"}>{message.message}</p>
                            )}
                        />
                    </div>
                </div>
                <div className={"form-group"}>
                    <textarea
                        className="message-contact"
                        placeholder={datas.form.message}
                        cols={20}
                        rows={10}
                        {...register("message", {
                            required:datas.form.errorRequired,})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={"message"}
                        render={(message)=>(
                            <p className={"message-error"}>{message.message}</p>
                        )}
                    />
                </div>
                <button disabled={isSubmitting || (!isValid && submitCount > 0)} className="button-contact" type="submit">
                    {datas.form.button}
                </button>
                <ToastContainer position={"bottom-right"} autoClose={3000}/>
            </form>
        </div>
    ]
    }
    </section>);
}
