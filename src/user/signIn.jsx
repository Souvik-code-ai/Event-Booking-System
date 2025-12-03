import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignInUser() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{fontSize:"40px",fontWeight:"bold"}}>User Signin Page</h1>
            <form >
                <label htmlFor="email">Verify email Address:</label><br/>
                <input type="text" {...register("email", { required: true,pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/})} 
                placeholder="Type email address"   id="email" />
                <br/>
                {errors.email && <span>Email address is required</span>}<br/>
                <label htmlFor="pwd">Verify password:</label><br/>
                <input type="text"{...register("password", { required: true,pattern:/^[A-Za-z0-9@]{8,}$/,
                    message:"The field is required and must be 10 digit number"})} placeholder="Enter password" id="pwd" />
                <br />
                {errors.password && <span>Wrong Password</span>}<br/>
                <p>Don't have an account?<Link to="/user/register" style={{color:"blue"}}>Reqister</Link></p>
                <button onClick={handleSubmit(onSubmit)} 
                style={{marginLeft:"20px",backgroundColor:"blue",borderRadius:"8px"}}>Sign In</button>
            </form>
        </div>
    )
}
export default SignInUser;

