import React from "react";

function Cart({cart, removeitem}){
  // localStorage.setItem('site',JSON.stringify());
  const countbypro = cart.reduce((acc, product) => {
    acc[product.id] = (acc[product.id] || 0) + 1;
    return acc;
  }, {});
  const cartitem = Object.keys(countbypro).map((productid) => {
    const product = cart.find((p) => p.id === parseInt(productid))
    return {
      ...product,
      count: countbypro[productid],
    };
  });
  const totalPrice = cart.reduce((acc, product) => acc + product.Price, 0);
  return (
    <div>
      <h2>cart</h2>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {cartitem.map((item) =>{
            return (
                <li key={item.i}>
                  {item.name} - {item.Price}$ + {item.count}
                  <button onClick={( ) => removeitem(item.id)}>Remove</button>
                </li>
              )
          })}
          <li id="total">Total :{totalPrice}$</li>
        </ul>
      )}
    </div>
  );
};
export default Cart







