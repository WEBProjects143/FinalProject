import React from "react";
import { useCart } from "../../../../Utils/CartContext"; // Adjust path as needed

const CartPage = () => {
  const { cart,removeCart} = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );


  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-primary">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "70px", height: "70px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity || 1}</td>
                  <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-end fw-bold">
                  Total:
                </td>
                <td colSpan="2" className="fw-bold">
                  ${totalPrice.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartPage;