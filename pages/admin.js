import Head from 'next/head'
import styles from '../styles/Admin.module.css'
import classes from '../styles/classes.module.css'
import Link from 'next/link';
import { Component } from 'react';
import Script from 'next/script';
import Swal from 'sweetalert2';
import { parse } from 'cookie';
import Admin from '../components/admin';
import { Wait, Site, Sub } from '../scripts/mongo.js'

export default class ADM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      value: ""
    }
    this.update = this.update.bind(this);
    this.authorize = this.authorize.bind(this);
  }
  authorize() {
    let val = this.state.value;
    OAuth.initialize('HfN7eGLAj6AL_hnnPyPA2hRRMM0')
    OAuth.popup('github').done(function (result) {
      result.me().done(async function (dt) {
        let data = dt;
        data.password = val;
        let _d = await fetch("/api/auth", {
          headers: {
            "Content-Type": "application/json",
            "Accept": "*/*",
          },
          method: "POST",
          body: JSON.stringify(data)
        }).then(r => r.json())

        if (_d.success) {
          location.reload();
        } else {
          Swal.fire({
            title: "Unauthorized",
            text: _d.message,
            icon: "error"
          })
        }
      })
    })
  }
  update(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div className={styles.bodyCont}>
        <Head>
          <title>Admin | IroncladDev</title>
        </Head>
        {this.props.auth ? <Admin {...this.props}/> : <div>
          <Script src="https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js"></Script>

          <div className={styles.loginBox}>
          <h2 className={classes._header} style={{fontSize: '2em',paddingTop: 0}}>Log In</h2>
          <p className={classes.textCenter + " " + classes.centerx}>Please Log Into the Administration Dashboard.</p>
            <input className={classes.input + " " + classes.blockInput + " " + classes.centerx} onChange={this.update} value={this.state.value} />
            <button className={classes.button + " " + classes.blockBtn} onClick={this.authorize}>Log In</button>
          </div>
        </div>}
      </div>
    );
  }
}

export async function getServerSideProps(ctx) {
  const req = ctx.req;
  const res = ctx.res;
  const cookies = parse(ctx.req.headers.cookie||"");
  
  if (cookies.admin === process.env.ADMSS) {
    return {
      props: {
        auth: true,
        waits: JSON.stringify(await Wait.find({}).sort("date")),
        sites: JSON.stringify(await Site.find({}).sort("posval")),
        subs: JSON.stringify(await Sub.find({}))
      }
    }
  } else {
    return {
      props: {
        auth: false
      }
    }
  }
}