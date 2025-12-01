import { Link } from "react-router-dom";


function SignInUser(){
    return(
        <div>
            <form >
                <input type="email" placeholder="enter email"/>
                <br/>
                <input type="password" placeholder="enter password"/>
                <br/>
                <p>Don't have an account?<Link to="/register">Register</Link></p>
            </form>
        </div>
    )
}
export default SignInUser;

