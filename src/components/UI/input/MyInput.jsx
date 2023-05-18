import React from 'react'
import classes from "./MyInput.module.css"

function MyInput({...props}) {
  return (
    <input className={classes.uiInput} {...props} />
    )
}

export default MyInput