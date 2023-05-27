import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/User"

function ProtectedRoutes() {

    const { LoginPermission } = useContext(UserContext)
    return LoginPermission ? <Outlet /> : <Navigate to='/Login'/>
}
export default ProtectedRoutes