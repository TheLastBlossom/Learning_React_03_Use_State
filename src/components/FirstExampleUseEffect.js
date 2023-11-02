import React, { useEffect } from 'react'
import { useState } from 'react'
import { Greetings } from './Greetings';

export const FirstExampleUseEffect = () => {
    const [name, setName] = useState("John");
    const [username, setUserName] = useState("soma123");
    const [counter, setCounter] = useState(1);
    function changeName(e){        
        setName(e.target.value);
    }
    function changeUserName(e){        
        setUserName(e.target.value);
    }
    // useEffect(()=>{
    //     console.log("A change has happened in one of the states");
    // });
    // useEffect(()=>{
    //     console.log("This only executes after initializing the app for the first time");
    // },[]);
    useEffect(()=>{
        setCounter(username.length);
        console.log("This only executes after a change in the state of username");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[username]);   

    return (
        <div>
            <h2>First example - Hook Use Effect</h2>
            <div>
                <span>Name: {name}</span>
                <br/>
                <span>Username: {username}</span>                
                <div className={counter< 10 ? 'counter' : 'counter counter-green'}>{counter}</div>                
                <input type='text' placeholder='Inset your name' onChange={e => changeName(e)}></input>
                <br/>
                <input type='text' placeholder='Inset a new username' onChange={e => changeUserName(e)}></input>
                {counter >20 && <Greetings/>}
            </div>
            <div>               
            </div>
        </div>
    )
}
