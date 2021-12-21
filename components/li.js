import styles from '../styles/waitlist.module.css'
import classes from '../styles/classes.module.css'
import { createRef, Component } from 'react';

export default class Li extends Component {
  constructor(props) {
    super(props);
    this.scrollDiv = createRef();
    this.state = {
      cookie: [false, ""]
    }
  }
  componentDidMount() {
    const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    let cookieData = [false, ""];
    try{
      cookieData = JSON.parse(decodeURIComponent(cookie("uid")))
      console.log(decodeURIComponent(cookie("uid")))
    }catch(e){}
    this.setState({
      cookie: cookieData
    }, () => {
      if (this.state.cookie[0] === this.props.name) {
        this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' })
      }
    })

  }
  render() {
    let findEqual = this.props.name === this.state.cookie[0];
    let blank=()=>{};
    return (
      <div ref={this.scrollDiv} onClick={this.props.editRow ? (() => {this.props.editRow(this.props._id)}) : blank} className={styles.li + " " + (findEqual && styles.selected)}>
        <div>#{this.props.number}{" "}{findEqual ? this.state.cookie[1] : this.props.name.slice(0, 10)}</div>
        <div style={{
          flex: '1'
        }}><span className={styles.reg}>Registered{" "}</span>{this.props.date}</div>
        <div><span className={styles.dot + " " + (this.props.status && styles.making)}></span>{" "}<span>{this.props.status ? "In Progress" : "Waiting"}</span></div>
      </div>
    );
  }
}