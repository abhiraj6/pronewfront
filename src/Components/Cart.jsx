// import React from 'react';

// const CartPage = ({ Cart, removeFromCart }) => {
//   // Calculate total price
//   const totalPrice = Cart.reduce((total, item) => total + item.price, 0);

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           {cart.map((item, index) => (
//             <div key={index}>
//               <p>{item.name} - ${item.price}</p>
//               <button onClick={() => removeFromCart(index)}>Remove</button>
//             </div>
//           ))}
//           <p>Total: ${totalPrice}</p>
//           <button>Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
