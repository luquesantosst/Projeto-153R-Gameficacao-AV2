import { Link } from 'react-router-dom'
import './style.css'

function game() {
    return(
            <div className="card">
                <div className="title">cachorro</div>
                <Link to='/dashboard'>dashboard</Link>

            </div>
    )    
}

export default game