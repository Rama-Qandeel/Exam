import React, { usestate } from 'react'
import axios from "axios"

const getSpesificBook =(props)=>{
    const {id}=props.match.params
    const[getBook,setGetBook]=usestate([])

    const getBook=()=>{
        axios.get(`http://localhost:5000/library/:${id}`)
        .then((response)=>{
            setGetBook(response.data)
        })
        .catch((error)=>{
            throw error
        })
            }
       
    
    return (
            <div>
                 <h2>title:{getBook[0].title}</h2>
                <p>author:{getBook[0].author}</p> 
            </div>
        )
    
}

export default getSpesificBook
