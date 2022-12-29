import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTask from "../../Pages/CompletedTask/CompletedTask";
import MyTask from "../../Pages/MyTask/MyTask";
import Login from "../../Pages/Shared/Login/Login";
import SignUp from "../../Pages/Shared/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
// import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "/addtask",
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: "/my-task",
                element: <PrivateRoute><MyTask></MyTask></PrivateRoute>
            },
            {
                path: "/completed-task",
                element: <PrivateRoute><CompletedTask></CompletedTask></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    }

])

export default router;