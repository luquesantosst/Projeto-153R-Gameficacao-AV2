import { Link } from "react-router-dom"
import './styleDashboard.css'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/User"
import fireabaseApp from "../../services/firebase"
import { getFirestore, addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore'

function Dashboard() {

    const { signOut, user, totalXp } = useContext<any>(UserContext)
    const [message, setMessage] = useState()
    const [messages, setMessages] = useState<any>([])

    useEffect(() => {

        const q = query(collection(db, "messages"))

        onSnapshot(q, (querySnapshot) => {
            const aux: any = []
            querySnapshot.forEach((doc: any) => {
                aux.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setMessages([...aux])

        })

        // const getMessagensDB = async () => {
        //     const docs = await getDocs(collection(db, "messages"))
        //     const aux: any = []
        //     docs.forEach((doc: any) => {
        //         aux.push({
        //             id: doc.id,
        //             ...doc.data()
        //         })
        //     })
        //     setMessages([...aux])
        // }

        // getMessagensDB()
    }, [])


    const handleAdd = async () => {

        const message_json = {
            message: message,
            email: user.email
        }
        const addDocReturn = await addDoc(collection(db, "messages"), message_json)

        // setMessages([...messages, message_json])

    }

    const db = getFirestore(fireabaseApp)
    return (
        <>
            <div>
                Total Xp: {totalXp}
            </div>
            <div id="containerDashboard">
                <h1>Dashboard</h1>
                {messages.map((message: any) => (
                    <div className="chat">
                    <>  
                        <div>
                            {message.email}
                        </div>
                        <div>
                            {message.message}
                        </div>
                    </>
                    </div>
                ))}

                <input type="text" value={message} onChange={(event) => { setMessage(event.target.value) }} />
                <button onClick={() => { handleAdd() }}>Enviar</button>

                <Link to="/Game">
                    <div className="GameButton">
                    game
                    </div> 
                </Link>
                <button onClick={() => signOut()} type="submit" className="btn btn-primary">Logout</button>
            </div>

        </>
    )
}

export default Dashboard