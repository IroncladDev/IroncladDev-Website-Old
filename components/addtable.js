import styles from '../styles/Hire.module.css'
import classes from '../styles/classes.module.css'
import React, { useState } from 'react';
export default function AddTable(props) {
  const [title, updateTitle] = useState("");
  const [desc, updateDesc] = useState("");
  return (<div className={styles.flexForm}>
    <textarea className={classes.input + " " + styles.inputPageTitle} rows="2" placeholder="Page Title" name="title" maxLength={25} onChange={(e) => updateTitle(e.target.value)} value={title} />
    <textarea className={classes.input + " " + styles.inputPageDescription} placeholder="Page Description" name="desc" rows="2" maxLength={512} onChange={(e) => updateDesc(e.target.value)} value={desc} />
    <button className={classes.darkBtn + " " + styles.submitPageData} onClick={() => {
      if (props.addPage(title, desc)) {
        updateTitle("");
        updateDesc("");
      }
    }} type="button">Add Page</button>
  </div>);
}