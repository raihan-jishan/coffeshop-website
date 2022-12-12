import React from 'react'
import Data from "../../Data/Blogdata";
import Button from '../Button';
const Blog = () => {
  return (
    <div>
      <section class="blogs" id="blogs">

<h1 class="heading"> our <span>blogs</span> </h1>

<div class="box-container">
    
        {Data.map((item) => {
            return(
                <>
                
             
          
    <div class="box">
        <div class="image">
            <img src={item.image} alt="" />
        </div>
        <div class="content">
            <a href="#" class="title">{item.title}</a>
            <span>{item.postInfo}</span>
            <p>{item.post}</p>
            <Button>read more</Button>
        </div>
    </div>


    </>
    )
    })}
    
</div>

      </section>

    </div>
  )
}

export default Blog
