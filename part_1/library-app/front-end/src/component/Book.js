import React, { useState } from 'react';
import axios from "axios"
const Book =()=> {
  const [title,setTitle] =useState("")
const [author,setAuthor] =useState("")
const [pages,setPages] =useState("")
const [publisher,setPublisher] =useState("")
const [published_at,setPublished_at] =useState("")

const handlechange=(e)=>{
if(e.target.name==="title"){
    setTitle(e.target.value)
}
if(e.target.name==="author"){
    setAuthor(e.target.value)
}
if(e.target.name==="pages"){
    setPages(e.target.value)
}
if(e.target.name==="publisher"){
    setPublisher(e.target.value)
}

if(e.target.name==="published_at"){
    setPublished_at(e.target.value)
}
}
    const submite=()=>{
const data={
    title,
    author,
    pages,
    publisher,
    published_at
}
axios.post("http://localhost:5000/library/create_book",data)
.then((response)=>{

})
.catch((error)=>{
    throw error
})
    }

return (
            <div>
             <input type="text"
             name="title"
             placeholder="enter title"
             value={title}
             onChange={handlechange}/>  

<input type="text"
             name="author"
             placeholder="enter author"
             value={author}
             onChange={handlechange}/>  

<input type="text"
             name="pages"
             placeholder="enter pages"
             value={pages}
             onChange={handlechange}/>  
             <input type="text"
             name="publisher"
             placeholder="enter publisher"
             value={publisher}
             onChange={handlechange}/>  

<input type="text"
             name="published_at"
             placeholder="enter published_at"
             value={published_at}
             onChange={handlechange}/> 

             <button onClick={submite}>Add</button> 
            </div>
        )
    
}

export default Book
