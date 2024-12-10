import { Button } from '@mui/material';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout?step=2');
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((_) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 max-h-min mt-5 lg:mt-0">
          <div className="border">
            <div className="uppercase font-bold opacity-60 pb-4">Price details</div>
            <hr />
            <div className="space-y-3 font-medium mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$ 4,320</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-1,000</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$ 3,320</span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full"
              sx={{ px: '2.5rem', py: '0.7rem', marginTop: '1.25rem' }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
