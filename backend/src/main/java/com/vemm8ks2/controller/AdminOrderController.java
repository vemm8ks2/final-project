package com.vemm8ks2.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vemm8ks2.exception.OrderException;
import com.vemm8ks2.model.Order;
import com.vemm8ks2.response.ApiResponse;
import com.vemm8ks2.service.OrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin/orders")
@RequiredArgsConstructor
public class AdminOrderController {

  private final OrderService orderService;

  @GetMapping("/")
  public ResponseEntity<List<Order>> getAllOrdersHandler() {

    List<Order> orders = orderService.getAllOrders();

    return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
  }

  @PutMapping("/{orderId}/confirmed")
  public ResponseEntity<Order> ConfirmedOrderHandler(@PathVariable("orderId") Long orderId,
      @RequestHeader("Authorization") String jwt) throws OrderException {

    Order order = orderService.confirmedOrder(orderId);

    return new ResponseEntity<>(order, HttpStatus.OK);
  }

  @PutMapping("/{orderId}/ship")
  public ResponseEntity<Order> ShippedOrderHandler(@PathVariable("orderId") Long orderId,
      @RequestHeader("Authorization") String jwt) throws OrderException {

    Order order = orderService.shippedOrder(orderId);

    return new ResponseEntity<>(order, HttpStatus.OK);
  }

  @PutMapping("/{orderId}/deliver")
  public ResponseEntity<Order> DeliverOrderhandler(@PathVariable("orderId") Long orderId,
      @RequestHeader("Authorization") String jwt) throws OrderException {

    Order order = orderService.deliveredOrder(orderId);

    return new ResponseEntity<>(order, HttpStatus.OK);
  }

  @PutMapping("/{orderId}/cancel")
  public ResponseEntity<Order> CancelOrderHandler(@PathVariable("orderId") Long orderId,
      @RequestHeader("Authorization") String jwt) throws OrderException {

    Order order = orderService.cancledOrder(orderId);

    return new ResponseEntity<>(order, HttpStatus.OK);
  }

  @DeleteMapping("/{orderId}/delete")
  public ResponseEntity<ApiResponse> DeleteOrderHandler(@PathVariable("orderId") Long orderId,
      @RequestHeader("Authorization") String jwt) throws OrderException {

    orderService.deleteOrder(orderId);

    ApiResponse res = new ApiResponse();

    res.setMessage("Order deleted successfully");
    res.setStatus(true);

    return new ResponseEntity<>(res, HttpStatus.OK);
  }
}
