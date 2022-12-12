import React from 'react';
import style from './Contact.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Field, Form, Formik} from "formik";

export const Contact = () =>(
        <div id='contact' className={style.contact_wrapper}>
            <div className={styleContainer.container}>
                <div className={style.contacts}>
                    <h2 className={style.title}>Contacts</h2>
                    <Formik
                        initialValues={{
                            name: '',
                            telefon: '',
                            email: '',
                            message:''
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form className={style.form}>
                            <label htmlFor="name">First Name</label>
                            <Field id="name" name="name" placeholder="Jane" className={style.input}/>

                            <label htmlFor="telefon">Telefon</label>
                            <Field id="telefon" name="telefon" placeholder="+375 44 707 76 34" type="number" className={style.input} />

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                                className={style.input}
                            />
                            <label htmlFor="message" >Message</label>
                            <Field id="message" name="message" placeholder="Enter your message" type="text" className={style.input} />
                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>

                    {/*<form className={style.form}>*/}
                    {/*    <input type={'text'} className={style.input} placeholder={'Your Name'}/>*/}
                    {/*    <input type={'number'} className={style.input} placeholder={'Your telefon'}/>*/}
                    {/*    <input type={'email'} className={style.input} placeholder={'Your email'}/>*/}
                    {/*    <textarea className={style.textarea} placeholder={'Message'} rows="4"/>*/}
                    {/*    <input className={style.input} type='submit'/>*/}
                    {/*</form>*/}

                </div>
            </div>
        </div>
    );
