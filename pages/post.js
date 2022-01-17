/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classes from '../styles/classes.module.css'
import Nav from '../components/nav';
import FT from '../components/ft';
import Project from '../components/project';
import Link from 'next/link';
import Footer from '../components/footer'
import { Component } from 'react';
import Svg from '../components/drawsvg'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    let __data = await fetch("/api/projects").then(r => r.json());
    this.setState({
      data: __data
    })
  }
  render() {
    return (
      <div style={{ background: 'var(--b-dim)', width: 1000, height: 500, display: 'flex', padding: 20 }}>
        <div style={{alignSelf: 'center', minWidth: 400}}>
          <Svg />
        </div>
        <div style={{alignSelf: 'center'}}>
          <h1 style={{fontSize: '3.5em', textAlgn: 'left', color: 'white'}}>{this.props.text}</h1>
        </div>
      </div>
    )
  }
}

export function getServerSideProps({query}){
  return {
    props: {
      text: query.text
    }
  }
}