import React, {useState} from 'react'

function ThumbButtons({video}){

    const [upvote, setUpvote] = useState(video.upvotes)
    const [downvote, setDownvote] = useState(video.downvotes)

    function handleUpvote(){
        setUpvote((upvote) => upvote+1)
    }

    function handleDownvote(){
        setDownvote((downvote) => downvote +1)
    }

    return(
        <>
            <button onClick = {handleUpvote}>{upvote} 👍</button>
            <button onClick = {handleDownvote}>{downvote} 👎</button>
        </>

    )
}

export default ThumbButtons