/* eslint-disable @next/next/no-img-element */
import styles from '../styles/comps/nav.module.css';
import classes from '../styles/classes.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Component } from 'react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: false
    }
    this.listenToScroll = this.listenToScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  listenToScroll() {
    if (window.pageYOffset >= window.innerHeight - 80) {
      this.setState({
        dark: true
      })
    } else {
      this.setState({
        dark: false
      })
    }
  }
  render() {
    return (<nav className={styles.nav + " " + (this.props.stay ? styles.darknav : (this.state.dark && styles.darknav))}>
      <div className={styles.navCont}>
        <div className={styles.flexL}>
          <div className={styles.logo}>
            <Link href="/" passHref>
              <Image src="/ironclad/head-white.svg" alt="Logo" layout="fill" objectFit='contain' />
            </Link>
          </div>
          <div className={styles.logoName}>
            <Link href="/" passHref>
              <img src="/ironclad/text-white.svg" alt="IronClad text" className={styles.logoNameImg}/>
            </Link>
          </div>
        </div>

        <div className={styles.linkCore}>
          <Link href="/about" passHref>
            <span className={styles.link}>About<span className={styles.hide}>{" "}Me</span></span>
          </Link>
          <Link href="/work" passHref>
            <span className={styles.link}>Work</span>
          </Link>
          <Link href="/blog" passHref>
            <span className={styles.link}>Blog</span>
          </Link>
          <Link href="/contact" passHref>
            <span className={styles.link}>Contact</span>
          </Link>
        </div>

        <Link href="/hire" passHref>
          <button className={classes.button + " " + styles.hireBtn}>Hire Me</button>
        </Link>
      </div>
    </nav>);
  }
}