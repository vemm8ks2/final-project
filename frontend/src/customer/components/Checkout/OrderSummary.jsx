// @ts-nocheck
import { Button } from '@mui/material';
import AddressCard from '@/customer/components/AddressCard/AddressCard';
import CartItem from '@/customer/components/Cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrderById } from '@/state/order/Action';
import { useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { order } = useSelector((store) => store);

  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('order_id');

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
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
                  <span>${order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600">-${order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">${order.order?.totalDiscountPrice}</span>
                </div>
              </div>
              <Button
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
    </div>
  );
};

export default OrderSummary;
