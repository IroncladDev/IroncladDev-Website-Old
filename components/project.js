/* eslint-disable @next/next/no-img-element */
import styles from '../styles/comps/proj.module.css'


export default function Project(props){
  return (
    <div className={styles.proj} style={props.style}>
      <div className={styles.side}>
        <a target="_blank" rel="noreferrer" href={props.link}><h2 className={styles.title}>{props.title}</h2></a>
        <p>{props.desc}</p>
        <p><a target="_blank" rel="noreferrer" href={props.link} className={styles.url}>{props.link}</a></p>
      </div>
      <div style={{backgroundImage:`url(${props.image})`}} alt="svg icon" className={styles.image}/>
    </div>
  );
}