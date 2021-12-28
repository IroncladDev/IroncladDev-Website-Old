/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import classes from '../styles/classes.module.css';
import styles from '../styles/comps/footer.module.css';
import {useState} from 'react';
import Swal from 'sweetalert2';
export default function Footer() {
  const [__email, setEmail] = useState("");
  return (<footer className={styles.footer}>
    <div className={styles.sideCont}>
      <div className={styles.logoFlex + " " + classes.centerx}>
        <img src="/ironclad/head-white.svg" className={styles.logo} alt="IroncladDev Logo" />
        <img src="/ironclad/text-white.svg" className={styles.logoText} alt="Logo Text"/>
      </div>
      <p className={styles.textPar + " " + classes.centerx}>Stay updated with weekly digests, new articles, projects, and more!</p>
      <div className={styles.subForm + " " + classes.centerx}>
        <input className={classes.input} name="email" type="email" placeholder="Your Email Address" value={__email} onChange={(e) => setEmail(e.target.value)}/>
        <button className={classes.darkBtn} onClick={() => {
          fetch("/api/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accept: "*/*"
            },
            body: JSON.stringify({
              email: __email
            })
          }).then(r => r.json()).then(data => {
            if(data.success){
              Swal.fire("Subscribed!", "Thank you for subscribing to me!  I'll keep you updated on my latest projects and articles.", "success")
              setEmail("")
            }else{
              Swal.fire("Action Failed", data.message||"There was an internal error when you tried to subscribe.  Please try again or drop me an email if the problem persists.", data.icon||"error");
            }
          })
        }}>Subscribe</button>
      </div>


    </div>
    <div className={styles.flexMain}>
      <div className={styles.ftCont}>
        <div className={styles.linkCol}>
          <div><Link href="/" passHref>
            <span className={styles.link}>Home</span>
          </Link></div>
          <div><Link href="/about" passHref>
            <span className={styles.link}>About Me</span>
          </Link></div>
          <div><Link href="/contact" passHref>
            <span className={styles.link}>Contact Me</span>
          </Link></div>
        </div>

        <div className={styles.linkCol}>
          <div><Link href="/work" passHref>
            <span className={styles.link}>Work</span>
          </Link></div>
          <div><Link href="/hire" passHref>
            <span className={styles.link}>Hire Me</span>
          </Link></div>
          <div><Link href="/waitlist" passHref>
            <span className={styles.link}>Waitlist</span>
          </Link></div>

        </div>

        <div className={styles.linkCol}>
          <div><Link href="/terms" passHref>
            <span className={styles.link}>Terms of Service</span>
          </Link></div>
          <div><Link href="/blog" passHref>
            <span className={styles.link}>Blog</span>
          </Link></div>
          <div><Link href="/resume.pdf" passHref>
            <span className={styles.link}>Resume</span>
          </Link></div>
        </div>
      </div>

      <hr className={styles.breaker} />

      <div className={styles.copyright}>
        &copy; Conner Ow {(new Date).getFullYear()}
      </div>
    </div>
  </footer>);
}