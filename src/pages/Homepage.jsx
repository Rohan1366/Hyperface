import React from 'react'
import Header from '../components/Homepage/Header'
import MiddleSection from '../components/Homepage/MiddleSection'
import TweetCard from '../components/Homepage/TweetCard'
import styles from "./Homepage.module.css"
const Homepage = () => {
    return (
        <div id={styles.wrapper}>
            <Header />
            <MiddleSection />
            <TweetCard />
        </div>
    )
}

export default Homepage