package com.vemm8ks2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.OrderException;
import com.vemm8ks2.model.Order;
import com.vemm8ks2.repository.OrderRepository;
import com.vemm8ks2.response.ApiResponse;
import com.vemm8ks2.response.PaymentLinkResponse;
import com.vemm8ks2.service.OrderService;
import com.vemm8ks2.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PaymentController {

  private final OrderService orderService;
  private final UserService userService;
  private final OrderRepository orderRepository;

  @PostMapping("/payments/{orderId}")
  public ResponseEntity<PaymentLinkResponse> createPaymentLink(
      @PathVariable("orderId") Long orderId, @RequestHeader("Authorization") String jwt)
      throws OrderException {

    Order order = orderService.findOrderById(orderId);

    try {
      // --- 보내는 데이터
      // amount = order.getTOtalPrice() * 100
      // name = order.getUser().getFirstName()
      // email = order.getUser().getEmail()
      // callback_url = 'http://localhost:3000/payment/' + orderId
      // callback_method = 'get'

      // --- 받는 데이터
      // paymentLinkId = payment.get('id')
      // paymentLinkUrl = payment.get('short_url')

      // --- 반환 데이터
      // res.setPayment_link_id(paymentLinkId)
      // res.setPayment_link_url(paymentLinkUrl)
      // return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.CREATED)
    } catch (Exception e) {
      // TODO: handle exception
      // throw new RazorpayException(e.getMessage())
    }

    return null;
  }

  @GetMapping("/payments")
  public ResponseEntity<ApiResponse> redirect(@RequestParam(name = "payment_id") String paymentId,
      @RequestParam(name = "order_id") Long orderId) throws OrderException {

    Order order = orderService.findOrderById(orderId);
    // RazorpayClient razorpay = new RazorpayClinet(apiKey, apiSecret)

    try {
      // Payment payment = razorpay.payments.fetch(paymentId);

      // if (payment.get("status").equals("captured")) {
      order.getPaymentDetails().setPaymentId(paymentId);
      order.getPaymentDetails().setStatus("COMPLETED");
      order.setOrderStatus("PLACED");

      orderRepository.save(order);
      // }

      ApiResponse res = new ApiResponse();

      res.setMessage("Your order get placed");
      res.setStatus(true);

      return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
    } catch (Exception e) {
      // TODO: handle exception
      throw new RuntimeException();
    }
  }
}
