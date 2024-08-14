import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getApiCall = async ()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("axios res",res)
        console.log("api response..",res.data)
        console.log("message",res.data.message)
        console.log("data..",res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)


    }
  return (
    <div>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getApiCall()}}>GET</button>
        {message}
        <ul>
            {
                users?.map((user)=>{
                    return(
                        <li>{user._id} - {user.name}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
