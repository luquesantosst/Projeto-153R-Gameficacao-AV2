import { Link } from "react-router-dom"
import './styleDashboard.css'
import { useContext } from "react"
import { UserContext } from "../../context/User"
function Dashboard() {

    const {signOut} = useContext(UserContext)
    return (
        <>
        <div id="container">
        <h1>Dashboard</h1>
        <Link to="/Game">game</Link>
        <button onClick={()=> signOut()}type="submit" className="btn btn-primary">Logout</button>
        </div>

        </>
    )
}

export default Dashboard