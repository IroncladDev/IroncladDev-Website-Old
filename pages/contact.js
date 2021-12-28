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
      <title>Contact Me | IroncladDev</title>
    </Head>
      <div style={{ paddingTop: 50 }}>
        <section style={{minHeight: '100vh'}}>

        <div style={{position: 'absolute', top: '50%', width: '100%', left: '50%', transform: 'translate(-50%, -50%)'}}>
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
                <a href="https://www.polywork.com/ironcladdev" target="_blank" rel="noreferrer">
                  <img src="/icons/polywork.svg" alt=" Logo" />
                </a>
                <span className={styles.ntag}>Polywork</span>
              </div>


              <div>
                <a href="https://www.linkedin.com/in/conner-ow-81072b223/" target="_blank" rel="noreferrer">
                  <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt=" Logo" />
                </a>
                <span className={styles.ntag}>LinkedIn</span>
              </div>


              <div>
                <a href="https://www.indiehackers.com/IroncladDev" target="_blank" rel="noreferrer">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEX///8OJDnCxcgAACYAAB309PXV2NsAACMAGjJjanQAAADS1dm/wcT8/PxfZ3HuD327AAABOklEQVR4nO3cy26DQBBFQb9IiF///7ne3sVIxB06ErhqfUdwtiPE4QAAAAAAAAAAAAAAAAAAtJtuXwO3x9/H4TE+N61eM3K/fg9cxw9/axym8bn76jUjp/Nx4DJ+6bfGYbqMzp1Pq9eMKKyPg8JWCuvjoLCVwvo4KGylsD4OClsprI+DwlYK6+OgsJXC+jgobKWwPg4KWymsj4PCVgrr46CwlcL6OChspfA34+UvFTZeOD9/FjznbRce50XDYxsqLFKoUKFChQoVKlSoUKFChQoVKvznwt3f0+z/rm3/96UfcOetUGEvhfVxUNhKYX0cFLZSWB8Hha0U1sdBYSuF9XFQ2EphfRwUtlJYHweFrRTWx0FhK4X1cVDYSmF9HBS22n/h/v9fuv9/0AIAAAAAAAAAAAAAAADAh3sByCUzq77/dHQAAAAASUVORK5CYII=" alt=" Logo" />
                </a>
                <span className={styles.ntag}>Indie Hackers</span>
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
                <a href="https://discord.gg/TZCc8P2cyH" target="_blank" rel="noreferrer">
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