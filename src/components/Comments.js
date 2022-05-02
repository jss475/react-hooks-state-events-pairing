import React, {useState} from 'react'

function Comments({video}){
    const [hide, setHide] = useState(false)

    let comments = video.comments
    let listComments = comments.map(comment => {
        return (
            <>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </>
        )
    })

    function handleClick(){
        setHide(hide => !hide)
    }

    

    return (
        <>
            <button onClick = {handleClick}>{hide ? 'Show Comments' : 'Hide Comments'}</button>
            <br />
            <br />
            <div style = {{visibility: hide ? 'hidden' : 'visible'}}>
                <h2>{video.comments.length} Comments</h2>
                {listComments}
            </div>
            
        </>
    )
}

export default Comments