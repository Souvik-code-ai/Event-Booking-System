
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function ForgetpasswordOrganizer() {
    const { register,
        handleSubmit,
        watch,
        formState: { errors } } = useForm();
    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div className="flex flex-row justify-center">
            <br/><br/><br/>
            <div className="h-[98vh] w-[500px] rounded-tl-2xl rounded-bl-2xl bg-cover shadow-xl shadow-blue-400 inline-block" style={{backgroundImage:`url("/public/pexels-hikaique-518389.jpg")`}}></div>
            
            <div className="bg-gray-100 h-[98vh] w-[500px] text-center rounded-tr-2xl rounded-br-2xl shadow-xl shadow-blue-400 inline-block ">
                <br/>
                <div className="h-[80px] w-[100px] ml-50 rounded-full bg-cover shadow-xl" style={{backgroundImage:`url("/event_logo.png")`}}></div><br/>
                <h3 className="text-2xl font-bold text-blue-950 ">Welcome to Event Bookings</h3><br/>
                <h1 className="text-xl text-blue-700 ">Reset Password</h1>
                <p className="text-sm ">Reset your password in just a few steps.</p><br/><br/>
                <form >
                    {/* <label htmlFor="email">Verify email Address:</label><br/> */}
                    <input type="password" {...register("newPassword",
                        {
                            required:
                            {
                                value: true,
                                message: "Password is required."
                            },
                            pattern:
                            {
                                value: /^[A-Za-z0-9@]{8,}$/,
                                message: "Password should contain atleast one uppercase,one lowercase,one number and one @ ."
                            }
                        })}
                        placeholder="Enter new password" id="newPassword" className="rounded-md w-[300px] h-[40px] bg-white shadow-2xl shadow-blue-400"  />
                    <br />
                    <p className="text-red-700">{errors.newPassword?.message}</p><br />
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Password is required."
                            },
                            pattern: {
                                value:/^[A-Za-z0-9@]{8,}$/,
                                message: "Password should contain atleast one uppercase,one lowercase,one number and one @ ."
                            }
                        })}
                        placeholder="Confirm password"
                        id="confirmPassword"
                        className="rounded-md w-[300px] h-[40px] bg-white shadow-2xl shadow-blue-400"
                    />
                    <br />
                    <span className="text-red-700">{errors.confirmPassword?.message}</span><br />
                    {/* <p>Forgot password?</p> */}
                    <button onClick={handleSubmit(onSubmit)}
                        className="rounded-2xl bg-green-700 h-[50px] w-[300px] hover:bg-gray-500 text-gray-200 shadow-2xl shadow-blue-400">Continue</button><br/><br/>
                       
                    {/* <div >
                        <Link to="https://share.google/RKgOOnCZtqIRYcqPR" target="__main__"><div id="google" className="h-[50px] w-[50px] rounded-3xl bg-contain bg-no-repeat inline-block px-8" style={{backgroundImage:`url("/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png")`}}></div></Link>
                        <Link to=""><div id="facebook"  className="h-[50px] w-[50px] rounded-3xl inline-block px-8 bg-contain bg-no-repeat"  style={{backgroundImage:`url("/fb.png")`}} target="__main__"></div></Link>
                        <Link to="https://www.instagram.com/accounts/login/?hl=en" target="__main__"><div id="instagram"  className="h-[50px] w-[50px] rounded-3xl inline-block px-8 bg-contain bg-no-repeat"  style={{backgroundImage:`url("/insta.avif")`}}></div></Link>
                    </div><br/>
                    <p className="text-sm">Forgot password?</p>*/}
                    <p className=" text-sm" ><Link to="/organizer/signin">👈Back to sign in page</Link></p><br/> 
                </form>
            </div>

        </div>

    )
}
export default ForgetpasswordOrganizer;