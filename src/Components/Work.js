import React, {useState, useEffect} from 'react'


const Work = (props) => {

    const [message, setMessage] = useState("This is functional state");

    useEffect(()=>{
        document.title = `React ${message}`
    })

    const changeMessage = () => {
        setMessage("Now we change the state");
    }

    return (
        <div>
            <h1>This is a work component {message} {props.text}</h1>
            <button onClick={()=> changeMessage()}>Click Me</button>
        </div>
    )
}

export default Work
