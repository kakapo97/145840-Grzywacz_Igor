import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = props => {
    const user_ID = props.match.params.id;

    const [user, setUser] = useState(null)

    const getUser = async () => {
        let array = [];
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((resp) => {
                resp.data.map(users => {
                    if (users.id == user_ID)
                        setUser(users)
                })
            });
    };

    useEffect(() => {
        getUser();
    }, [])
    console.log(user)
    return (
        <div>
            User
            {user && (
                <div>

                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                    <p>{user.company.name}</p>
                    <p>
                        <p>{user.address.street}</p>
                        <p>{user.address.suite}</p>
                        <p>{user.address.city}</p>
                        <p>{user.address.zipcode}</p>
                    </p>
                </div>
            )}
        </div>
    )
}

export default User;