import styles from '../styles/comps/block.module.css'
import classes from '../styles/classes.module.css'
import React, { useState } from 'react';
import Term from './term'
import { Component } from 'react'
import { terms } from '../scripts/terms'

export default class BlockTos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      show: true
    }
    this.checkTerm = this.checkTerm.bind(this);
  }
  checkTerm(term) {
    this.setState({
      checked: [...this.state.checked, term]
    }, () => {
      if (this.state.checked.length === terms.filter(x => typeof x !== "string").length) {
        this.setState({
          show: false
        })
        this.props.showSB();
      }
    });
  }
  render() {
    return (this.props.show && this.state.show) ? (<div className={styles.blockBackground}>
      <div className={styles.blockTos}>
        <h3 style={{ fontSize: 30 }} className={classes._header}>Terms and Conditions</h3>
        <p className={classes.textCenter + " " + classes.centerx}>Please carefully read and agree to all these terms and services before you continue.</p>
        <p className={classes.textCenter + " " + classes.centerx}><strong>After deployment, all clients will be given a free 30-day tech support regarding any web development issues.</strong></p>
        {terms.map(term => typeof term === "string" ? <h2 className={styles.header}>{term}</h2> : <Term key={term[1]} number={term[1]} text={term[0]} checkTerm={this.checkTerm} />)}
      </div>
    </div>) : <div></div>;
  }
}