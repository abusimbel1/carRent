import React from 'react'
import classes from './Input.module.scss'
console.log(classes);
function isInvalid({valid, touched, shouldValidate}){
    // console.log(!valid && shouldValidate && touched);
    console.log('valid   '+ valid+'   shouldValidate   '+shouldValidate+'   touched   ' + touched);
    console.log(!valid && shouldValidate && touched);
    return !valid && shouldValidate && touched
}
const Input = props => {
    const inputeTtype = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputeTtype}-${Math.random()}`
    if (isInvalid(props)){
        cls.push(classes.invalid)
    }
    return(
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input 
                type={inputeTtype}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
            {
                isInvalid(props)
                ? <span>{props.errorMessage || 'Enter true data'}</span> 
                : null
            }
            
        </div>
    )
}

export default Input