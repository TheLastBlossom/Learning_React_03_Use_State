import React, { useEffect } from 'react'

export const Greetings = () => {
    useEffect(()=>{
        alert("Component Greetings created");
        return ()=>{alert("Component greetings destroyed");};
    },[]);
    return (
        <div>
            <hr/>
            <h3>This is the component Greetings</h3>
        </div>
    )
}
