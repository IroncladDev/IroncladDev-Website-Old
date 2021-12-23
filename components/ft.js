/* eslint-disable @next/next/no-img-element */
import styles from '../styles/comps/ft.module.css'
import Fade from './fade'
export default function Ft(props) {
  return (
    <Fade classes={styles.proj} style={props.style}>
      <img src={props.icon} alt={'"' + props.title + '" illustration'} className={styles.icon} />
      <div className={styles.side}>
        <h2 className="tleft">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </Fade>
  );
}