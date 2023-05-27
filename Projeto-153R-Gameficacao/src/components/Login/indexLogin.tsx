import { useContext, useEffect, useState } from "react"
import "./styleLogin.css"
import { UserContext } from "../../context/User"
import { Link, useNavigate } from "react-router-dom"
function Login() {

    const { signIn, email, password, loading, handleEmailChange,handlePasswordChange, user } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(()=>{
        if (user) navigate("/dashboard")
    },[user])

    if(loading){
        return <div className="spinner-border text-dark" role="status">
      </div>
      
    }

    return (
        <div id={"container"}>
            <div className={"loginBox"}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePasswordChange} />
                </div>
                <button onClick={() => signIn(email,password)} type="submit" className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login