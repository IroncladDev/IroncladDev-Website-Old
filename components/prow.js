import styles from '../styles/waitlist.module.css'
import classes from '../styles/classes.module.css'
import { createRef, Component } from 'react';

export default class PRow extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
  }
  render() {
    return (
      <div ref={this.scrollDiv} onClick={() => {this.props.edit(this.props._id)}} className={styles.li}>
        <div>{this.props.title}</div>
        <div style={{
          flex: '1'
        }}>{this.props.desc}</div>
        <div>{this.props.postval}</div>
      </div>
    );
  }
}