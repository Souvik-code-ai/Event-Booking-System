// import forgetpasswordOrganizer from "./forgetPasswordOrganizer";
import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa6";
import { VscEye } from "react-icons/vsc";
import { Link } from "react-router-dom";
function SignInOrganizer() {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div className="flex flex-row justify-center">
            <div className="h-[98vh] w-[500px] rounded-tl-2xl rounded-bl-2xl bg-cover shadow-xl shadow-blue-400 inline-block" style={{backgroundImage:`url("/pexels-photosbycollis-3220090.jpg")`}}></div>
            
            <div className="bg-gray-100 h-[98vh] w-[500px] text-center rounded-tr-2xl rounded-br-2xl shadow-xl shadow-blue-400 inline-block ">
                <br/>
                <div className="h-20 w-[100px] ml-50 rounded-full  shadow-xl bg-contain bg-left" style={{backgroundImage:`url("/event_logo.png")`}}></div>
                <h3 className="text-2xl font-bold text-blue-950 ">Welcome to Event Bookings</h3><br/>
                <h1 className="text-xl text-blue-700 ">Sign in</h1><br/>
                <p className="text-sm ">Enter your email address and password 
                    to securely access your account.</p><br/><br/>
                <form >
                    {/* <label htmlFor="email">Verify email Address:</label><br/> */}
                    {/* <span className="absolute top-73.5 left-216  "><FaEnvelope className="size-5" /></span> */}
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
                        placeholder="Enter email address" id="email" className="rounded-md w-[300px] h-10 bg-white shadow-2xl shadow-blue-400 pl-2"  />
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
                        className="rounded-md w-[300px] h-10 bg-white shadow-2xl shadow-blue-400 pl-2"
                    /><span className="absolute right-91 top-1/2 -translate-y-1/2 cursor-pointer"><VscEye/></span>
                    <br />
                    <span className="text-red-700">{errors.password?.message}</span><br />
                    <input type="checkbox" id="rememberBox"/>
                    <label htmlFor="rememberBox" className="text-sm"> Remember me</label><br/>
                    {/* <p>Forgot password?</p> */}
                    <Link ><button onClick={handleSubmit(onSubmit)}
                        className="rounded-2xl bg-green-700 h-[50px] w-[300px] hover:bg-gray-500 text-gray-200 shadow-2xl shadow-blue-400">Sign In</button></Link><br/><br/>
                        <p className="text-gray-500 text-sm">....................OR.................</p><br/>
                    <div >
                        <p className=" text-sm">Sign in with</p><br/>
                        <Link to="https://share.google/RKgOOnCZtqIRYcqPR" target="__main__"><div id="google" className="h-[50px] w-[50px] rounded-3xl bg-contain bg-no-repeat inline-block px-8" style={{backgroundImage:`url("/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png")`}}></div></Link>
                        <Link to=""><div id="facebook"  className="h-[50px] w-[50px] rounded-3xl inline-block px-8 bg-contain bg-no-repeat bg-clip-padding"  style={{backgroundImage:`url("/newfb.jpg")`}} target="__main__"></div></Link>
                        <Link to="https://www.instagram.com/accounts/login/?hl=en" target="__main__"><div id="instagram"  className="h-[50px] w-[50px] rounded-3xl inline-block px-8 bg-contain bg-no-repeat bg-center"  style={{backgroundImage:`url("/insta.avif")`}}></div></Link>
                    </div><br/>
                    <p className="text-sm"><Link to="/organizer/forgetpassword" className="text-blue-600">Forgot password?</Link></p>
                    <p className=" text-sm" >Don't have an account?<Link to="" className="text-blue-600"> Register</Link></p><br/>
                </form>
            </div>

        </div>

    )
}
export default SignInOrganizer;