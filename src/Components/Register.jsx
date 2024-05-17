import { Input } from "./Input";
const Register=()=>{
    return(
        <>
         <div className="Form-container">
      <div className="sub-form-container">
        <h1 className="login-heading">New Register</h1>
        <form>
        <Input type={"email"} id="email" name="email" label="Email Address" placeholder="me@example.com" autofocus={true}/>
        <Input type="password" id="password" name="password" label="Password" placeholder="••••••••••" />
        <Input type="password" id="password" name="Confirm-password" label="Confirm-Password" placeholder="••••••••••" />
        <button  className="submit-btn" >
        Submit
    </button>
          
        </form>
      </div>
    </div>
        </>
    )
}

export default Register;