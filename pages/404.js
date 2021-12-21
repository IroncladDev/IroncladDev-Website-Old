/* eslint-disable @next/next/no-img-element */
import { Component } from 'react';
import Footer from '../components/footer'
import Nav from '../components/nav'
import classes from '../styles/classes.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default class Blog extends Component {
  render() {
    return (
      <div>
      <Head>
        <title>404 Not Found</title>
      </Head>
        <div className={classes.relcont} style={{paddingTop: 70}}>
          <div style={{
            position: 'absolute',
            top: 'calc(50% + 35px)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <h1 style={{
              fontFamily: 'var(--font-text)',
              fontWeight: '300',
              textAlign: "center"
            }}>404 Not Found</h1>
            <img src="/ironclad/blue.svg" alt="IronClad illustration" style={{
              width: '100vh',
              height: '100vh',
              maxHeight: '50vh',
              maxWidth: '75vw'
            }}/>
            <h2 style={{
              fontFamily: 'var(--font-text)',
              fontWeight: '300',
              fontSize: '1.5em',
              textAlign: "center"
            }}>I hate to break it to you, but you&apos;re lost</h2>
            <h1 style={{
              fontFamily: 'var(--font-text)',
              fontWeight: '300',
              textAlign: "center",
              marginTop: 20
            }}>
            <Link href="/" passHref>
            <span className={classes.link}>Return Home</span>
            </Link>
            </h1>
          </div>
        </div>
        <Footer />
        <Nav stay={true}/>
      </div>
    )
  }
}