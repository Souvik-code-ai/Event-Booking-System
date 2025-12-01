import { createBrowserRouter,RouterProvider } from "react-router-dom";
import SignInUser from "../user/signIn";
import Register from "../user/register";
import HomePage from "../user/Home";


function UserRouter(){
    const router=createBrowserRouter(
        [
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/signin",
                element:<SignInUser/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    );
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default UserRouter;