import ForgetpasswordOrganizer from "../organizer/forgetPasswordOrganizer";
import SignInOrganizer from "../organizer/signInOrganizer";
// import Register from "../user/register";
import HomePage from "../user/Home";
const orgnizerRouter=[
            {
                path:"/organizer/signin",
                element:<SignInOrganizer/>
            },
            {
                path:"/organizer/forgetpassword",
                element:<ForgetpasswordOrganizer/>
            }
];
export default orgnizerRouter;
