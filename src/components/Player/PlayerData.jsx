import React, { useContext } from 'react'
import styles from "./PlayerData.module.css"
import { playerContext } from '../../contexts/playerContext/PlayerContext'

const PlayerData = () => {
    const { currentPlay } = useContext(playerContext)

    return (
        <div id={styles.wrapper}>
            <div>
                <div>
                    <img src={currentPlay.img} alt="player poster" />
                </div>
                <div>
                    <h1>{currentPlay.heading}</h1>
                    {/* We need more data to create this dynamic */}
                    <p>Chapter 1 - {currentPlay.chapterData[0].chapterName}
                    </p>
                    <div>
                        <p className={styles.view}>View Chapter Notes</p>
                        <p className={styles.view}>Attempt Quiz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerData