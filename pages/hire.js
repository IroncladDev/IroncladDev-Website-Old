import Head from 'next/head'
import styles from '../styles/Hire.module.css'
import classes from '../styles/classes.module.css'
import Nav from '../components/nav.js';
import { Component } from 'react';
import TagFT from "../components/tagft";
import Swal from 'sweetalert2';
import AddTable from '../components/addtable';
import PageTable from '../components/pagetable';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import BlockTos from '../components/blockTos';
import Footer from '../components/footer';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const fts = [
  "payments & ecommerce",
  ["online payments", 50, 6],
  ["0-5 sellable items (Free)", 0, 2],
  ["5-10 sellable items", 25, 5],
  ["unlimited sellable items (uploadeable)", 100, 8],
  "account systems and authentication",
  ["account systems", 100, 10],
  ["email verification", 25, 3],

  "emailing and subscribing",
  ["email subscribe form", 20, 2],
  ["custom-style emails", 15, 3],
  ["email sending (other purpose)", 30, 4],
  ["contact form", 10, 1],

  "art & graphics",
  ["logo design", 5, 1],
  ["custom vector graphics", 15, 6],
  ["custom vector icons", 5, 2],

  "extra design features",
  ["parallax scrolling", 0, 1],
  ["gradiented backgrounds", 0, 1],
  ["curved line design", 2, 1],
  ["glassy (glassmorphic) design", 5, 2],
  ["sound effects", 5, 2],
  ["fade animations", 5, 3],

  "animations",
  ["animated background(s)", 5, 2],
  ["video background(s)", 5, 1],

  "miscalleneous",
  ["toggleable dark mode", 15, 2],
  ["\"I'm not a robot\" captchas", 10, 2],
  ["image uploading", 25, 2],
  ["realtime updates / multiplayer", 50, 5],
  ["user posting/commenting abilities", 50, 4],
  ["feed/hotlist functionality", 50, 4],
  ["interval (cron) timers", 10, 1],
  ["downloadable file(s)", 10, 1],
];

export default class Hire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      price: 20,
      time: 0,
      pages: [{
        title: "Homepage",
        desc: "I would like the homepage to have a large title header that says \"Art from a new perspective\", have a section for some testimonials and have a small incomplete gallery followed by a footer."
      },
      {
        title: "About Us",
        desc: "The about us page should have a background image of a mountain range and have a large header that says \"About Us\" in a cursive-like font.  Below it should just be the text followed by a footer."
      }],
      showSubmitButton: false,
      showTos: false,
      pageCost: 10
    }
    this.submit = this.submit.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.addPage = this.addPage.bind(this);
    this.removePage = this.removePage.bind(this);
    this.runCaptcha = this.runCaptcha.bind(this);
    this.showSB = this.showSB.bind(this);
  }
  runCaptcha(token, ekey) {
    this.setState({
      showTos: true
    })
  }
  submit(e) {
    e.preventDefault();
    let cost = e.target.price.value;
    let approxDays = Math.ceil(e.target.time.value * 3 / 24) + 1;
    let reqs = e.target.tags.value;
    let pages = e.target.pages.value;
    let type = e.target.webtype.value;
    let info = e.target.additional.value;
    let user = e.target.name.value;
    let email = e.target.email.value;
    fetch("/api/submit-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cost,
        approxDays,
        reqs,
        pages,
        user,
        email,
        info,
        type
      })
    })
      .then(r => r.json())
      .then(data => {
        Swal.fire({
          title: data.success ? "Success!" : "Failed",
          text: data.message,
          icon: data.success ? "success" : "error",
          timer: data.success ? 3000 : undefined,
          showConfirmButton: !data.success,
          timerProgressBar: data.success,
          didOpen: data.success ? () => {
            setTimeout(function () {
              location.href = "/waitlist";
            }, 3000)
          } : () => { },
        });
      })
  }
  showSB() {
    this.setState({
      showSubmitButton: true
    })
    window.scrollTo(0, 100000)
  }
  addPage(title, desc) {
    let ret = false;
    if (title && desc) {
      if (title.length >= 3 && desc.length >= 32) {
        if (this.state.pages.some(p => p.title === title)) {
          Toast.fire({
            title: "No Duplicates!",
            text: "All page names must be different.",
            icon: "error"
          })
        } else {
          this.setState({
            pages: [...this.state.pages, { title, desc }],
            pageCost: [...this.state.pages, { title, desc }].length * 5
          })
          Toast.fire({
            title: "Success!",
            text: "Page Added!",
            icon: "success"
          })
          ret = true;
        }
      } else {
        if (title.length < 3) {
          Toast.fire({
            title: "Page Title must be at least 3 characters",
            icon: "error"
          })
        } else if (desc.length < 32) {
          Toast.fire({
            title: "Description must be at least 32 characters",
            icon: "error"
          });
        }
      }
    } else {
      Toast.fire({
        title: "Almost there.",
        text: "Please fill out both the Title and Description",
        icon: "error"
      })
    }
    return ret;
  }
  addTag(tag, price, time) {
    this.setState({
      tags: [...this.state.tags, tag],
      price: this.state.price + price,
      time: this.state.time + time
    })
  }
  removeTag(tag, price, time) {
    this.setState({
      tags: this.state.tags.filter(x => x !== tag),
      price: this.state.price - price,
      time: this.state.time - time
    })
  }
  removePage(page) {
    this.setState({
      pages: this.state.pages.filter(x => x.title !== page),
      pageCost: this.state.pages.filter(x => x.title !== page).length * 5
    })
  }
  calcTime(time) {
    return Math.ceil(time * 3 / 24) + 1
  }
  render() {
    return (
      <div>
        <Head>
          <title>Hire Me | Ironclad Web Development</title>
        </Head>

        <section className={classes.overlayer} style={{ background: 'var(--gr-dim)' }}>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'var(--gr-med)',
            clipPath: `polygon(100% 0, 0 0, 100% 100%)`
          }}></div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'rgba(0,0,0,0.2)',
            clipPath: `polygon(0 100%, 0 50%, 50% 100%)`
          }}></div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'rgba(0,0,0,0.2)',
            clipPath: `polygon(0 100%, 0 0, 100% 0)`
          }}></div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'rgba(0,0,0,0.2)',
            clipPath: `polygon(50% 100%, 100% 50%, 100% 100%)`
          }}></div>
          <div className={classes.overlayElement + " " + styles.abtCover}>
            <div className={styles.centerHead}>
              <h1 className={classes._header + " " + classes.displayDark}>Hire Me</h1>
              <p className={classes.displayDark + " " + classes.textCenter + " " + classes.centerx}>Create a website plan in a few simple steps, tell me what you want, and I&apos;ll get building as soon as possible.</p>
              <a href="#form">
                <button className={classes.button + " " + classes.centerx}>Get Started</button>
              </a>
            </div>
          </div>
          <div className={classes.slant + " " + classes.overlayElement} style={{
            clipPath: `polygon(0 100%, 0 75%, 100% 100%)`,
            background: "var(--w-5)",
          }}></div>
        </section>

        <section id="form">
          <h1 className={classes._header}>Create your site</h1>
          <p className={classes.centerx}>Please try your best to give me extremely detailed descriptions on what you want.  Are you ready?  Let&apos;s create your amazing website!</p>

          <form className={styles.coreForm} onSubmit={this.submit} method="POST">
            <input type="hidden" value={this.state.price + this.state.pageCost} name="price" />
            <input type="hidden" value={this.state.time} name="time" />
            <input type="hidden" value={JSON.stringify(this.state.tags)} name="tags" />
            <input type="hidden" value={JSON.stringify(this.state.pages)} name="pages" />

            <div className={classes.formLabel}>General Information</div>
            <div className={classes.formDesc}>The <em>real</em> you</div>
            <input name="name" placeholder="Full Name" className={classes.input + " " + classes.blockInput} required />
            <div className={classes.formDesc}>Don&apos;t worry, I won&apos;t send you spam.</div>
            <input name="email" placeholder="Email Address" type="email" className={classes.input + " " + classes.blockInput} required />

            <div className={classes.formLabel}>Select Website Type</div>

            <select name="webtype" className={classes.darkBtn + " " + classes.blockBtnLeft}>
              <option value="personal-website">Personal Website</option>
              <option value="blog">Blog</option>
              <option value="business">Business</option>
              <option value="social">Social</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>

            <div className={classes.formLabel}>Select Wanted Features (All that Apply)</div>
            <div>
              {fts.map(tag => typeof tag === "string" ? <div key={tag} className={classes.formDesc}>{tag}</div> : <TagFT key={tag[0]} text={tag[0]} price={tag[1]} time={tag[2]} addTag={this.addTag} removeTag={this.removeTag} />)}
            </div>

            <div className={classes.formLabel}>Website Pages ($5 each)</div>
            <div className={classes.formDesc}>Please try your best to describe each individual website page as best as you can.</div>

            <AddTable addPage={this.addPage} />

            <PageTable removePage={this.removePage} pages={this.state.pages} />

            <div className={classes.formLabel}>Additional Information</div>
            <div className={classes.formDesc}>Any questions?  Particular details?</div>
            <textarea name="additional" placeholder="Color palettes, additional features, etc." className={classes.input} rows="3" style={{ width: '100%' }}></textarea>


            <div className={styles.count}>Estimated Price: ${((this.state.price + this.state.pageCost) * 1.029 + 0.3).toFixed(2)}.  Approximate Time to finish: {this.calcTime(this.state.time)} days</div>
            {this.state.showSubmitButton ? (
              <div tabIndex={0} autoFocus={true} style={{ border: 'solid var(--b-bright) 2px', borderRadius: 5, padding: 10, marginTop: 50 }}>
                <div className={classes.formLabel} style={{ marginTop: 10 }}>Last Step!</div>
                <div className={classes.formDesc}>Please double-check all your information.  Ready to get that site going?</div>
                <button className={classes.darkBtn + " " + classes.blockBtnLeft} type="submit">Submit</button>
              </div>
            ) : (<div>
              <div className={classes.formLabel}>If you&apos;re a robot, you shall not pass.</div>
              <div className={classes.formDesc}>Please prove that you are of flesh and bones.</div>
              <HCaptcha
                sitekey="124ace2d-8845-47ab-b258-05cf91845687"
                onVerify={(token, ekey) => this.runCaptcha(token, ekey)}
              />
            </div>)}
          </form>
        </section>


        <BlockTos show={this.state.showTos} showSB={this.showSB} />

        <Footer />

        <Nav stay={true} />
      </div>
    )
  }
}
