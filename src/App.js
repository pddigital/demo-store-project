import './App.scss';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import { CartProvider } from './state/cartProvider';
import { ProductProvider } from './state/productProvider';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <ProductDisplay />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
