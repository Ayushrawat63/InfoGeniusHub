import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="big-c">
        <div className="c1">
          <a href="">INFOGENIUS</a>
        </div>
        <div className="c2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/uploadImage">Upload Image</Link>
            </li>
            <li>
             <Link to="/About">About</Link>
            </li>

          </ul>
        </div>
        <div className="c3">
          <button href="" className="login-btn">
            <Link to='/login'  className="link-login">Login</Link>
          </button>
          <button href="" className="register-btn">
           <Link to="/register" style={{color:"white",fontWeight:"lighter"}}>Register</Link></button>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
