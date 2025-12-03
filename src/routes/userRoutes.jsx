
import SignInUser from "../user/signIn";
import Register from "../user/register";
import HomePage from "../user/Home";
const userRouter=[
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/user/signin",
            element: <SignInUser />
        },
        {
            path: "/user/register",
            element: <Register />
        }
    ]

export default userRouter;

