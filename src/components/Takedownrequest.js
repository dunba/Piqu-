import React from 'react'
import Select from 'react-select'
import showList from "./showList";


const Takedownrequest = () => {
    return (
        <div>
            <form>
                <b>Show:</b>
                <br />
                <Select placeholder={'Filter'} options={showList} />
                <br />
                <b>Url</b>
                <br />
                <input type={'text'} />
                <br />
                <b>Notes:</b>
                <br />
                <textarea id="hedtextarea" />
                <br />
                <b>Deadline:</b>
                <br />
                <input type="date" />

                <br />
                <div className="submitdiv">
                    {" "}
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Takedownrequest
