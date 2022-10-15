/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classes from '../styles/classes.module.css'
import Nav from '../components/nav';
import FT from '../components/ft';
import Project from '../components/project';
import Link from 'next/link';
import Footer from '../components/footer'
import { Component } from 'react';
import Svg from '../components/drawsvg'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    let __data = await fetch("/api/projects").then(r => r.json());
    this.setState({
      data: __data
    })
  }
  render() {
    return (
      <div>
        <Head>
          <title>Home | Ironclad Web Development</title>
        </Head>
        <section className={styles.sec1}>
          <div className={styles.slant2}></div>
          <div className={styles.slant1}></div>
          <div className={styles.slant3}></div>
          <div className={styles.header}>
            <div className={styles.headBlock}>
              <h1 className={styles.title}><span style={{ color: "var(--y-med)" }}>Redneck</span>{" "}Fullstack<br />Web Developer</h1>
              <p className={classes.displayDark + " " + styles.headDescription}>I am a fullstack website developer that lives out in the country.  I do support engineering at <a href="https://replit.com" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Replit</a> and build increasingly powerful tools to stop hackers and spammers.</p>
            </div>
            <div className={styles.iwrap}>
              <Svg />
            </div>
          </div>
        </section>
        <section style={{ paddingBottom: 50 }}>
          <div className={classes.blockSlant} style={{
            clipPath: `polygon(0 0, 0 100%, 25% 0)`,
            background: "var(--b-dim)",
            maxHeight: 100,
            height: "15vh"
          }}></div>

          <div>
            <h1 className={classes._header} style={{ margin: 0, padding: 0 }}>A Little Bit About Me</h1>
            <p className={classes.centerx}>Hello, my name is Conner.  I am a sixteen-year-old fullstack web developer.  What I enjoy most is building websites , competing, and solving algorithms in the field of Programming.</p>
            <p className={classes.centerx}>I now work at <a href="https://replit.com" target="_blank" rel="noreferrer" >Replit</a> as somewhat a hybrid between a Support Engineer, a Product Engineer, and a Trust and Safety engineer.  I love building new stuff and watching how people use and utilize them.</p>
            <Link href="/about" passHref>
              <h2 className={classes.link} style={{ textAlign: "center" }}>Read More &gt;&gt;</h2>
            </Link>
          </div>

        </section>
        <section style={{ paddingBottom: '75px' }}>
          <div className={classes.blockSlant} style={{
            clipPath: `polygon(0 0, 0 100%, 100% 100%)`,
            background: "var(--b-dim)",
            maxHeight: 100,
            height: "15vh"
          }}></div>
          <div className={classes.blockSlant} style={{
            clipPath: `polygon(0 0, 100% 0, 100% 100%)`,
            background: "var(--b-med)",
            maxHeight: 100,
            height: "15vh"
          }}></div>
          <h1 className={classes._header}>Projects</h1>
          {this.state.data.slice(0, 3).map(x => <Project title={x.title} key={x._id} desc={x.desc} link={x.link} image={x.cover} />)}

          <Link href="/work" className={classes.link} passHref>
            <h2 style={{ textAlign: "center", color: 'var(--y-med)' }} className={classes.hov}>See All &gt;&gt;</h2>
          </Link>
        </section>
        <section style={{ background: 'var(--b-med)' }}>
          <div className={classes.blockSlant} style={{
            clipPath: `polygon(0 0, 0% 100%, 100% 0)`,
            background: "var(--w-5)",
            maxHeight: 100,
            height: "15vh",
            transform: 'translatey(-1px)'
          }}></div>
        </section>
        <Footer />
        <Nav />
      </div>
    )
  }
}
