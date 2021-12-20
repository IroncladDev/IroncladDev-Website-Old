import { Component } from 'react';
import PageRow from './pagerow.js';
import styles from '../styles/comps/pagetable.module.css'
import classes from "../styles/classes.module.css";

export default class pageTable extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={styles.table + " " + classes.centerx}>
        <div className={styles.head}>
          <div className={styles.ptitle}>Title</div>
          <div className={styles.pdesc}>Description</div>
        </div>
        {this.props.pages.map(page => <PageRow key={page.title} removePage={this.props.removePage} title={page.title} desc={page.desc}/>)}
      </div>
    );
  }
}