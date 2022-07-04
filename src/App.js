import './App.css';
import {useState} from 'react';


function App() {
  const[ldata,setData]=useState([]);
  const getData=async()=>{
 const mydata=await fetch('https://api.giphy.com/v1/gifs/search?api_key=PA6piFvreB2VIxTeIxyhvcaCr1aReA9x&q=cheeseburgers&fbclid=IwAR3kvoeFzH2hJrb1uQgzGy0M4XxU19LoU_bOU5H_fT_hPoPaNNF5IgIqpy8');
 const finaldata=await mydata.json();

 setData(finaldata.data);

  }
 getData();
  return (
  <>
  {ldata.map(({id,type},i)=>(
  <div key={i}>
    <p>{type}</p>
    <img src={ `https://media.giphy.com/media/${id}/giphy.gif`} alt="funny GIF"  />

  </div>

  ))}
 </>

  );
}

export default App;
