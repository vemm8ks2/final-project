package com.vemm8ks2.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.OrderException;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.Address;
import com.vemm8ks2.model.Order;
import com.vemm8ks2.model.User;
import com.vemm8ks2.service.OrderService;
import com.vemm8ks2.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@Slf4j
public class OrderController {

  private final OrderService orderService;
  private final UserService userService;

  @PostMapping("/")
  public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress,
      @RequestHeader("Authorization") String jwt) throws UserException {

    User user = userService.findUserProfileByJwt(jwt);
    Order order = orderService.createOrder(user, shippingAddress);

    log.info("|| --- createOrder");

    return new ResponseEntity<>(order, HttpStatus.CREATED);
  }

  @GetMapping("/user")
  public ResponseEntity<List<Order>> usersOrderHistory(@RequestHeader("Authorization") String jwt)
      throws UserException {

    User user = userService.findUserProfileByJwt(jwt);
    List<Order> orders = orderService.usersOrderHistory(user.getId());

    log.info("|| --- usersOrderHistory");

    return new ResponseEntity<>(orders, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Order> findOrderById(@PathVariable("id") Long orderId,
      @RequestHeader("Authorization") String jwt) throws UserException, OrderException {

    @SuppressWarnings("unused")
    User user = userService.findUserProfileByJwt(jwt);
    Order order = orderService.findOrderById(orderId);

    return new ResponseEntity<>(order, HttpStatus.ACCEPTED);
  }
}
