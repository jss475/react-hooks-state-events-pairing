import React from 'react'

function VideoComp({video}){
    console.log(video)
    return (
        <>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1>{video.title}</h1>
            <em>Views {video.views} | Uploaded {video.createdAt}</em>
            
        </>

    )
}

export default VideoComp
