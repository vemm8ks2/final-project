// @ts-nocheck
import { getOrderById } from '@/state/order/Action';
import { updatePayment } from '@/state/payment/Action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

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
    const data = { orderId, paymentId };

    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
  }, [orderId, paymentId]);

  console.log('|| --- order');
  console.log(orderId);

  return <div>PaymentSuccess</div>;
};

export default PaymentSuccess;
