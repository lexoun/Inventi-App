import React from 'react'

const Button = ({name}) => {
    return (
        <li>
            {name}
        </li>
    )
}



const ButtonGroup = () => {
    return (
        <ul id="navigation">
            <Button name={"1"} />
            <Button name={"2"} />
            <Button name={"3"} />
            <Button name={"4"} />
            <Button name={"5"} />
        </ul>
    )
}

export default ButtonGroup
