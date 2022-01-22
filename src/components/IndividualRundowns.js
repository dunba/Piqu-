import React from 'react'
import '../css/individualrundown.css'

const IndividualRundowns = ({ match }) => {
    console.log(match)
    return (

        <div className="flexcontainer">
            TEST PAGE
            {match.params.id}

        </div>
    )
}

export default IndividualRundowns
