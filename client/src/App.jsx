import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image || 'https://via.placeholder.com/300'} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [products, setProducts]     = useState([]);
  const [search, setSearch]         = useState('');
  const [loading, setLoading]       = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/products?search=${search}`)
      .then(r => r.json())
      .then(data => { setProducts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [search]);

  return (
    <div className="app">
      <header>
        <h1>ðŸ›’ ShopHub</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </header>
      <main>
        {loading ? <p>Loading...</p> : (
          <div className="products-grid">
            {products.map(p => <ProductCard key={p._id} product={p} />)}
          </div>
        )}
      </main>
    </div>
  );
}
