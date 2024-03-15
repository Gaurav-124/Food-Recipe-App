import React from 'react';
import style from './Components/recipe.module.css';
function Recipe({title,cal,img,ingrident}) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingrident.map((ingredient,it)=>{
          return (
            <ol key = {it}>
              {ingredient.text}
            </ol>
          )
        })}
      </ol>
      <p> calories : {cal}</p>
      <img className= {style.image} src={img} alt="" />
    </div>
  )
}

export default Recipe;
