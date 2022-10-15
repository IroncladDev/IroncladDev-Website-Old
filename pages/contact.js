/* eslint-disable @next/next/no-img-element */
import Nav from '../components/nav'
import Footer from '../components/footer';
import classes from '../styles/classes.module.css'
import styles from '../styles/contact.module.css'
import Head from 'next/head';


export default function Contact() {
  return (
    <div>
    <Head>
      <title>Contact Me | Ironclad Web Development</title>
    </Head>
      <div>
        <section style={{minHeight: '100vh'}}>

        <div style={{paddingTop: 100, paddingBottom: 100}}>
        <h1 className={classes._header}>Contact Me</h1>
          <p className={classes.centerx}>Email: <a href="mailto:connerow1115@gmail.com">connerow1115@gmail.com</a><br/>
          Phone Number: Nonexistent at the moment</p>
          <div className={styles.flexGrid}>
            <div className={styles.flexCol}>

              <div>
                <a href="https://replit.com/@IroncladDev" target="_blank" rel="noreferrer">
                  <img src="https://digest.repl.co/favicon.ico" alt="Replit Logo" />
                </a>
                <span className={styles.ntag}>Replit</span>
              </div>

              <div>
                <a href="https://github.com/Conner1115" target="_blank" rel="noreferrer">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github Logo" />
                </a>
                <span className={styles.ntag}>Github</span>
              </div>


              <div>
                <a href="https://dev.to/ironcladdev" target="_blank" rel="noreferrer">
                  <img src="https://cdn.worldvectorlogo.com/logos/devto.svg" alt=" Logo" />
                </a>
                <span className={styles.ntag}>Dev.to</span>
              </div>


            </div>

            <div className={styles.flexCol}>

              <div>
                <a href="https://codepen.io/IroncladDev" target="_blank" rel="noreferrer">
                  <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" alt=" Logo" />
                </a>
                <span className={styles.ntag}>Codepen</span>
              </div>


              <div>
                <a href="mailto:connerow1115@gmail.com" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png" alt=" Logo" />
                </a>
                <span className={styles.ntag}>Gmail</span>
              </div>


              <div>
                <a href="https://discord.gg/kuGvdgn5SK" target="_blank" rel="noreferrer">
                  <img src="/icons/Discord-Logo-Color.svg" alt=" Logo" />
                </a>
                <span className={styles.ntag}>Discord</span>
              </div>


            </div>
          </div>
        </div>
          
        </section>

        <Footer />
      </div>

      <Nav stay={true} />
    </div>
  );
}