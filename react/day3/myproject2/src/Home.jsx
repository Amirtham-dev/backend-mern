import React from 'react'
import ProductCard from "./ProductCard";

function Home(){
    return(
    <div>
            <h2>this is the home page</h2>
            <p> this is the home page content</p>
    
      <h1>Products</h1>

      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    );


}

export default Home;
