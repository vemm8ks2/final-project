package com.vemm8ks2.service;

import java.util.List;
import com.vemm8ks2.exception.OrderException;
import com.vemm8ks2.model.Address;
import com.vemm8ks2.model.Order;
import com.vemm8ks2.model.User;

public interface OrderService {

  public Order createOrder(User user, Address shippingAddress);

  public Order findOrderById(Long orderId) throws OrderException;

  public List<Order> usersOrderHistory(Long userId);

  public Order placedOrder(Long orderId) throws OrderException;

  public Order confirmedOrder(Long orderId) throws OrderException;

  public Order shippedOrder(Long orderId) throws OrderException;

  public Order deliveredOrder(Long irderId) throws OrderException;

  public Order cancledOrder(Long orderId) throws OrderException;

  public List<Order> getAllOrders();

  public void deleteOrder(Long orderId) throws OrderException;
}
