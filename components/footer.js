import Link from 'next/link';
import classes from '../styles/classes.module.css';
import styles from '../styles/comps/footer.module.css';
export default function Footer() {
  return (<div className={styles.footer}>
    <div className={styles.ftCont}>
      <div className={styles.linkCol}>
        <Link href="/" passHref>
          <span className={styles.link}>Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className={styles.link}>About Me</span>
        </Link>
        <Link href="/contact" passHref>
          <span className={styles.link}>Contact Me</span>
        </Link>
      </div>

      <div className={styles.linkCol}>
        <Link href="/work" passHref>
          <span className={styles.link}>Work</span>
        </Link>
        <Link href="/hire" passHref>
          <span className={styles.link}>Hire Me</span>
        </Link>
        <Link href="/waitlist" passHref>
          <span className={styles.link}>Waitlist</span>
        </Link>
      </div>

      <div className={styles.linkCol}>
        <Link href="/terms" passHref>
          <span className={styles.link}>Terms of Service</span>
        </Link>
        <Link href="/blog" passHref>
          <span className={styles.link}>Blog</span>
        </Link>
      </div>
    </div>

    <hr className={styles.breaker}/>

    <div className={styles.copyright}>
      &copy; Conner Ow {(new Date).getFullYear()}
    </div>
  </div>);
}