/* eslint-disable @next/next/no-img-element */
import styles from '../styles/comps/tagft.module.css';
import { Component } from 'react';
export default class TagFT extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
    this.select = this.select.bind(this);
  }
  select(){
    this.setState({
      selected: !this.state.selected
    });
  }
  render() {
    return (
      <div className={styles.tag + " " + (this.state.selected && styles.selected)} onClick={() => {
        this.select();
        if(this.state.selected){
          this.props.removeTag(this.props.text, this.props.price, this.props.time);
        }else{
          this.props.addTag(this.props.text, this.props.price, this.props.time);
        }
      }}>
        {this.props.text} (${this.props.price})
      </div>
    );
  }
}