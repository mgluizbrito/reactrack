import { useContext } from "react";
import { useLocation } from "react-router-dom";
import useGetBackendUrl from "../../hooks/backend/useGetBackendUrl";
import { logoutAPI } from "../../api/logout";
import { sendVerifyOtp } from "../../api/verifyEmail";
import useNavigateSPA from "../../hooks/routes/useNavigateSPA";

import { AppContext } from "../../context/AppContext";

import { toast } from "react-toastify"

import icon from "../../assets/jpg/icon.jpg"
import arrow from "../../assets/svg/arrow.svg"
import Div from "../Html/Div/Div";
import Image from "../Html/Image/Image";

const Navbar: React.FC = () => {

    const location = useLocation()

    const navigate = useNavigateSPA()

    const { backendUrl } = useGetBackendUrl()

    const context = useContext(AppContext)

    if (!context) {
        throw new Error("AppContext não foi provido")
    }

    const { userData, setUserData, setIsLoggedIn } = context

    const sendVerificationOtp = async () => {

        try {
            const data = await sendVerifyOtp(backendUrl, { email: userData!.email })

            if (data.success) {
                navigate('/email-verify')
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error: any) {
            toast.error(error.message)
        }

    }

    const logout = async () => {

        try {
            const data = await logoutAPI(backendUrl)

            data.success && setIsLoggedIn(false)
            data.success && setUserData(null)
            navigate('/')
        } catch (error: any) {
            toast.error(error.message)
        }

    }

    return (
        <Div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
            <div className="pointer" onClick={() => navigate('/')}>
                <Image src={icon} alt="Logo" className="w-28 sm:w-32 border border-gray-500 rounded-full h-32" />
            </div>
            {userData ? (
                <Div className="w-10 h-10 flex justify-center items-center rounded-full bg-black text-white relative group">
                    <Div>{userData.name[0].toUpperCase()}</Div>
                    <Div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10 w-40">
                        <ul>
                            {!userData.isAccountVerified &&
                                <li onClick={sendVerificationOtp} className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                                    Verificar email
                                </li>
                            }

                            <li onClick={logout} className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10">
                                Logout
                            </li>
                        </ul>
                    </Div>
                </Div>
            ) : (
                <>
                    {location.pathname === '/' &&  (
                        <button onClick={() => navigate('/login')} className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all">
                            Login <img src={arrow} alt="Ícone" />
                        </button>
                    )}
                    {location.pathname.includes('login') && (
                        <button onClick={() => navigate('/signup')} className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all">
                            Cadastro <img src={arrow} alt="Cadastro" />
                        </button>
                    )}
                    {!location.pathname.includes('login') && location.pathname !== '/' && (
                        <button onClick={() => navigate('/login')} className="flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all">
                            Login <img src={arrow} alt="Login" />
                        </button>
                    )}
                </>
            )}
        </Div>
    )

}

export default Navbar