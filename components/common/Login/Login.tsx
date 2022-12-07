import React, { useEffect, useState } from 'react'
import s from "./Login.module.scss"
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { UserName,Email,Password } from '../Atom'
import Card from "../card"

const Login = () => {
const[name,setName] = useState("")
const[ pword,setPword] = useState("")
const [data,setData] = useState([])

 const [userName,setuserName] = useRecoilState(UserName)
 const [password, setpassword ] =useRecoilState(Password)
 const [email, setemail ] =useRecoilState(Email)
 const [page,setPage] =useState("login")

 useEffect(()=>{
console.log(page)
 },[page])

 const handleClick = async ()=>{
    let loginBox  = document.querySelector(".login")
    
     if(name===userName&& pword=== password){
        axios.get('https://dummyjson.com/products')
      .then(function (response) {
    // handle success
       setData(response.data.products)

       console.log(response.data.products);
        })
        .catch(function (error) {
    // handle error
       console.log(error);
  })
     }
 }

 const appenData = ()=>{
       let container = document.querySelector(".container")
       
 }

  return (
    < div>
        <div style={{display:page==="login"?"block":"none"}} className={s.login} >
            <h1>Login</h1>
           <input onChange={(e)=>setName(e.target.value)}  type="name"  placeholder='UserName..' />
           <input onChange={(e)=>setPword(e.target.value)}   type="password"  placeholder='Password' />
           <button onClick={handleClick}  >Login</button>
           <p>If new Please <span onClick={()=>setPage("SignUp")} >Sign-up</span> first</p>
        </div>

        <div style={{display:page==="SignUp"?"block":"none"}} className={s.login} >
            <h1>Sign-Up</h1>
           <input onChange={(e)=>setuserName(e.target.value)}  type="name"  placeholder='UserName..' />
           <input onChange={(e)=>setemail(e.target.value)}  type="name"  placeholder='Email' />
           <input onChange={(e)=>setpassword(e.target.value)}   type="password"  placeholder='Password' />
           <button onClick={()=>setPage("login")}  >Sign-Up</button>
           <p>If new Please <span onClick={()=>setPage("SignUp")} >Sign-up</span> first</p>
        </div>
        <div className={s.container}> {data.map(()=><Card/>)} </div>
    </div>
    
  )
}

export default Login