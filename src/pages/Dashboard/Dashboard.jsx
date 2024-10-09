import "./Dashboard.css";
// import { useState } from "react";
import Bell from "../../images/notification 1.png";
import Rect from "../../images/Rectangle 4.png";
import Poly from "../../images/Polygon 2.png";
import Image from "../../images/Rectangle 65.png";
import Play from "../../images/play button.png";
import Home from "../../images/home.png";
import Mat from "../../images/material-symbols_play-lesson-rounded.png";
import Majest from "../../images/majesticons_analytics.png";
import Small from "../../images/Rectangle 64.png";
import Vector from "../../images/Vector.png";
import Save from "../../images/Frame 25 (1).png";

function Dashboard() {

    function toggle() {
        const navbarLinks = document.querySelector('.navbar-links');
        
        document.querySelector('.toggle-button');
        navbarLinks.classList.toggle('active')
    }
  return (
    <body>
      <header>
        <section className="sect">
          <img src={Vector} alt="" className="toggle-button" onClick={() =>{
            toggle()
          }}/>
          <p className="dash">Dashboard</p>

          <div className="flex">
            <div>
              <img src={Bell} alt="" className="bell" />
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
              <img src={Poly} alt="" className="poly" />
            </div>
          </div>
        </section>
      </header>

      <button className="ups">Upload Assignment</button>

      <div className="css">
        <img src={Image} alt="" className="image" />
        <img src={Play} alt="" className="play" />
        <p className="with">Continue with</p>
        <p className="score">Score Streaks</p>
        <div className="time">
          <p>Introduction to UI/UX Design</p>
          <p>3:48</p>
        </div>
        <div className="test">
          <div className="one">
            <p className="cong">Congratulations</p>
            <p className="you">
              You passed the test <br />
              (Module 1) introduction to UI/UX Design
            </p>
            <button className="but">Review</button>
          </div>
          <p className="num">98%</p>
        </div>
      </div>

      <div className="poe">
        <div className="tin">
          <div>
            <img src={Home} alt="" />
          </div>
          <div>
            <img src={Mat} alt="" />
          </div>
          <div>
            <img src={Majest} alt="" />
          </div>
        </div>

        <p className="byy">Recently Uploaded Videos By Your Mentors</p>
        <p className="byr">
          Recently Uploaded Videos By<br></br> Your Mentors
        </p>
      </div>

      <div className="git">
        <div className="lit">
          <div>
            <div className="edd">
              <img src={Small} alt="" className="small" />
              <img src={Play} alt="" className="ply" />
            </div>
          </div>

          <div className="two">
            <p className="job">
              How To Get Your First Job As A Designer With Certificate ,<br />
              ONLY!!!
            </p>
            <p className="vid">Video . 5mins</p>
          </div>
          <div>
            <img src={Save} alt="" className="save" />
          </div>
        </div>
        <div className="lit">
          <div>
            <div className="edd">
              <img src={Small} alt="" className="small" />
              <img src={Play} alt="" className="ply" />
            </div>
          </div>

          <div className="two">
            <p className="job">
              How To Get Your First Job As A Frontend Dev With Certificate{" "}
              <br />
              ONLY!!!
            </p>
            <p className="vid">Video . 5mins</p>
          </div>
          <div>
            <img src={Save} alt="" className="save" />
          </div>
        </div>
        <div className="lit">
          <div>
            <div className="edd">
              <img src={Small} alt="" className="small" />
              <img src={Play} alt="" className="ply" />
            </div>
          </div>

          <div className="two">
            <p className="job">
              How To Get Your First Job As A Backend Dev With Certificate <br />
              ONLY!!!
            </p>
            <p className="vid">Video . 5mins</p>
          </div>
          <div>
            <img src={Save} alt="" className="save" />
          </div>
        </div>
        <div className="lit">
          <div>
            <div className="edd">
              <img src={Small} alt="" className="small" />
              <img src={Play} alt="" className="ply" />
            </div>
          </div>

          <div className="two">
            <p className="job">
              How To Get Your First Job As A Fullstack Dev With Certificate{" "}
              <br />
              ONLY!!!
            </p>
            <p className="vid">Video . 5mins</p>
          </div>
          <div>
            <img src={Save} alt="" className="save" />
          </div>
        </div>
        <div className="lit">
          <div>
            <div className="edd">
              <img src={Small} alt="" className="small" />
              <img src={Play} alt="" className="ply" />
            </div>
          </div>

          <div className="two">
            <p className="job">
              How To Get Your First Job As A UI/UX With Certificate <br />
              ONLY!!!
            </p>
            <p className="vid">Video . 5mins</p>
          </div>
          <div>
            <img src={Save} alt="" className="save" />
          </div>
        </div>
      </div>
    </body>
  );
}

export default Dashboard;
