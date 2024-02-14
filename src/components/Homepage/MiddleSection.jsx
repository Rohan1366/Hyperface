import React from 'react'
import Card from './Card'
import { article, courses } from '../../data'

const MiddleSection = () => {
    return (
        <div>
            <Card data={courses} />
            <Card data={article} />
        </div>
    )
}

export default MiddleSection