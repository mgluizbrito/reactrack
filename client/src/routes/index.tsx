import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Auth/Home"
import Login from "../pages/Auth/Login"
import Signup from "../pages/Auth/Signup"
import EmailVerify from "../pages/Auth/EmailVerify"
import ResetPassword from "../pages/Auth/ResetPassword"
import SystemsLayout from "../pages/Systems/SystemsLayout"
import Fit from "../pages/Fit/Fit";
import ExerciseDetail from "../pages/Fit/ExerciseDetail";
import CoinProvider from "../pages/Crypto/Provider/CoinProvider";
import Crypto from "../pages/Crypto/Crypto";
import CoinDetail from "../pages/Crypto/CoinDetail";
import OpinlyProvider from "../pages/Opinly/Provider/OpinlyProvider";
import Opinly from "../pages/Opinly/Opinly";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Signup /> },
            { path: 'email-verify', element: <EmailVerify /> },
            { path: 'reset-password', element: <ResetPassword /> },
            {
                path: 'systems', element: <SystemsLayout />,
                children: [
                    // { index: true, element: <Dashboard /> },
                    {
                        path: 'fit', children: [
                            { index: true, element: <Fit /> },
                            { path: 'exercise/:id', element: <ExerciseDetail /> },
                        ]
                    },
                    {
                        path: 'crypto', element: <CoinProvider />,
                        children: [
                            { index: true, element: <Crypto /> },
                            { path: 'coin/:id', element: <CoinDetail /> },
                        ]
                    },
                    {
                        path: 'opinly', element: <OpinlyProvider />,
                        children: [
                            { index: true, element: <Opinly /> },
                        ]
                    }
                ]
            }
        ]
    }
])

export default router