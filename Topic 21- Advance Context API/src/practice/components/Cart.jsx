import {
  useCartContext,
  useThemeContext,
} from "../../practice/context/contextUtils";
import Button from "./Button";
import { useState, useEffect } from "react";

const Cart = () => {
  const { cart, setCart } = useCartContext();
  const { theme } = useThemeContext();
  const [products, setProducts] = useState([]);
  const isDark = theme !== "white";
  const cardBg = isDark ? "#262626" : "#ffffff";
  const cardBorder = isDark ? "1px solid #404040" : "1px solid #e5e5e5";
  const subText = isDark ? "#a3a3a3" : "#666666";

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "16px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-shopping-basket-icon lucide-shopping-basket"
        >
          <path d="m15 11-1 9" />
          <path d="m19 11-4-7" />
          <path d="M2 11h20" />
          <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
          <path d="M4.5 15.5h15" />
          <path d="m5 11 4-7" />
          <path d="m9 11 1 9" />
        </svg>{" "}
        Products
      </h2>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: cardBg,
                border: cardBorder,
                borderRadius: "12px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  padding: "8px",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <h4
                style={{
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "1.3",
                  height: "36px",
                  overflow: "hidden",
                }}
              >
                {product.title}
              </h4>

              <p style={{ margin: 0, fontWeight: "bold", fontSize: "18px" }}>
                ${product.price}
              </p>

              <Button onClick={() => addToCart(product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-plus-icon lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>{" "}
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      }

      <hr
        style={{
          margin: "32px 0",
          borderColor: isDark ? "#404040" : "#e5e5e5",
        }}
      />
      <h2 style={{ marginBottom: "16px" }}>Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p style={{ color: subText }}>Your cart is empty</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: cardBg,
                border: cardBorder,
                borderRadius: "10px",
                padding: "10px 16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <span style={{ fontSize: "14px" }}>{item.title}</span>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <span style={{ fontWeight: "bold" }}>${item.price}</span>
                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ marginTop: "24px", textAlign: "right" }}>
        Total: ${total.toFixed(2)}
      </h3>
    </div>
  );
};

export default Cart;
