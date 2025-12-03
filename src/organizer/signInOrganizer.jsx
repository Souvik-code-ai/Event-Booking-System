// import forgetpasswordOrganizer from "./forgetPasswordOrganizer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function SignInOrganizer() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div className="flex flex-row justify-center">
            <div className="h-[98vh] w-[500px] rounded-tl-2xl rounded-bl-2xl bg-cover shadow-xl shadow-blue-400 inline-block" style={{backgroundImage:`url("/pexels-photosbycollis-3220090.jpg")`}}></div>
            
            <div className="bg-gray-100 h-[98vh] w-[500px] text-center rounded-tr-2xl rounded-br-2xl shadow-xl shadow-blue-400 inline-block ">
                <br/>
                <div className="h-[80px] w-[100px] ml-50 rounded-full bg-cover shadow-xl" style={{backgroundImage:`url("/event_logo.png")`}}></div><br/>
                <h3 className="text-2xl font-bold text-blue-950 ">Welcome to Event Bookings</h3><br/>
                <h1 className="text-xl text-blue-700 ">Sign in</h1>
                <p className="text-sm ">Enter your email address and password 
                    to securely access your account.</p><br/><br/>
                <form >
                    {/* <label htmlFor="email">Verify email Address:</label><br/> */}
                    <input type="text" {...register("email",
                        {
                            required:
                            {
                                value: true,
                                message: "Email is required."
                            },
                            pattern:
                            {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Email address should be valid in format"
                            }
                        })}
                        placeholder="Enter email address" id="email" className="rounded-md w-[300px] h-[40px] bg-white shadow-2xl shadow-blue-400"  />
                    <br />
                    <p className="text-red-700">{errors.email?.message}</p><br />
                    <input
                        type="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required."
                            },
                            pattern: {
                                value:/^[A-Za-z0-9@]{8,}$/,
                                message: "Password should contain atleast one uppercase,one lowercase,one number and one @ ."
                            }
                        })}
                        placeholder="Enter password"
                        id="password"
                        className="rounded-md w-[300px] h-[40px] bg-white shadow-2xl shadow-blue-400"
                    />
                    <br />
                    <span className="text-red-700">{errors.password?.message}</span><br />
                    <input type="checkbox" id="rememberBox"/>
                    <label htmlFor="rememberBox">Remember me</label><br/>
                    {/* <p>Forgot password?</p> */}
                    <Link ><button onClick={handleSubmit(onSubmit)}
                        className="rounded-2xl bg-green-700 h-[50px] w-[300px] hover:bg-gray-500 text-gray-200 shadow-2xl shadow-blue-400">Sign In</button></Link><br/><br/>
                        <p className="text-gray-500 text-sm">....................OR.................</p><br/>
                    <div >
                        <Link to="https://share.google/RKgOOnCZtqIRYcqPR" target="__main__"><div id="google" className="h-[50px] w-[50px] rounded-3xl bg-contain bg-no-repeat inline-block px-8" style={{backgroundImage:`url("/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png")`}}></div></Link>
                        <Link to=""><div id="facebook"  className="h-[50px] w-[50px] rounded-3xl inline-block px-8 bg-contain bg-no-repeat"  style={{backgroundImage:`url("/fb.png")`}} target="__main__"></div></Link>
                        <Link to="https://www.instagram.com/accounts/login/?hl=en" target="__main__"><div id="instagram"  className="h-[50px] w-[50px] rounded-3xl inline-block px-8 bg-contain bg-no-repeat"  style={{backgroundImage:`url("/insta.avif")`}}></div></Link>
                    </div><br/>
                    <p className="text-sm"><Link to="/organizer/forgetpassword">Forgot password?</Link></p>
                    <p className=" text-sm" >Don't have an account?<Link to="">Register</Link></p><br/>
                </form>
            </div>

        </div>

    )
}
export default SignInOrganizer;