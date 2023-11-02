import React, { useEffect, useState } from 'react'

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [load, setLoad] = useState(true);
    const [errors, setErrors] = useState("");
    function insertUsers() {
        const arrayUser = [
            { "id": 1, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" },
            { "id": 2, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" },
            { "id": 3, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" },
            { "id": 4, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://reqres.in/img/faces/10-image.jpg" },
            { "id": 5, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "https://reqres.in/img/faces/11-image.jpg" }
        ]
        setUsers(arrayUser);
    }
    function insertUserFromAjaxRequest() {
        fetch("https://reqres.in/api/users?page=1").then(
            response => response.json()
        ).then(
            jsonResponse => setUsers(jsonResponse.data)
            , error => console.log("Something went wrong during the request!")
        );
    }
    async function insertUserFromAjaxRequestAsync() {
        try {
            const reponse = await fetch("https://reqres.in/api/users?page=1");
            const { data } = await reponse.json();
            setTimeout(()=>{
                setUsers(data);
                setLoad(false);
            },1000);   
        } catch (error) {
            setErrors(error.message);
        }        
    }
    useEffect(() => {
        // insertUsers();
        // insertUserFromAjaxRequest();
        insertUserFromAjaxRequestAsync();
    }, []);
    if(errors !== ""){
        return <div>{errors}</div>;
    }if (load) {
        return <div>
            <span>Loading...</span>
        </div>;
    }else {
        return (
            <div>
                <hr />
                <h2>List of user</h2>
                <ol>
                    {
                        users.map((user) => {
                            return <li key={user.id}>{user.email}</li>;
                        })
                    }
                </ol>
            </div>
        );
    }
}
