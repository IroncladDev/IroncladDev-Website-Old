/* eslint-disable @next/next/no-img-element */
import styles from '../styles/comps/ft.module.css'
export default function Ft(props){
  return (
    <div className={styles.proj} style={props.style}>
      <img src={props.icon} alt="svg icon" className={styles.icon}/>
      <div className={styles.side}>
        <h2 className="tleft">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}