import { Button } from '@mui/material';
import AddressCard from '@/customer/components/AddressCard/AddressCard';
import CartItem from '@/customer/components/Cart/CartItem';

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>

      <div>
        <div className="lg:grid grid-cols-3 relative">
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
