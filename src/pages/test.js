import React, { useEffect, useState } from 'react'

export default function Test() {
    const [formValue, setFormValue] = useState({});
    const [users, setUsers] = useState([]);
    const formHandler = (e) => { 
        setFormValue ({
            ...formValue,
            [e.target.name] : e.target.value
        }) 
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const responsce = await fetch ('http://localhost:8080/demo',{
            method:'POST',
            body:JSON.stringify(formValue),
            headers:{
                'Content-Type': 'application/json',
            }
        })
        const data = await responsce.text();
        console.log(data);
    }
    const getUsers = async () => { 
        const responsce = await fetch ('http://localhost:8080/demo',{
            method:'GET',
        })
        const data = await responsce.json();
        setUsers(data); 
    }
    useEffect (() => {
        getUsers();
       
    },[]);
  return (
    <div className='container'> 
       <form onSubmit={handleSubmit}>
            <div className='mb-15'><input type='text' name='userName' placeholder='UserName' onChange={formHandler}></input></div>
            <div className='mb-15'> <input type='text' name='Password' placeholder='Password' onChange={formHandler}></input></div>
            <div> <input type='submit' id='submi' value={'Submit'}></input></div>
        </form>
        <div>
                <ul>
                    {users.map(user =>
                        <li key={user._id}>{user.userName}, {user.Password} </li>
                    )}
                </ul>
            </div>
    </div>
  )
}
