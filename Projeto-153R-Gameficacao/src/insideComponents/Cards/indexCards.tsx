import { useState, useContext } from 'react'
import './styleCards.css'
import { UserContext } from '../../context/User'

interface Content {
    front: string,
    back: string
    id: any
}


interface Icards {
    content : Content

}

export default function Cards({ content }: Icards ) {

    const { incrementer }: any = useContext(UserContext)

    const [isOpened, setIsOpened] = useState(false)

    const clickPoint = () => {
        setIsOpened(!isOpened)
        if (!isOpened) {
            incrementer(+ 10)
        } else
            incrementer(- 5)
    }

    return (
        <div className={isOpened ? "card card-opened" : "card"} key={content.id}
            onClick={() => clickPoint()}>
            <div className="content">
                <div className="front">
                    {content.front}
                </div>
                <div className="back">
                    {content.back}
                </div>
            </div>
        </div>
    )
}