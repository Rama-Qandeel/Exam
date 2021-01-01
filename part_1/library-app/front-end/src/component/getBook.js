import React, { usestate ,useEffect} from 'react'
import axios from "axios"

const getBook =()=> {
const[getBook,setGetBook]=usestate([])
        
useEffect=(()=>{
    getBook()
},[])   
 

const getBook=()=>{
  
    axios.get("http://localhost:5000/library")
    .then((response)=>{
        setGetBook(response.data)
    })
    .catch((error)=>{
        throw error
    })
        } 

const dalete=(e)=>{

    axios.delete(`http://localhost:5000/library/books/:${e.target.value}`)
    .then((response)=>{
        getBook()
    })
    .catch((error)=>{
        throw error
    })
}



   
        const get=getBook.map((book)=>{
            <div>
                <h2>title:{book.title}</h2>
                <p>author:{book.author}</p>
                <button onClick={dalete} value={book.book_id}>Delete</button>
            </div>
        })
   
   return (
            <div>
              {get}  
            </div>
        
   )
}

export default getBook
