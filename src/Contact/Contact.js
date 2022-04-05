import React from 'react';
import style from './Contact.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Contact = () => {
    return (
        <div className={style.contact_wrapper}>
            <div className={styleContainer.container}>
                <div className={style.contacts}>
                    <h2 className={style.title}>Contacts</h2>
                    <form className={style.form}>
                        <input type={'text'} className={style.input} placeholder={'Your Name'}/>
                        <input type={'number'} className={style.input} placeholder={'Your telefon'}/>
                        <input type={'email'} className={style.input} placeholder={'Your email'}/>
                        <textarea className={style.textarea} placeholder={'Message'} rows="4"/>

                    </form>
                    <input className={style.input} type='submit'/>
                </div>
            </div>
        </div>
    );
};

export default Contact;