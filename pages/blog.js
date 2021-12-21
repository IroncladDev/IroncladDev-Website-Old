import { Component } from 'react';
import { render } from 'react-dom';
import Footer from '../components/footer'
import Nav from '../components/nav'
import classes from '../styles/classes.module.css'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className={classes.relcont}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <h1 style={{
              fontFamily: 'var(--font-text)',
              fontWeight: '300'
            }}>My Blog is currently under construction</h1>
          </div>
        </div>
        <Footer />
        <Nav stay={true}/>
      </div>
    )
  }
}