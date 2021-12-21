/* eslint-disable @next/next/no-img-element */
import styles from '../styles/comps/proj.module.css'


export default function Project(props) {
  return (
    <div className={styles.proj} style={props.style}>
      <div className={styles.illustration}>
        <img src={props.image} alt="project cover image" className={styles.image} />
      </div>
      <div className={styles.desc}>
        <a target="_blank" rel="noreferrer" href={props.link}><h2 className={styles.title}>{props.title}</h2></a>
        <p>{props.desc}</p>
        <p><a target="_blank" rel="noreferrer" href={props.link} className={styles.url}>{props.link}</a></p>
      </div>
      
    </div>
  );
}//title, desc, link, image, style