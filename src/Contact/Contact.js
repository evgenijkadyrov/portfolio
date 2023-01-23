import React, {useState} from "react";
import style from "./Contact.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {useFormik} from "formik";
import emailjs from "@emailjs/browser"
import {Title,SuperButton,SuperInputText} from "../common";
import Fade from "react-reveal/Fade";
export const Contact = () => {
    const [status, setStatus] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {email: 'Email required'}
            }
            if (!values.message | values.message.length < 10) {
                return {message: 'Enter your message'}
            }
        },
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: ''
        },
        onSubmit: (values, {resetForm}) => {
            setIsLoading(true)
            emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID, process.env.REACT_APP_FORMIK_TEMPLATE_ID, values, process.env.REACT_APP_FORMIK_USER_ID)

                .then((res) => {
                    setStatus('message sent')
                    setTimeout(() => {
                        setStatus('')
                    }, 4000)

                    resetForm({values: ''})
                    setIsLoading(false)

                })
                .catch(error => {
                    setStatus('Something goes wrong. Try later')
                    setTimeout(() => {
                        setStatus('')
                    }, 4000)
                    setIsLoading(false)
                })

        }
    })

    return (
        <div id="contact" className={style.contact_wrapper}>
            <div className={styleContainer.container}>
                <div className={style.contacts}>
                    <Fade right>
                    <Title title='Contacts' />

                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <label className={style.label} htmlFor="name">Name</label>
                        <SuperInputText id='name' name='name'
                                        onChange={formik.handleChange}
                                        value={formik.values.name} type={'text'}
                                                                               placeholder={'Enter your name'}/>
                        <label className={style.label} htmlFor="phone">Phone number</label>
                        <SuperInputText id="phone" name='phone'
                                        onChange={formik.handleChange}
                                        value={formik.values.phone} type={'number'}

                                        placeholder={'Enter your contact phone number'}/>
                        <label className={style.label} htmlFor="email">Email</label>
                        <SuperInputText id='email' name='email'
                                        onChange={formik.handleChange}
                                        value={formik.values.email} type={'email'}

                                        placeholder={'Enter your  email'}/>
                        {formik.errors.email && formik.touched.email ?
                            <div>{formik.errors.email}</div> : null}


                        <label className={style.label} htmlFor="message">Message</label>
                        <SuperInputText id='message' name='message'
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                        placeholder={'Enter your message'}/>
                        {formik.errors.message && formik.touched.message ?
                            <div>{formik.errors.message}</div> : null}

                        <SuperButton type='submit'
                                     disabled={isLoading}>Sent </SuperButton>
                        {status ? <div className={style.status}>{status}</div> : ''}

                    </form>
                    </Fade>
                </div>
            </div>
        </div>
    );
}
