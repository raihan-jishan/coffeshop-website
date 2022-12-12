import React from 'react'
import Data from "../../Data/Aboutdata";
import Button from '../Button';
const About = () => {
  return (
    <div>
      <section className="about" id="about">

  <h1 className="heading"> <span>about</span> us </h1>

    {Data.map((item)=> {
        return(

     
    <div className="row">
 
   
    <div className="image">
        <img src={item.image} alt="" />
    </div>
 

    <div className="content">
        <h3>{item.title2}</h3>
        <p>{item.para}</p>
        <p>{item.para2}</p>
       <Button>{item.button2}</Button>
    </div>

</div>

)
})}

      </section>
    
    </div>
  )
}

export default About
