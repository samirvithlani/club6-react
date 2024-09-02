import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const UpdateUser = () => {
    const id = useParams().id
    const {register,handleSubmit} = useForm({
       defaultValues:async()=>{
            const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
            console.log("res",res.data.data)
            return res.data.data
            // return {
            //     name:res.data.data.name,
            //     email:res.data.data.email,
            //     age:res.data.data.age,
            //     isActive:res.data.data.isActive
            // }
       }
    })
    const submitHandler = async(data)=>{
        console.log("data,...",data)
        //remove id
        delete data._id
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        console.log("update res",res)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name")} />
            </div>
            <div>
                <label>EMAIL</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <input type="submit"  value={"submit"}/>
            </div>
        </form>
    </div>
  )
}
