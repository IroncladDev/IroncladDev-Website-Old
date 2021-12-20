/* eslint-disable @next/next/no-img-element */
import styles from '../styles/comps/block.module.css'
import classes from '../styles/classes.module.css'
import React, { useState } from 'react';
export default function Term(props) {
  const [checked, toggleCheck] = useState(false);
  return (<div className={styles.term + " " + (checked && styles.checked)}>
    <img className={styles.checkIcon} src={checked ? "/icons/checked.svg" : "/icons/check.svg"} alt="check icon" onClick={() => {
      toggleCheck(!checked);
      props.checkTerm(props.number);
    }} />
    <p className={classes.xcenter} style={{ marginLeft: 15 }}>{props.text}</p>
  </div>);
}