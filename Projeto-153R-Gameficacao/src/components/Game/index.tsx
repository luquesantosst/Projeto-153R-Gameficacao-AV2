import { Link, useResolvedPath } from 'react-router-dom'
import './style.css'
import Xp from '../../insideComponents/indexXp'
import Cards from '../../insideComponents/Cards/indexCards'
import { useState } from 'react'

function game() {

    const [cards, useCards] = useState([
        {
            front:"Gato",
            back:"Cat"
        },
        {
            front:"Cachorro",
            back:"dog"
        },
        {
            front:"Vaca",
            back:"Cow"
        }
    ])
    return  (
        <>
        <div id="container-topo">
                {/* <Xp /> */}
            </div>
            <div id="container-card">
                {cards.map((card => <Cards content={card} />))}
            </div>
        </>
            
    )    
}

export default game