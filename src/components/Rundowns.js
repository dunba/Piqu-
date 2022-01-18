import React from 'react'
import showList from './showList'
import { NavLink } from 'react-router-dom'

const Rundowns = () => {
    return (
        <div className="flexcontainer">
            Rundowns
            {showList.map((show, key) => (
                <div key={show.showid}>
                    <ul>
                        <li>
                            <NavLink to={`/rundowns/${show.showid}`}>{show.value}</NavLink>
                        </li>
                    </ul>
                </div>
            ))
            }
        </div >
    )
}

export default Rundowns
