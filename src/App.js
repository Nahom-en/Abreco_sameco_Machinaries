import './style.css';
import Products from './components/products-card.jsx';
import products_list from './products.js';

function App() {
  return (
    <div className="App">
      {products_list.map((product) => (
        <Products 
          key={product.id}  
          img={product.img}
          alt={product.alt}  
          name={product.name}
        />
      ))}
    </div>
  );
}

export default App;
