import React from 'react'

export const Welcome = ({ name }) => {
    console.log("Welcome component")
    console.log(name)
    return (
    <div>
        <h1>Welcome, {name}</h1>
        </div>
    )
}