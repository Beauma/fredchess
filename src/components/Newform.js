import React from 'react'

export const Newform = props => {
    //console.log("Newform")
    //console.log(props)

    return (
        <form>
            <label>
                <h3>Move: </h3>
                <input type="text"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

