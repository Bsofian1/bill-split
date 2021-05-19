import React from "react"


const Header = (props) => {
    return(
        <h1>Hello {props.user.name}</h1>
    )
}

export default Header