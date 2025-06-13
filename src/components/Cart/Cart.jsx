'use client';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Carrinho</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Preço: R$ {item.price.toFixed(2)}</p>
          <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} />
          <button onClick={() => removeFromCart(item.id)}>Remover</button>
        </div>
      ))}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;