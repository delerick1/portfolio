import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const UsersApi = () => {
    const [user, setUser] = useState({})
    const rdm = Math.floor(Math.random() * user.length)
    useEffect(() => {
        axios.get('https://randomuser.me/api/ ')
            .then(res => setUser(res.data.results))

    }, [])
    const changeUser = () => {
        axios.get("https://randomuser.me/api/ ")
        .then(res => setUser(res.data.results))
    }
    console.log(user)
    return (
        <div className='App'>
            <h1>{user[rdm]?.name.title} {user[rdm]?.name.first} {user[rdm]?.name.last}</h1>
            <img src={user[rdm]?.picture.large}></img>
            <ul>
                <li><i class="fa-solid fa-envelope"></i>{user[rdm]?.email}</li>
                <button onClick={changeUser}>change</button>
            </ul>
        </div>
    );
};

export default UsersApi;