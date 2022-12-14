import React from 'react'
import s from './SuperButton.module.scss'


const SuperButton = (
    {
        className,
        btnStyle,
        btnSize,
        upperCase,
        rounded,
        ...restProps
    }
) => {

    const size = btnSize || 'medium'
    const style = `btn_${btnStyle}`
    const finalClassName = `${s.btn} ${s[size]}` 
        + `${btnStyle ? ` ${s[style]}` : ''}` 
        + `${upperCase ? ` ${s.upperCase}` : ''}`
        + `${rounded ? ` ${s.rounded}` : ''}`
        + `${className ? ` ${className}` : ''}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
