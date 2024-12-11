// @ts-nocheck
import { Button } from '@mui/material';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCart } from '@/state/cart/Action';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  const handleCheckout = () => {
    navigate('/checkout?step=2');
  };

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="px-5 sticky top-0 max-h-min mt-5 lg:mt-0">
          <div className="border">
            <div className="uppercase font-bold opacity-60 pb-4">Price details</div>
            <hr />
            <div className="space-y-3 font-medium mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$ {cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$ {cart.cart?.totalDiscountPrice}</span>
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
