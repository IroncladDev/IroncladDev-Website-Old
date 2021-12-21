import Nav from '../components/nav'
import Footer from '../components/footer';
import classes from '../styles/classes.module.css'
import styles from '../styles/about.module.css'
import Skill from '../components/skill'

export default function About() {
  return (
    <div>
      <div>
        <section className={classes.overlayer} style={{ background: 'var(--b-dim)' }}>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'var(--b-med)',
            clipPath: `polygon(0 0, 0% 100%, 100% 0)`
          }}></div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'rgba(0,0,0,0.2)',
            clipPath: `polygon(50% 0, 100% 100%, 100% 0)`
          }}></div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'rgba(0,0,0,0.2)',
            clipPath: `polygon(0 0, 50% 100%, 0 100%)`
          }}></div>
          <div className={classes.overlayElement + " " + styles.aboutCov}>
            <div className={styles.centralBox}>
              <h1 className={classes._header + " " + classes.displayDark}>About Me</h1>
              <h2 className={classes.textCenter + " " + classes.displayDark} style={{ marginTop: 25 }}>The complete guide to...Me?</h2>
            </div>
          </div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'var(--w-5)',
            clipPath: `polygon(0 100%, 100% 100%, 100% 75%)`
          }}></div>
        </section>

        <section>
          <h1 className={classes._header}>Who I Am</h1>
          <p className={classes.centerx}>Hi, my name is Conner Ow (pronounced &quot;ow&quot; like when you get hurt).  I am a sixteen-year-old Christian homeschooler who graduated high school at the age of fourteen. I love living in the countryside and really enjoy the quietness and all of the farm animals.</p>

          <p className={classes.centerx}>Besides website development, I enjoy drawing, solving puzzles, algorithms, competing in programming, and reading Lord of the Rings.
            Something else I like to do is Brazilian Jiu-jitsu.  This keeps me active and challenges me in a very different kind of way.  It is a martial art sort of like wrestling.</p>

          <h1 className={classes._header}>My Coding Journey</h1>
          <p className={classes.centerx}>My passion for programming started at the age of eleven.  My mom&apos;s midwife, who delivered my little brother, introduced me to <a href="https://khanacademy.org/" target="_blank" rel="noreferrer">Khan Academy</a>.  After having completed almost all of the courses on there, I moved on to <a href="https://freecodecamp.org" target="_blank" rel="noreferrer">Free Code Camp</a>.  That was the site where I gained most of my skills.  It is absolutely amazing because there are tons of certified languages to learn.   The professionals and the teachers are also very eager to help and share their experiences.</p>
          <p className={classes.centerx}><a href="https://www.codecademy.com/" target="_blank" rel="noreferrer">Code Academy</a> and <a href="https://udemy.com" target="_blank" rel="noreferrer">Udemy</a> also benefitted me in many different ways.  Of all the sites above, one of the most useful platforms I use for programming is <a href="https://replit.com" target="_blank" rel="noreferrer">Replit</a>.  I use it daily to test new features, interact with the community, and deploy some applications.</p>
          <p className={classes.centerx}>When I am not learning languages, I will spend my time solving algorithms.  One of the sites I use for algorithm competition is codingame.com.  The goal is to solve as many algorithms as you can as fast and as efficiently as you can.  The more you do, the higher you move on the leaderboard.</p>
          <p className={classes.centerx}>For programming competitions, I use devpost.com.  There are competitions of all sorts you can join and compete in.  This really teaches you how to manage your time well, work with your teammates, and put everything you have learned into real life projects.</p>
        </section>

        <section className={classes.overlayer} style={{ background: 'var(--gr-dim)' }}>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'var(--gr-med)',
            clipPath: `polygon(0 0, 100% 0, 100% 100%)`
          }}></div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'rgba(0,0,0,0.2)',
            clipPath: `polygon(50% 100%, 100% 0, 100% 100%)`
          }}></div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'rgba(0,0,0,0.2)',
            clipPath: `polygon(0 100%, 50% 0, 0 0)`
          }}></div>
          <div className={classes.overlayElement + " " + styles.aboutCov}>
            <div className={styles.centralBox}>
              <h1 className={classes._header + " " + classes.displayDark}>Skills</h1>
              <h2 className={classes.textCenter + " " + classes.displayDark} style={{ marginTop: 25 }}>The things I use as a developer</h2>
            </div>
          </div>
          <div className={classes.overlayElement + " " + classes.slant} style={{
            background: 'var(--b-dim)',
            clipPath: `polygon(100% 100%, 0 75%, 0 100%)`
          }}></div>
        </section>
        <section style={{background: 'var(--b-dim)', padding: '100px 0'}}>
          <Skill icon="https://replit.com/public/images/languages/react.svg" text="Over fourty percent of all websites on the internet use react.  It is the backbone of almost all websites.  I also, not wanting to be left out of the 40%, now make all websites with it." lang="React"/>
          <Skill icon="/icons/next-js.svg" text="Websites like TikTok, Twitch, AT&T, and many more are made with this extremely powerful and amazing framework.  After I learned it, I got addicted, and use this to make almost every website." dark={true} lang="Next.js"/>
          <Skill icon="https://replit.com/public/images/languages/web_project.svg" text="Every website on the internet is renders HTML5.  Everything you see from text to forms comes from this." lang="HTML5"/>
          <Skill icon="https://i.ibb.co/MCz3w6F/css.png" text="Background Colors, fancy fonts, and (almost) all things stylish on the web are decorated with css." lang="CSS3"/>
          <Skill icon="https://replit.com/public/images/languages/javascript.svg" text="Interactive website features, some browser-based video games, forms, quizzes.  This list could go on forever.  That's what Javascript does for you." lang="Javascript"/>
          <Skill icon="https://replit.com/public/images/languages/nodejs.svg" text="NodeJS, my friends, is what I use to make your sites awesome.  Accounts & Logins, user posting, administration dashbaords, you name it!" lang="NodeJS"/>
          <Skill icon="https://github.com/Steffan153/Steffan153/raw/main/icons/git.svg" text="Git keeps track of all your code and is an amazing helper when it comes to getting websites online, sharing code, and quick bug patching." lang="Git"/>
          <Skill icon="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" text="Whenever a post, account, or some other item gets saved globally to a database, that's when I use MongoDB." lang="MongoDB"/>
          <Skill icon="https://www.connerow.dev/files/p5.png" text="I use p5.js for making interactive and animated backgrounds and games." lang="P5.js"/>
          <Skill icon="https://icons.util.repl.co/bash.svg" text="Bash does everything from running operations in your device to hosting websites online." lang="Bash"/>
          <Skill icon="https://github.com/Steffan153/Steffan153/raw/main/icons/fontawesome.svg" text="Those cute little icons you see in websites all over the web use FontAwesome." lang="Font Awesome"/>
          <Skill icon="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" text="Typescript works like Javascript but tends to catch and fix all user errors and make sure everything is right.  It's useful, kind of like ... a mom." lang="Typescript"/>
          <Skill icon="https://replit.com/cdn-cgi/image/width=2048,quality=80/https://storage.googleapis.com/replit/images/1631112383778_1b79e92ef9fa08e90f0907ff8291c35e.png" text="SocketIO is used to make realtime messaging apps, multiplayer games, immediate notifications, and more." lang="Socket.io"/>
          <Skill icon="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Emblem.png" text="Stripe is how payments, ecommerce, and other web payments work."/>
          <Skill icon="https://replit.com/public/images/languages/python.svg" text="Python does a lot of things from running websites to analyzing data and running AI.  I've quit using python and moved on to the better things in life (listed above)." lang="Python"/>
          <Skill icon="https://replit.com/cdn-cgi/image/width=2048,quality=80/https://storage.googleapis.com/replit/images/1638396182851_ab511d3ca9a79d5a9cb9a2b620c24841.png" text="I've built a few sites out of Flask, which is for running web servers and keeping them online.   The unfortunate thing is that it's made with python and is extremely expensive to keep online and performs relatively slowly compared to the other stuff I use." dark={true} lang="Flask"/>
          <Skill icon="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" text="Jquery is helpful when it comes to interactive things in your website.  The bad part?  It performs slowly and takes up a whole bunch of memory and storage according to todays' modern standards.  Worry not - I don't use this to build websites." lang="Jquery"/>
          <Skill icon="https://replit.com/cdn-cgi/image/width=2048,quality=80/https://storage.googleapis.com/replit/images/1637786528594_06a7f6e40c28ff5d1346ad3f25aed1b5.png" text="Markdown isn't really a programming language, but Markdown comes in useful when writing documentations and posts." lang="Markdown"/>
        </section>
        <Footer />
      </div>

      <Nav stay={false} />
    </div>
  );
}