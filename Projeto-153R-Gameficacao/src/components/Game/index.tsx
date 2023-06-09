import './style.css'
import Xp from '../../insideComponents/Xp/indexXp'
import Cards from '../../insideComponents/Cards/indexCards'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from "../../context/User"
import fireabaseApp from "../../services/firebase"
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'

function game() {



    const { } = useContext(UserContext)


    // const [totalXp, setTotalXp] = useState(10)

    const [cards, setCards] = useState<any>([])

    useEffect(() => {

        const q = query(collection(db, "cards"))

        onSnapshot(q, (querySnapshot) => {
            const aux: any = []
            querySnapshot.forEach((doc) => {
                aux.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setCards([...aux])
        })
    }, [])

    const db = getFirestore(fireabaseApp)

    return (
        <>
            <div id="container-topo">
                <div className='title'> FlashCard Game</div>
                <Xp />
            </div>
            <div id="container-card">
                {cards.map((card: any) => <Cards content={card} />)}
            </div>
        </>

    )
}

export default game