import React from 'react'

function ProductsList ({addTocart}) {
    const products=[
        {id:1, name:"T-shirt", Price:2000},
        {id:2, name:"pants", Price:2800},
        {id:3, name:"shirt", Price:5000},
        {id:4, name:"shorts", Price:200}
        
    ]
    // console.log(products);
   
  return (
    <div>
      <h2>Items</h2>
     <ul>
     {products.map((product)=>(
        <li key={product.id}>
            {product.name} - {product.Price} $
            <button onClick={()=>addTocart(product)}>Add</button>
        </li>
      ))}
     </ul>
    </div>
  )
}

export default ProductsList
