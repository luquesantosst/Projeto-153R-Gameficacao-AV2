import { useContext, useEffect, useState } from "react"
import './styleSignUp.css'
import { UserContext } from "../../context/User"
import { Link, useNavigate } from "react-router-dom"


function CreateAccount() {

    const { signUp, email, password, loading, handleEmailChange, handlePasswordChange, user } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate("/Login")
    }, [user])

    if (loading) {
        return <div className="loading spinner-border text-dark" role="status">
        </div>

    }

    return (
        <div id={"containerSignUp"}>
            <div className={"SignUpBox"}>
                <h5>Create Account</h5>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="buttons">
                    <Link to="/Login"><span>Voltar</span></Link>
                    <button onClick={() => signUp(email, password)} type="submit" className="btn btn-primary">SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount