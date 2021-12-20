import Head from 'next/head'
import styles from '../styles/Admin.module.css'
import classes from '../styles/classes.module.css'
import Link from 'next/link';
import { Component } from 'react';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    }
    this.authorize = this.authorize.bind(this);
  }
  async authorize() {
    window.addEventListener('message', authComplete);

    var h = 500;
    var w = 350;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);

    var authWindow = window.open(
      'https://repl.it/auth_with_repl_site?domain=' + location.host,
      '_blank',
      'modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

    function authComplete(e) {
      if (e.data !== 'auth_complete') {
        return;
      }
      window.removeEventListener('message', authComplete);
      authWindow.close();
      Router.push('/admin?', null)
    }

  }
  render() {
    return (
      <div>

        <Head>
          <title>Admin | IroncladDev</title>
        </Head>
        <div className={styles.bodyCont}>

          <button className={classes.button} onClick={this.authorize}>Authorize</button>

        </div>
      </div>
    );
  }
}



export async function getServerSideProps(ctx) {
  const req = ctx.req;
  const res = ctx.res;
  if (req.headers['x-replit-user-name']) {
    return {
      props: {
        username: req.headers['x-replit-user-name'],
        userid: req.headers["x-replit-user-id"],
      }
    }
    console.log(req.headers["x-replit-user-name"])
    console.log(req.headers["x-replit-user-id"])
  } else {
    return {
      props: {
        sad: true
      }
    }
  }
}