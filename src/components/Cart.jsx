const cartItems = [
  {
    id: 1,
    name: "Farmhouse Pizza",
    restaurant: "Bella Bistro",
    description: "Wood-fired crust, mozzarella, basil, roasted veggies.",
    price: 349,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Crispy Chicken Bowl",
    restaurant: "Green Grill",
    description: "Herb rice, charred chicken, avocado, spicy aioli.",
    price: 279,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  },
];

const recommendedFoods = [
  {
    name: "Truffle Pasta",
    restaurant: "Rustic House",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Berry Smoothie",
    restaurant: "Pure Juice Co.",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Loaded Burger",
    restaurant: "The Stack House",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mango Tango Bowl",
    restaurant: "Sunrise Cafe",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const deliveryFee = 45;
  const tax = Math.round(subtotal * 0.08);
  const discount = 60;
  const grandTotal = subtotal + deliveryFee + tax - discount;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="cart-page">
      <section className="cart-shell">
        <div className="cart-main">
          <div className="cart-header">
            <div>
              <p className="cart-kicker">Your basket</p>
              <h1>Cart</h1>
            </div>
            <span className="cart-count">{totalItems} items</span>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item-card" key={item.id}>
                <div className="cart-item-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-card__image"
                  />
                </div>
                <div className="cart-item-card__content">
                  <div className="cart-item-card__top">
                    <div>
                      <h3>{item.name}</h3>
                      <p className="cart-item-card__restaurant">
                        {item.restaurant}
                      </p>
                      <p className="cart-item-card__description">
                        {item.description}
                      </p>
                    </div>
                    <div className="cart-item-card__price">₹{item.price}</div>
                  </div>

                  <div className="cart-item-card__actions">
                    <div className="cart-quantity">
                      <button
                        type="button"
                        className="cart-qty-btn"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        className="cart-qty-btn"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button type="button" className="cart-remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="cart-recommended">
            <div className="cart-section-title">
              <h2>Recommended for you</h2>
              <p>Pair your order with premium favorites.</p>
            </div>
            <div className="cart-recommended__grid">
              {recommendedFoods.map((food) => (
                <article className="cart-recommended-card" key={food.name}>
                  <img src={food.image} alt={food.name} />
                  <div className="cart-recommended-card__body">
                    <h3>{food.name}</h3>
                    <p>{food.restaurant}</p>
                    <div className="cart-recommended-card__footer">
                      <span>₹{food.price}</span>
                      <button
                        type="button"
                        className="cart-btn cart-btn--small"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="cart-summary">
          <div className="cart-summary__card">
            <div className="cart-summary__header">
              <h2>Order Summary</h2>
              <p>Secure checkout</p>
            </div>

            <div className="cart-summary__list">
              <div className="cart-summary__row">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <strong>₹{subtotal}</strong>
              </div>
              <div className="cart-summary__row">
                <span>Delivery Fee</span>
                <strong>₹{deliveryFee}</strong>
              </div>
              <div className="cart-summary__row">
                <span>Taxes</span>
                <strong>₹{tax}</strong>
              </div>
              <div className="cart-summary__row cart-summary__row--discount">
                <span>Discount</span>
                <strong>-₹{discount}</strong>
              </div>
            </div>

            <div className="cart-summary__promo">
              <input type="text" placeholder="Promo code" />
              <button type="button" className="cart-btn cart-btn--secondary">
                Apply
              </button>
            </div>

            <div className="cart-summary__total">
              <span>Grand Total</span>
              <strong>₹{grandTotal}</strong>
            </div>

            <div className="cart-summary__actions">
              <button
                type="button"
                className="cart-btn cart-btn--primary cart-btn--full"
              >
                Checkout
              </button>
              <button
                type="button"
                className="cart-btn cart-btn--secondary cart-btn--full"
              >
                Continue Shopping
              </button>
            </div>
          </div>

          <div className="cart-trust-badges">
            <div className="cart-badge">
              <span>🔒</span>
              <p>Secure Payment</p>
            </div>
            <div className="cart-badge">
              <span>⚡</span>
              <p>Fast Delivery</p>
            </div>
            <div className="cart-badge">
              <span>🥗</span>
              <p>Fresh Food Guarantee</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Cart;
