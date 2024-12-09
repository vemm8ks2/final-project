import Navigation from '@/customer/components/Navigation/Navigation';
import HomePage from '@/customer/Pages/HomePage/HomePage';
import Footer from '@/customer/components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="">
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
