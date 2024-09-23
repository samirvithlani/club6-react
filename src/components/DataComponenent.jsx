import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/DataSlice'

export const DataComponenent = () => {

    const dispatch = useDispatch()
    useEffect(() => {
      
        dispatch(fetchData())
      
    }, [])
    
  return (
    <div>
        <h1>Data Component</h1>
        
    </div>
  )
}
