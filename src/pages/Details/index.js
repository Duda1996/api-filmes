import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import { APIKey } from "../../config/key"
import { Container, MovieList, Movie } from "./style"


function Details(){

    const { id } = useParams()
    const {movie, setMovie} = useState({})

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data =>  {
            console.log(data)
          //  setMovies(data.results)

        })


    }, [id])

   
    
    


  
    return(
         <h1> Title </h1>
      
    )

}
    
export default Details