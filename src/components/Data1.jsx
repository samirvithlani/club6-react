import React from 'react'
import { useSelector } from 'react-redux'

export const Data1 = () => {
    const state = useSelector((state) => state.data)
    console.log("state", state)
  return (
    <div>Data1</div>
  )
}
