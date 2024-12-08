package com.vemm8ks2.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.vemm8ks2.exception.OrderException;
import com.vemm8ks2.model.Address;
import com.vemm8ks2.model.Order;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.CartRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

  private final CartRepository cartRepository;
  private final CartItemService cartItemService;
  private final ProductService productService;

  @Override
  public Order createOrder(User user, Address shippingAddress) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Order findOrderById(Long orderId) throws OrderException {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public List<Order> usersOrderHistory(Long userId) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Order placedOrder(Long orderId) throws OrderException {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Order confirmedOrder(Long orderId) throws OrderException {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Order shippedOrder(Long orderId) throws OrderException {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Order deliveredOrder(Long irderId) throws OrderException {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Order cancledOrder(Long orderId) throws OrderException {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public List<Order> getAllOrders() {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public void deleteOrder(Long orderId) throws OrderException {
    // TODO Auto-generated method stub

  }

}
