import React from 'react'

export const Boards = ({ boards }) => {
    console.log("Board is:")
    console.log(boards)
    //var str = boards + ''
    //var array = str.split("/");
    //console.log(array);
    var url =  'http://www.fen-to-image.com/image/48/double/coords/' + boards; 
    //console.log(url)
    if (boards != false) {
        return (
            <div>
                <img src={url} />
            </div>
        )
    } else {
        return (
            <div>
                <h1>No active games</h1>
            </div>
        )
    }
}