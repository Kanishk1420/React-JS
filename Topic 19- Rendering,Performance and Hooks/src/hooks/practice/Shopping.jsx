import { memo, useCallback, useMemo, useState } from "react";

const ProductList = memo(({ products, onAddToCart }) => {
  console.log("ProductList Rendered!");
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id} style={{ padding: "10px 0" }}>
          {p.name} - ${p.price}{" "}
          <button onClick={() => onAddToCart(p.id)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
});
const Shopping = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [products] = useState([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 699 },
    { id: 3, name: "Tablet", price: 499 },
  ]);
  // The Heavy Calculation (Needs optimization!)
  const sortedProducts = useMemo(() => {
    console.log("Running expensive sorting algorithm...");
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
      ("");
    }
    return [...products].sort((a, b) => b.price - a.price);
}, [products]
);

  // The function prop (Needs optimization!)
  const handleAddToCart = useCallback((id) => {
    console.log(`Added product ${id} to cart!`);
  }, []);

  return (
    <div
      style={{
        background: isDarkTheme ? "#333" : "#fff",
        color: isDarkTheme ? "#fff" : "#000",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2>Tech Store Dashboard</h2>

      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle Theme</button>

      <ProductList products={sortedProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Shopping;
