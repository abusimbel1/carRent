import React from 'react'
import classes from './Select.module.scss'

const Select = props => {

  const htmlFor = `${props.label}-${Math.random()}`
  return (
    <div className={classes.Select}>
      <label htmlFor={htmlFor}> {props.label}</label>
      <select
        id={htmlFor} value={props.value} onChange={props.onChange}> 
          <option>Оберіть авто</option>
          {props.options.map((option, index) => {
          return (
            <option value={option.name} key={option.name + index}>
              {option.name}   
            </option>
          )
        })}</select>
    </div>
  )
}

export default Select