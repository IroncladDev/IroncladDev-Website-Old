import Head from 'next/head'
import styles from '../styles/Hire.module.css'
import classes from '../styles/classes.module.css'
import Nav from '../components/nav';
import { terms } from '../scripts/terms'
import Footer from '../components/footer';

export default function Terms(){
  return (<div className={classes.container}>
    <h1 className={classes._header}>Terms of Service | IroncladDev</h1>
    <div className={classes.blockContainer}>
      {terms.map(term => typeof term === "string" ? <h2 className={styles.header} style={{marginTop: 50}}>{term}</h2> : <p key={term[1]}>{term[0]}</p>)}
    </div>

    <Footer />
    <Nav stay={true}/>
  </div>);
}