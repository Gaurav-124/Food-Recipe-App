
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import image from './assets/4.png'
function App() {

  const id = process.env.REACT_APP_REACT_ID;
  const apiKey = process.env.REACT_APP_REACT_APP_API_KEY;

  const [res,setres] = useState([]);
  const [search,setsearch] = useState('');
  const [query,setquery] = useState('Noodle');

    useEffect(()=>{
      getrequest();
    },[query])

  const getrequest = async ()=>{
    const response  = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${apiKey}`);
    const data = await response.json();
      setres(data.hits);
    
  }
    const updatesearch = (e)=>{
      setsearch(e.target.value);
    };

    const getsearch = (e)=>{
      e.preventDefault();
      setquery(search);
      setsearch('')
    }

  return (
   <>
   <div className='App'>
   <div className='navbar'>
    <div className='leftpart'>
    <h2 className='h1'>Food Panda</h2>
    <img  className = 'img' src={image} alt="" />
    </div>
    <form onSubmit = {getsearch} >
      <input className='input' type="text"  value={search} onChange={updatesearch} placeholder='Enter here...'/>
      <button className='btn'>Search</button>
    </form>
   </div>
      <div className="menu">
      {res.map((item,index)=>{
          return (  
            <Recipe key={index}
            title = {item.recipe.label}
            cal={item.recipe.calories}
            ingrident = {item.recipe.ingredients}
            img = {item.recipe.image}/>
          )
      })}
      </div>
      </div>
   </>
  );
}

export default App;
