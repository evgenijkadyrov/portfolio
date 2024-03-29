import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react'
import s from './SuperInputText.module.css'
import showValue from '../../../assets/icons/show_pass.svg'
import hideValue from '../../../assets/icons/hide_pass.svg'


export const SuperInputText = (
    {
        type,
        passwordType,
        onChange, onChangeText,
        onKeyPress, onEnter,
        label = '',
        error,
        className = '', inputClassName = '', spanClassName,

        ...restProps
    }
) => {

    const [displayValue, setValueDisplay] = useState(false)

    const toggleValueVisibility = () => {
        setValueDisplay(state => !state)
    }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // if onChange (default input property) exist
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    const finalWrapperCN = `${s.wrapper} ${className}`
    const finalInputCN = `${s.superInput} ${inputClassName} ${(error && s.errorInput) || ''} ${(passwordType && s.passwordType) || ''}`
    const finalSpanCN = `${s.errorSpan} ${(spanClassName && spanClassName) || ''}`

    const passwordTypeIcon = displayValue ? hideValue : showValue
    const inputType = !passwordType ? 'text' : displayValue ? 'text' : 'password'

    return (
        <div className={finalWrapperCN}>
            <label className={s.label}>
                <span className={s.title}>{label}</span>
                <input
                    type={inputType}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputCN}

                    {...restProps} // other default input props
                />

                {passwordType 
                    && <img className={s.passwordTypeIcon} onClick={toggleValueVisibility} src={passwordTypeIcon} alt="toggle visibility"/>
                }
            </label>
            {error && <span className={finalSpanCN}>{error}</span>}
        </div>
    )
}

