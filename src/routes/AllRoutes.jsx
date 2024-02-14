import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Player from '../pages/Player'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/player" element={<Player />} />
        </Routes>
    )
}

export default AllRoutes