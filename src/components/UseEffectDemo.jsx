import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    const [count, setcount] = useState(0)
    //() => {} is the callback function
    //[] is the dependency array
    useEffect(() => {
        console.log("useEffect")
    }, [count])
    

    const [array, setarray] = useState([])
    const [users, setusers] = useState([{
      id:1,
      name:"amit"
    },
    {
      id:2,
      name:"sumit"
    },
    {
      id:3,
      name:"ramit"
    }
    ])
  return (
    <div>
        {/* <button onClick={()=>{setcount(count+1)}}>Click</button>
        {count} */}
        <ul>
          {
            users.map((user) => {
              return <div>
                <li key={user.id}>{user.name}</li>
                <input type='checkbox' onChange={(e) => {
                  if(e.target.checked){
                    setarray([...array, user])
                  }else{
                    setarray(array.filter((item) => item.id !== user.id))
                  }
                }}/>
              </div>
            })
          }
        </ul>
        <ul>
          {
            array.map((user) => {
              return <li key={user.id}>{user.name}</li>
            })
          }
        </ul>
    </div>
  )
}
