import "./Home.css";
import Bell from "../../images/notification 1.png";
import Rect from "../../images/Rectangle 4.png";
import Poly from "../../images/Polygon 2.png";
import Play from "../../images/play button.png";
import Small from "../../images/Rectangle 64.png";
import Smallie from "../../images/Rectangle 68.png";
import Row from "../../images/Frame 28.png";
import Pix from "../../images/Ellipse 2.png";
import Pix1 from "../../images/Ellipse 2 (1).png";
import Pix2 from "../../images/Ellipse 2 (2).png";
import Pix3 from "../../images/Ellipse 2 (3).png";
import Homa from "../../images/home.png";
import Mat from "../../images/material-symbols_play-lesson-rounded.png";
import Majest from "../../images/majesticons_analytics.png";
import Vector from "../../images/Vector.png";

function Home() {

  function click() {

    const navbarLinks = document.querySelector('.navbar-links');

    document.querySelector('.toggle-button');

    navbarLinks.classList.toggle('active');
  }
  return (
<body>
<header>
          <div className="sect">
            <img src={Vector} alt="" className="toggle-button" onClick={() => {
              click()
            }}/>
            <p className="dash">Dashboard</p>

            <div className="flex">
                <div>
            <img src={Bell} alt="" className="bell"/>
            </div>

            <div className="navbar-links">
              <div className="rect">
            <img src={Rect} alt="" />
            </div>
            <div className="all">
            <p className="orgi">Orgi Bright Marvelous</p>
            <p className="idd">ID: 1234567</p>
            <button className="react"><a href="www.com">Sign Out</a></button>
            </div>
            </div>
            <div>
            <img src={Poly} alt="" className="poly"/>
            </div>
            </div>
            </div>
        </header>

        <button className="ups">Upload Assignment</button>


        <section>
        <div className="ball">
        <div className="const">
        <div className="class">
        <div className="edd">
        <img src={Smallie} alt="" className="small"/>
        <img src={Play} alt="" className="ply"/>
        </div>
        <div className="name">
        <p className="intro">Introduction To UI/UX Design</p>
        <p className="pro">Product Design</p>
        </div>
        </div>
        <div className="otp">
        <p className="mod">Module 1</p>
        <div className="ids">
          <div>
        <img src={Row} alt="" className="row"/>
        </div>
        <p className="per">1%</p>
        </div>
        </div>
        <button className="stra">Start Learning</button>
        </div>

        <button className="str">Start Learning</button>
        </div>
        <p className="beg">Begin with your learning path</p>
        <div className="dat">
        <p className="guide">Guiding you throughout the course</p>
        <div className="calc">
          <div className="joy">
        <div className="ada">
          <div>
        <img src={Pix} alt="" />
        </div>
        <p className="poe">@Joy_Girl</p>
        </div>

        <div className="ada">
          <div>
        <img src={Pix1} alt="" />
        </div>
        <p className="poe">@Promise</p>
        </div>
        </div>

        <div className="joyy">
        <div className="ada">
          <div>
        <img src={Pix2} alt="" />
        </div>
        <p className="poee">@Bright Orgi</p>
        </div>

        <div className="adae">
          <div>
        <img src={Pix3} alt="" />
        </div>
        <p className="poea">@Von</p>
        </div>
        </div>
        </div>
        </div>
        <p className="meet">Meet your Mentors</p>

        <div className="pee">
        <div className="tin">
            <div>
        <img src={Homa} alt="" />
        </div>
        <div>
        <img src={Mat} alt="" />
        </div>
        <div>
        <img src={Majest} alt="" />
        </div>
        </div>

        <p className="byy">Module One Review</p>
        </div>
        </section>

        <div className="fact">
        <p className="byyy">Module One Review</p>
        <div className="git">
        <div className="lit">
        <div>
        <div className="edd">
        <img src={Small} alt="" className="small"/>
        <img src={Play} alt="" className="ply"/>
        </div>
        </div>

        <div className="two">
        <p className="job">How To Get Your First Job As A Designer With Certificate <br />ONLY!!!</p>
        <p className="vid">Video . 5mins</p>
        </div>
        </div>
        <div className="lit">
        <div>
        <div className="edd">
        <img src={Small} alt="" className="small"/>
        <img src={Play} alt="" className="ply"/>
        </div>
        </div>

        <div className="two">
        <p className="job">How To Get Your First Job As A Frontend Dev With Certificate <br />ONLY!!!</p>
        <p className="vid">Video . 5mins</p>
        </div>
        </div>
        <div className="lit">
        <div>
        <div className="edd">
        <img src={Small} alt="" className="small"/>
        <img src={Play} alt="" className="ply"/>
        </div>
        </div>

        <div className="two">
        <p className="job">How To Get Your First Job As A Backend Dev With Certificate <br />ONLY!!!</p>
        <p className="vid">Video . 5mins</p>
        </div>
        </div>
        <div className="lit">
        <div>
        <div className="edd">
        <img src={Small} alt="" className="small"/>
        <img src={Play} alt="" className="ply"/>
        </div>
        </div>

        <div className="two">
        <p className="job">How To Get Your First Job As A Fullstack Dev With Certificate <br />ONLY!!!</p>
        <p className="vid">Video . 5mins</p>
        </div>
        </div>
        <div className="lit">
        <div>
        <div className="edd">
        <img src={Small} alt="" className="small"/>
        <img src={Play} alt="" className="ply"/>
        </div>
        </div>

        <div className="two">
        <p className="job">How To Get Your First Job As A UI/UX With Certificate <br />ONLY!!!</p>
        <p className="vid">Video . 5mins</p>
        </div>
        </div>
        </div>
        <div className="can">
        <p className="goal">Goal: “Consistency is the key”</p>
        <p className="zero">0%</p>
        <div className="hit">
        <p className="goal">. Start date: Febuary 20 2024</p>
        <p className="goal">. Current Streak: 1 day</p>
        </div>
        <button className="von">Start Learning</button>
        </div>
        <p className="score">Score Streaks</p>
        </div>

</body>
  )
}

export default Home
