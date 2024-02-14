import React, { useContext } from 'react'
import styles from "./Card.module.css"
import { useNavigate } from 'react-router-dom'
import { playerContext } from '../../contexts/playerContext/PlayerContext'
const Card = ({ data }) => {
    const navigate = useNavigate()
    const { setCurrentPlay } = useContext(playerContext)

    const handleClick = (e) => {
        setCurrentPlay(e);
        navigate("/player")
    }

    return (
        <div id={styles.wrapper} >
            <h1>{data.heading}</h1>
            <p>{data.desc}</p>
            <div className={styles.cardWrapper} >
                {
                    data?.cardData.map((e, ind) => {
                        return <div className={styles.card} key={ind} onClick={() => handleClick(e)}>
                            <img src={e.img} alt="Course Image" />
                            <h1>{e.heading}</h1>
                            <p><span>{e.chapters}</span> <span> . </span><span>{e.duration}</span></p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Card