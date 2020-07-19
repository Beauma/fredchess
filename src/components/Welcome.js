import React from 'react'

export const Welcome = ({ name, turn }) => {
    //console.log("Welcome component")
    //console.log(name)
    //console.log(turn)
    if(turn) {
    return (
        <div>
            <h1>Welcome, {name}</h1>
            <h3>It is your turn.</h3>
        </div>
        )
    } else {
        return (
        <div>
            <h1>Welcome, {name}</h1>
        </div>
        )
    }
}