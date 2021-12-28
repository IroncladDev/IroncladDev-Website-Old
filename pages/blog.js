import { Component } from 'react';
import Footer from '../components/footer'
import Nav from '../components/nav'
import classes from '../styles/classes.module.css'
import Head from 'next/head'
import styles from '../styles/blog.module.css'
import Post from '../components/bloog'

export default class Blog extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
      <Head>
        <title>Blog | Ironclad Web Development</title>
      </Head>
        <div className={classes.relcont} style={{paddingTop: '100px'}}>
          <h1 className={classes._header}>My Blog</h1>
          <div className={styles.grid + " " + classes.centerx} style={{paddingTop: '50px', paddingBottom: 100}}>
            {this.props.posts.map(p => <Post key={p.id} title={p.title} desc={p.description} cover={p.social_image} url={p.url||"/noimg.svg"} date={p.readable_publish_date} year={p.published_at.split`-`[0]} read={p.reading_time_minutes}/>)}
          </div>
        </div>
        <Footer />
        <Nav stay={true}/>
      </div>
    )
  }
}

export async function getServerSideProps(){
  let endpoint = await fetch("https://dev.to/api/articles?username=ironcladdev");
  let data = await endpoint.json();
    return {
      props: {
        posts: data
      }
    }
}