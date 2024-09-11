import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    const [count, setcount] = useState(0)
    //() => {} is the callback function
    //[] is the dependency array
    useEffect(() => {
        console.log("useEffect")
    }, [count])
    

  return (
    <div>
        <button onClick={()=>{setcount(count+1)}}>Click</button>
        {count}
    </div>
  )
}
