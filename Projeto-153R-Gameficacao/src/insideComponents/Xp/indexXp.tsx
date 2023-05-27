import { useContext } from 'react'
import './styleXp.css'
import { UserContext } from '../../context/User'


export default function Xp() {

    const { totalXp } = useContext(UserContext)

    return (
        <>
            <div className="xp"> 
                 {totalXp} xp
            </div>
        </>
    )
}