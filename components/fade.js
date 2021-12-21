import { createRef, Component } from 'react';
import classes from '../styles/classes.module.css'

export default class Fade extends Component {
  constructor(props){
    super(props);
    this.self = createRef();
    this.state = {
      visible: false
    }
    this.manageComp = this.manageComp.bind(this);
  }
  manageComp(){
    try{
      if(window.pageYOffset + window.innerHeight >= this.self.current.offsetTop){
        this.setState({
          visible: false
        })
      }else{
        this.setState({
          visible: true
        })
      }
    }catch(e){}
  }
  componentDidMount(){
    window.addEventListener("scroll", this.manageComp)
  }
  render(){
    return (
      <div ref={this.self} className={this.props.classes + " " + (this.state.visible ? classes.op0 : classes.op1)}>
        {this.props.children}
      </div>
    );
  }
}