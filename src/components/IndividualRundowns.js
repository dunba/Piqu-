import React from 'react'
import '../css/individualrundown.css'

const IndividualRundowns = ({ match }) => {
    console.log(match)
    return (
        <div className='rundownpopup'>
            <div className='mainrundown'>
                TEST PAGE
                {match.params.id}
            </div>

        </div>
    )
}

export default IndividualRundowns
