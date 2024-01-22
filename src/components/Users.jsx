import React from 'react';
import users from '../users.json'
import { useState } from 'react'


const users = () => {
    const rdm = Math.floor(Math.random() * users.length)
    const [counter, setCounter] = useState(rdm)
    const increment = () => {
        const rdm = Math.floor(Math.random() * users.length)
        setCounter(rdm)
    }
    const colors = ['#641443', '#010c02','#1c0c0d','#6a96b0','#95eaec']
    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`
        return (
            
                <div className='card2' style={{color: colors[randomColor]}}>
                <h1><i class="fa-solid fa-user"></i>{users[counter].name.title} {users[counter].name.first} {users[counter].name.last}</h1>
                <ul>
                    <li><i class="fa-solid fa-phone"></i> {users[counter].phone}</li>
                    <li><i class="fa-solid fa-envelope"></i> {users[counter].email}</li>
                    <li><i class="fa-solid fa-location-crosshairs"></i> {users[counter].location}</li>

                </ul>
                <button onClick={increment}><i class="fa-light fa-diagram-next"></i></button>

            </div>
            
        );
    };

    export default Users;