import Navigation from '@/customer/components/Navigation/Navigation';
import HomePage from '@/customer/Pages/HomePage/HomePage';
import Footer from '@/customer/components/Footer/Footer';
import Product from '@/customer/components/Product/Product';
import ProductDetails from '@/customer/components/ProductDetails/ProductDetails';
import Cart from '@/customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
