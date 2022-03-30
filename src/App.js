import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [users,setUsers]=useState([]);
  const nameRef = useRef()
  const emailRef=useRef()

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  const handleSubmit=e=>{
    e.preventDefault();
    const name=nameRef.current.value;
    const email=emailRef.current.value;
    const newUser = {name:name,email:email}

    fetch('http://localhost:5000/users',{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newUser)
  })
  .then(res=>res.json())
  .then(data=>{
    const addedUser= data;
    const newUser= [...users,addedUser]
    setUsers(newUser)
    console.log(data)
  })
  }
  console.log(users)
  return <div className="App">
    <h1>totoal users found {users.length}</h1>
    <p>add a user</p>
    <form onSubmit={handleSubmit}>
      <input required ref={nameRef} placeholder="name" type="text" />
      <input required ref={emailRef} placeholder="email" type="email" />
    <input type="submit" value="Add user" />
    </form>
    <ul>
    {users.map(user=><li> <h2>{user.id+1}: name:{user.name}, email:{user.email}</h2> </li> )}
    </ul>
  </div>;
}

export default App;
