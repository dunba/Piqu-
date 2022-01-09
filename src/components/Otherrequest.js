import React from 'react'

const Otherrequest = () => {
    return (
        <div>
            <form>

                <b>Notes:</b>
                <br />
                <textarea id="hedtextarea" />
                <br />

                <br />
                <b>Attachment:</b>
                <br />

                <input type="file" />
                <br />
                <div className="submitdiv">
                    {" "}
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Otherrequest
