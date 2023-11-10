import React from "react";
import { useLoaderData } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase";

export function loader({ request }) { 
    return new URL(request.url).searchParams.get("message")
}


export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData()

    // const googleProvider = new GoogleAuthProvider();
    
    // const GoogleLogin = async () => { 
    //     try { 
    //         const result = await signInWithPopup(auth, googleProvider)
    //         console.log("user result:")
    //         console.log(user.result)
    //     } catch (error) { 

    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h2 className="red">{message}</h2>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
                <h2 className="or-text">-OR-</h2>
                <button onClick={GoogleLogin}><FcGoogle className="google-logo"/>Sign in with Google </button>
                <button><AiFillFacebook className="fb-logo"/> Sign in with Facebook </button>
            </form>
        </div>
    )

}