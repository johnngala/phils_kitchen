import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <div className = "notfound">
            <img src = "imgs/notfound.jpg" alt ="not found" className = "notfound_image"/>
            <p className = "notfound_info" >
                Sorry.There was an error loading this page.Navigate back <Link to = "/">Home</Link>
            </p>
        </div>
    )
}

export default NotFound
