/* eslint-disable @next/next/no-img-element */
import styles from '../styles/blog.module.css'
import Link from 'next/link'
export default function Post(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
    <div className={styles.post}>
      <img src={props.cover} className={styles.cover} alt={props.title}/>
      <div className={styles.dateMarker}>{props.date}, {props.year} • {props.read} min read</div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.desc}>{props.desc}</p>
    </div>
    </a>
  );
}