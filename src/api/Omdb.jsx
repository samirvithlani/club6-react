import axios from 'axios'
import React, { useState } from 'react'

export const Omdb = () => {
    const [movies, setmovies] = useState([])
    const getMovieData = async () => {
        const url ="http://www.omdbapi.com"
        const apikey = "add your key"

        const res = await axios.get(url,{
            params:{
                "apikey":apikey,
                "i":"tt0372784"
            }
        })
        console.log(res.data)
        //setmovies(res.data.Search)

    }
  return (
    <div>Omdb
        <button onClick={getMovieData}>Get Movie Data</button>
        <ul>
            {
                movies?.map((movie)=>{
                    return <li>
                        <img src={movie.Poster} alt=""/>
                        {movie.Title} {movie.imdbID}</li>
                })
            }   
        </ul>
    </div>
  )
}
