import "./Create.css";
import image1 from "../../images/image1.png";
import { useState } from "react";
// import {eye} from "react-icons-kit/feather/";
import { Icon } from "react-icons-kit";
import { eye, eyeOff } from "react-icons-kit/feather";

function Create() {
    const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return(
       <body>
        <div className="just">
        <img src={image1} alt="" />
        <button className="login"><a href="www.com" className="login">Login for mentors</a></button>
      </div>
<section>
<div className="back">
      <p className="create">Create a Password</p>
      <a href="www.com" className="href">BACK</a>
      </div>
      <p className="strong">Enter a strong but easy to remember <br /> password</p>

<div className="div">
      <div className="eye">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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

      <div className="eye">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
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
          <button className="btn"><a href="/Reset" className="btn">RESET PASSWORD</a></button>
          </section>
       </body>
    );
}

export default Create;