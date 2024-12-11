// @ts-nocheck
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { Alert, AlertTitle, Grid2 as Grid } from '@mui/material';

import { getOrderById } from '@/state/order/Action';
import { updatePayment } from '@/state/payment/Action';
import OrderTracker from '@/customer/components/Order/OrderTracker';
import AddressCard from '@/customer/components/AddressCard/AddressCard';

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();

  const { order } = useSelector((store) => store);

  const { orderId } = useParams();

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);

    setPaymentId(urlParam.get('razorpay_payment_link_id'));
    setPaymentStatus(urlParam.get('razorpay_payment_link_status'));
  }, []);

  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };

      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);

  console.log('|| --- order');
  console.log(orderId);

  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert variant="filled" severity="success" sx={{ mb: 6, width: 'fit-content' }}>
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation your order get placed!
        </Alert>
      </div>
      <OrderTracker activeStep={1} />
      <Grid className="space-y-5 py-5 pt-20">
        {order.order?.map((item) => (
          <Grid
            container
            className="shadow-xl rounded-md p-5"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid size={{ xs: 6 }}>
              <div className="flex items-center">
                <img src={item.product.imageUrl} alt="" className="w-[5rem] h-[5rem]" />
                <div className="ml-5 space-y-2">
                  <p>{item.product.title}</p>
                  <div>
                    <span className="opacity-50 text-xs font-semibold space-x-5">
                      Color: {item.color}
                    </span>
                    <span>Size: {item.size}</span>
                  </div>
                  <p>Seller : {item.product.brand}</p>
                  <p>$ {item.price}</p>
                </div>
              </div>
            </Grid>
            <Grid>
              <AddressCard address={order.order?.orderItems.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
