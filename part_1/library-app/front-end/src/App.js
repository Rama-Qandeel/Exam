import React, { useState } from 'react';
import {Route,BrowserRouter as Router} from "react-router-dom"
import './App.css';
import './component/Book';
import './component/getBook';
import './component/getSpesificBook';
import getSpesificBook from './component/getSpesificBook';
const App =()=> {

  
  
    return (
    <Router>
    
      <div>
      <Route  path="/">
      <h1>hello </h1>
        </Route>
       
        <Route exact path="/library/create_book">
          <Book/>
        </Route>

        <Route exact path="/library">
          <getBook/>
        </Route>
{/* 
        <Route path="/library/:id">
         <getSpesificBook/>
        </Route> */}
<Route exact path="/library/:book_id"
render={(props)=>{
<getSpesificBook {...props}/>
}}/>

      </div>
      </Router>
    );
  
}
export default App;