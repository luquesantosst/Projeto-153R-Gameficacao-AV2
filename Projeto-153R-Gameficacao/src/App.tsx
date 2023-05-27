import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login/indexLogin'
import Game from './components/Game'
import Dashboard from './components/Dashboard/indexDashboard'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import { UserProvider } from './context/User'

function App() {

  return (
    <>
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='Login' element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='Game' element={<Game />} />
          </Route>

          <Route path="/" element={<Navigate to={"/Login"} />} />
        </Routes>
      </BrowserRouter>
  
      </UserProvider>
    </>
  )
}

export default App
