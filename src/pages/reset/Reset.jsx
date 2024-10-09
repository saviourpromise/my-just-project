import "./Reset.css";
import image1 from "../../images/image1.png";

function Reset() {
return(
    <body>
        <div className="just">
        <img src={image1} alt="" />
        <button className="login"><a href="www.com" className="login">Login for mentors</a></button>
      </div>
      <section>
      <div className="back">
      <p className="reset">Reset Password</p>
      <a href="www.com" className="href">BACK</a>
      </div>
      <p className="email">Input your email for a password <br></br>reset</p>
      <div className="div">
      <input type="text" 
      className="input" 
      placeholder="Email Address"
      required/>
      <button className="btn"><a href="/Dashboard" className="btn">RESET PASSWORD</a></button>
      </div>
</section>
    </body>
  );
}

export default Reset;