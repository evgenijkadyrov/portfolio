import React from "react";
import style from "./Contact.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {useFormik} from "formik";
import emailjs from "@emailjs/browser"
import * as Yup from 'yup';

export const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            telefon: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object(
            {
                name: Yup.string() .required('* Name field is required'),
                telefon: Yup.number().required('* Telefon number field is required'),
                email: Yup.string().email('Invalid email address')
                    .required('* Email field is required'),
                message: Yup.string().required('* Message field is required')
            }),

        onSubmit: (values) => {
            try {

                emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID, process.env.REACT_APP_FORMIK_TEMPLATE_ID, values, process.env.REACT_APP_FORMIK_USER_ID)

            } catch(e) {
                console.log('hng')
            }
        }


    })

    return (
        <div id="contact" className={style.contact_wrapper}>
            <div className={styleContainer.container}>
                <div className={style.contacts}>
                    <h2 className={style.title}>Contacts</h2>

                    <form className={style.form} onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input id='name' name='name' onChange={formik.handleChange}
                               value={formik.values.name} type={'text'}
                               className={style.input} placeholder={'Your Name'}/>
                        <label htmlFor="telefon">Telefon</label>
                        <input id='telefon' name='telefon' onChange={formik.handleChange}
                               value={formik.values.telefon} type={'number'}
                               className={style.input} placeholder={'Your telefon'}/>
                        <label htmlFor="email">Email</label>
                        <input id='email' name='email' onChange={formik.handleChange}
                               value={formik.values.email} type={'email'}
                               className={style.input} placeholder={'Your email'}/>
                        {formik.errors.email && formik.touched.email ?
                            <div>{formik.errors.email}</div> : null}
                        <label htmlFor="message">Message</label>
                        <textarea id='message' name='message'
                                  onChange={formik.handleChange}
                                  value={formik.values.message} className={style.textarea}
                                  placeholder={'Message'} rows="4"/>
                        {formik.errors.message && formik.touched.message ?
                            <div>{formik.errors.message}</div> : null}
                        <button  type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
