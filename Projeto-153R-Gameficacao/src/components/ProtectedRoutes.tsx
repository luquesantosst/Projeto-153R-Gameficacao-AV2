import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/User"

function ProtectedRoutes() {

    const { user }  = useContext<any>(UserContext)
    return user ? <Outlet /> : <Navigate to='/Login'/>
}
export default ProtectedRoutes