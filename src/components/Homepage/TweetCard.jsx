import React, { useContext } from 'react'
import { tweetShorts } from '../../data'
import styles from "./TweetCard.module.css"
import { useNavigate } from 'react-router-dom'
import { playerContext } from '../../contexts/playerContext/PlayerContext'
const TweetCard = () => {
    const navigate = useNavigate()
    const { setCurrentPlay } = useContext(playerContext)
    const handleClick = (e) => {
        setCurrentPlay(e);
        navigate("/player")
    }
    return (
        <div id={styles.wrapper} >
            <h1>{tweetShorts.heading}</h1>
            <p>{tweetShorts.desc}</p>

            <div className={styles.cardWrapper} >
                {
                    tweetShorts?.cardData.map((e, ind) => {
                        return <div className={styles.card} key={ind} onClick={() => handleClick(e)}>
                            <img src={e.img} alt="Course Image" />
                            <div>
                                <div>
                                    {
                                        e.type.map((ele, index) => {
                                            return <span key={index} className={styles.type}>{ele}</span>
                                        })
                                    }
                                </div>
                                <h1>{e.heading}</h1>
                                <p>{e.name}</p>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default TweetCard