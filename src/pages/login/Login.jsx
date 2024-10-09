import "./Login.css";
import image1 from "./../../images/image1.png";
import { useState } from "react";
// import {eye} from "react-icons-kit/feather/";
import { Icon } from "react-icons-kit";
import { eye, eyeOff } from "react-icons-kit/feather";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <body>
      <div className="just">
        <img src={image1} alt="" />
        <button className="login"><a href="www.com" className="login">Login for mentors</a></button>
      </div>

      <section>
        <p className="welcome">Welcome back</p>
        <p className="enter">
          Enter your details to continue your learning path
        </p>

        <div className="div">
          <div>
            <input type="text" 
            className="input" 
            placeholder="Name" 
            required
            />
          </div>

          <div>
            <input type="email" 
            className="input" 
            placeholder="Email Address"
            required
             />
          </div>

          <div className="eye">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input"
              required
            />
            <div>
              {/* <span onClick={()=> setShowPassword(!showPassword)}></span> */}
            </div>
            <span
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer",}}
              // style={{ background: "black", }}
              className="alt"
            >
              {showPassword ? <Icon icon={eye} /> : <Icon icon={eyeOff} />}
            </span>
          </div>
        </div>

        <div className="mee">
          <input type="checkbox" className="check" />
          <p>Remember me</p>
        </div>

        <div className="here">
          <p>Forgot password?</p>
          <a href="www.com">Recover here</a>
        </div>

        <button className="sign"><a href="www.com" className="sign">SIGN IN</a></button>
        <div>
        <hr className='hrr'/>
        </div>

        <p className="dont">Don't have an account?</p>

        <button className="signup">
          <a href="/Create">Sign up</a>
        </button>
      </section>
    </body>
  );
}

export default Login;
