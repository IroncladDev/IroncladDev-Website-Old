import Head from 'next/head'
import styles from '../styles/waitlist.module.css'
import classes from '../styles/classes.module.css'
import Nav from '../components/nav.js';
import Li from '../components/li.js';
import Link from 'next/link';
import { Component } from 'react';
import Footer from '../components/footer';

export default class Waitlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  async componentDidMount() {
    const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    console.log(decodeURIComponent(cookie("uid")))
    const dt = await fetch(`/api/waitlist`)
    const data = await dt.json();
    if (data) {
      this.setState({
        data,
        cookie: JSON.parse(decodeURIComponent(cookie("uid"))) || [false, ""]
      })
    } else {
      this.setState({
        data: [],
        cookie: [false, ""]
      })
    }
  }
  render() {
    return (<div className={styles.container}>
      <Head>
        <title>Waitlist | Ironcladdev</title>
      </Head>
      <h1 className={classes._header}>Waitlist</h1>
      <div className={styles.blockCont}>
        {this.state.data.map((l, ind) => <Li key={l._id} number={ind+1} name={l._id} date={l.date} status={l.status}/>)}
      </div>

      <Footer />
      <Nav stay={true} />
    </div>)
  }
}


