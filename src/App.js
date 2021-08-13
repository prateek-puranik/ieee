import './App.css';
import Data from './data.json';
import {useState} from 'react'


function App() {
  const[Search,setSearch]=useState('')
 
  return (
    <div className="App">
     <input type="text" placeholder=" Search..." onChange={(event)=>{setSearch(event.target.value)}}/>
    <div class="cards">
      {
        Data.filter((d)=>{
          if(Search=="")
          return d
          else if (d.name.toLowerCase().includes(Search.toLowerCase())||d.username.toLowerCase().includes(Search.toLowerCase()))
          return d
         
        
        }).map((d,index)=>{
          return <div>
           
            <div class="card text-warning bg-success mb-8" style={{width:'18rem',height:'25rem'}} >
  <img class="card-img-top" src={d.image} alt="Card image cap"/>
  <div class="card-body" style={{backgroundColor:'#00000'}}>
    <h5 class="card-title">{d.name}</h5>
    <p class="card-text">{d.username}</p>
  </div>
 
 
  
  </div>
</div>
  
  
        })
      }
    
    </div>
    </div>
  );
}

export default App;
