import React from 'react'
import "./Lesson.css";
import Bell from "../../images/notification 1.png";
import Rect from "../../images/Rectangle 4.png";
import Row from "../../images/Frame 28.png";
import Poly from "../../images/Polygon 2.png";
import Kit from "../../images/formkit_playcircle.png";
import Good from "../../images/fluent-mdl2_completed-solid.png";
import Frame from "../../images/Frame 39.png";
import Akar from "../../images/akar-icons_send.png";
import Elipse from "../../images/Ellipse 3.png";
import Mess from "../../images/message 1.png";
import Homa from "../../images/home.png";
import Mat from "../../images/material-symbols_play-lesson-rounded.png";
import Majest from "../../images/majesticons_analytics.png";
import Icon from "../../images/iconamoon_arrow-left-2-light.png";

function Lesson() {
  return (
   <body>
    <header>
            <div className="sect">
            <p className="dash">Lessons</p>

            <div className="flex">
                <div>
            <img src={Bell} alt="" className="bell"/>
            </div>

            <div className="div">
                <div>
            <img src={Rect} alt="" />
            </div>
            <div className="alll">
            <p className="orgi">Orgi Bright Marvelous</p>
            <p className="idd">ID: 1234567</p>
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
        <div className='mike'>
            <div className='react'>
        <div className='props'>
            <img src={Icon} alt="" />
            <p className='back'>BACK</p>
            </div>
        <div className="ids">
          <div>
        <img src={Row} alt="" className="row"/>
        </div>
        <p className="per">1%</p>
        </div>
        </div>
        <div className='one'>
        <select name="" id="dropdown">
            <option value="">Module One </option>
        </select>

        <p className='cut'>Module One</p>
        </div>


<div className='sass'>
        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>Introductory Video</p>
        <div>
            <img src={Good}alt="" className='good'/>
        </div>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        <div>
            <img src={Good}alt="" className='goodi'/>
        </div>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        <div>
            <img src={Good}alt="" className='goode'/>
        </div>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        </div>

        <div className='bad'>
        <div>
        <img src={Kit} alt="" className='kit'/>
        </div>
        <p>A step into UI Design</p>
        </div>
        </div>

        <div className='two'>
        <select name="" id="dropdown">
            <option value="">Module Two </option>
        </select>

        <p className='cut'>Module Two</p>
        </div>

        <div className='three'>
        <select name="" id="dropdown">
            <option value="">Module Three </option>
        </select>

        <p className='cut'>Module Three</p>
        </div>

        <div className='four'>
        <select name="" id="dropdown">
            <option value="">Module Four </option>
        </select>
        </div>
        </div>


        <div className='all'>
        <p className='uiux'>Introduction to UI/UX Design</p>
        <div>
        <img src={Frame} alt="" className='frame'/>
        </div>
        <div className='btns'>
        <button className='prev'>Previous</button>
        <button className='next'>Next</button>
        </div>
        <p className='ask'>Ask a question</p>
        <div className='sam'>
        <input type="text" name="" className="inp" placeholder='Write your thoughts here'/>
        <img src={Akar} alt="" className='akar'/>
        </div>

        <div className='idk'>
            <div>
        <img src={Elipse} alt="" className='elip'/>
        </div>
        <input type="text" name="" className="sir" placeholder="Comments"/>
        </div>

        <div className='mum'>
        <p className='see'>See replies</p>
        <div className='mess'>
        <img src={Mess} alt="" />
        <p className='see'>2</p>
        </div>
        </div>

        <div className='int'>
        <input type="text" name="" className="rep" placeholder='Reply comments'/>
        <img src={Akar} alt="" className='this'/>
        </div>
        </div>

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
        </section>

   </body>
  )
}

export default Lesson
