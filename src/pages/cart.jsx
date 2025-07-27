import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/config'; // Ensure this path is correct for your firebase config

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const currentUser = auth.currentUser; // Get the currently logged-in user

  // Function to get Firebase ID Token
  const getIdToken = async () => {
    if (currentUser) {
      try {
        return await currentUser.getIdToken();
      } catch (err) {
        console.error("Error getting ID token:", err);
        setError('Failed to get authentication token. Please re-login.');
        return null;
      }
    }
    return null;
  };

  // Fetch cart items from backend
  const fetchCart = async () => {
    if (!currentUser) {
      setError('Please log in to view your cart.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');
    const token = await getIdToken();
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/v1/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Send Firebase ID token
        }
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to fetch cart items.');
      }

      const data = await response.json();
      setCartItems(data.items || []);
    } catch (err) {
      console.error("Error fetching cart from backend:", err);
      setError(err.message || 'Failed to load cart. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
    // Re-fetch cart if currentUser changes or on initial load
  }, [currentUser]); // Dependency array includes currentUser to re-fetch if user state changes

  // Function to add/update item in cart via backend API
  const updateCartItem = async (productId, productName, productPrice, change, selectedSize, selectedRoast) => {
    if (!currentUser) {
      setError('Please log in to modify your cart.');
      return;
    }

    setError('');
    const token = await getIdToken();
    if (!token) return;

    // Optimistic UI update (optional, but good for UX)
    const currentCart = [...cartItems];
    const existingItemIndex = currentCart.findIndex(
      item => item.productId === productId &&
              item.selectedSize === selectedSize &&
              item.selectedRoast === selectedRoast
    );
    let updatedItems = [];

    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += change;
      if (currentCart[existingItemIndex].quantity <= 0) {
        updatedItems = currentCart.filter(item => !(item.productId === productId && item.selectedSize === selectedSize && item.selectedRoast === selectedRoast));
      } else {
        updatedItems = currentCart;
      }
    } else if (change > 0) {
      updatedItems = [...currentCart, { productId, productName, productPrice, quantity: 1, selectedSize, selectedRoast }];
    } else {
      // Cannot decrease quantity of non-existent item
      return;
    }
    setCartItems(updatedItems); // Update UI immediately

    try {
      const response = await fetch('http://localhost:4000/api/v1/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId, productName, productPrice, quantity: change, selectedSize, selectedRoast }) // Send the change amount
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to update cart item.');
      }

      // If backend returns updated cart, use it (more robust)
      const data = await response.json();
      setCartItems(data.cart || []); // Backend should return the updated cart
    } catch (err) {
      console.error("Error updating cart via backend:", err);
      setError(err.message || 'Failed to update cart. Please try again.');
      fetchCart(); // Re-fetch actual state from backend on error
    }
  };

  const removeFromCart = async (productId, selectedSize, selectedRoast) => {
    if (!currentUser) {
      setError('Please log in to modify your cart.');
      return;
    }

    setError('');
    const token = await getIdToken();
    if (!token) return;

    // Optimistic UI update
    const filteredCart = cartItems.filter(
      item => !(item.productId === productId && item.selectedSize === selectedSize && item.selectedRoast === selectedRoast)
    );
    setCartItems(filteredCart);

    try {
      // Note: Backend remove API currently removes by productId only.
      // For specific item removal (by size/roast), backend API needs to be updated.
      // For now, this will remove ALL items with that productId regardless of size/roast.
      // If your backend supports removing by productId, size, and roast, adjust the URL/body.
      const response = await fetch(`http://localhost:4000/api/v1/cart/remove/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        // If backend needs size/roast for removal:
        // body: JSON.stringify({ selectedSize, selectedRoast })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to remove item from cart.');
      }

      const data = await response.json();
      setCartItems(data.cart || []);
    } catch (err) {
      console.error("Error removing from cart via backend:", err);
      setError(err.message || 'Failed to remove item from cart. Please try again.');
      fetchCart(); // Re-fetch actual state from backend on error
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Ensure productPrice is a number before multiplication
      const price = parseFloat(item.productPrice.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2); // Format to 2 decimal places
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-[var(--color-expiani)]">Loading Cart...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-raleway p-4 sm:p-6 lg:p-8 mt-30">
      <header className="text-center mb-8">
        <h1 className="font-playfair text-4xl font-bold text-[var(--color-main-heading)] mb-2">Your Shopping Cart</h1>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </header>

      {cartItems.length === 0 ? (
        <div className="text-center bg-[var(--color-white)] p-6 rounded-lg shadow-md">
          <p className="text-lg text-[var(--color-expiani)] mb-4">Your cart is empty. Start adding some delicious coffee!</p>
          <Link
            to="/shop" // Assuming your shop page route is /shop
            className="bg-[var(--color-h1)] hover:bg-[#a88656] text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="bg-[var(--color-white)] p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-[var(--color-white)] border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-semibold text-[var(--color-h1-some)] uppercase tracking-wider">
                  <th className="py-3 px-4 border-b">Product</th>
                  <th className="py-3 px-4 border-b">Options</th> {/* New column for options */}
                  <th className="py-3 px-4 border-b">Price</th>
                  <th className="py-3 px-4 border-b">Quantity</th>
                  <th className="py-3 px-4 border-b">Subtotal</th>
                  <th className="py-3 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={`${item.productId}-${item.selectedSize}-${item.selectedRoast}`} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-[var(--color-expiani)]">{item.productName}</td>
                    <td className="py-3 px-4 text-[var(--color-expiani)]">
                      {item.selectedSize && <div>Size: {item.selectedSize}</div>}
                      {item.selectedRoast && <div>Roast: {item.selectedRoast}</div>}
                    </td>
                    <td className="py-3 px-4 text-[var(--color-expiani)]">{item.productPrice}</td>
                    <td className="py-3 px-4 text-[var(--color-expiani)]">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateCartItem(item.productId, item.productName, item.productPrice, -1, item.selectedSize, item.selectedRoast)}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => updateCartItem(item.productId, item.productName, item.productPrice, 1, item.selectedSize, item.selectedRoast)}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[var(--color-expiani)]">
                      ${(parseFloat(item.productPrice.replace('$', '')) * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => removeFromCart(item.productId, item.selectedSize, item.selectedRoast)}
                        className="text-red-600 hover:text-red-800 font-semibold"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right text-xl font-bold text-[var(--color-main-heading)] mb-6">
            Total: ${calculateTotal()}
          </div>

          <div className="text-center">
            <Link
              to="/checkout" // Assuming your checkout page route is /checkout
              className="bg-[var(--color-h1)] hover:bg-[#a88656] text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-200 inline-flex items-center justify-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
