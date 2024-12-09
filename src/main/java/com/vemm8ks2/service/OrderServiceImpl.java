package com.vemm8ks2.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.vemm8ks2.exception.OrderException;
import com.vemm8ks2.model.Address;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.CartItem;
import com.vemm8ks2.model.Order;
import com.vemm8ks2.model.OrderItem;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.AddressRepository;
import com.vemm8ks2.repository.OrderItemRepository;
import com.vemm8ks2.repository.OrderRepository;
import com.vemm8ks2.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

  private final OrderRepository orderRepository;
  private final CartService cartService;
  private final AddressRepository addressRepository;
  private final UserRepository userRepository;
  private final OrderItemRepository orderItemRepository;

  @Transactional
  @Override
  public Order createOrder(User user, Address shippingAddress) {

    shippingAddress.setUser(user);
    Address address = addressRepository.save(shippingAddress);

    user.getAddresses().add(address);
    userRepository.save(user);

    List<OrderItem> orderItems = new ArrayList<>();
    Cart cart = cartService.findUserCart(user.getId());

    for (CartItem item : cart.getCartItems()) {
      OrderItem orderItem = new OrderItem();

      orderItem.setPrice(item.getPrice());
      orderItem.setProduct(item.getProduct());
      orderItem.setQuantity(item.getQuantity());
      orderItem.setSize(item.getSize());
      orderItem.setDiscountPrice(item.getDiscountPrice());

      OrderItem createdOrderItem = orderItemRepository.save(orderItem);
      orderItems.add(createdOrderItem);
    }

    Order createdOrder = new Order();

    createdOrder.setUser(user);
    createdOrder.setOrderItems(orderItems);
    createdOrder.setTotalPrice(cart.getTotalPrice());
    createdOrder.setTotalDiscountPrice(cart.getTotalDiscountPrice());
    createdOrder.setDiscount(cart.getDiscount());
    createdOrder.setTotalItem(cart.getTotalItem());
    createdOrder.setShippingAddress(address);
    createdOrder.setOrderDate(LocalDateTime.now());
    createdOrder.setOrderStatus("PENDING");
    createdOrder.getPaymentDetails().setStatus("PENDING");
    createdOrder.setCreatedAt(LocalDateTime.now());

    Order savedOrder = orderRepository.save(createdOrder);

    for (OrderItem item : orderItems) {
      item.setOrder(savedOrder);
      orderItemRepository.save(item);
    }

    return savedOrder;
  }

  @Override
  public Order findOrderById(Long orderId) throws OrderException {

    Optional<Order> optional = orderRepository.findById(orderId);

    if (optional.isPresent()) {
      return optional.get();
    }

    throw new OrderException("Order not exist with id : " + orderId);
  }

  @Override
  public List<Order> usersOrderHistory(Long userId) {
    return orderRepository.getUserOrders(userId);
  }

  @Override
  public Order placedOrder(Long orderId) throws OrderException {

    Order order = findOrderById(orderId);

    order.setOrderStatus("PLACED");
    order.getPaymentDetails().setStatus("COMPLETED");

    return order;
  }

  @Override
  public Order confirmedOrder(Long orderId) throws OrderException {

    Order order = findOrderById(orderId);
    order.setOrderStatus("CONFIRMED");

    return orderRepository.save(order);
  }

  @Override
  public Order shippedOrder(Long orderId) throws OrderException {

    Order order = findOrderById(orderId);
    order.setOrderStatus("SHIPPED");

    return orderRepository.save(order);
  }

  @Override
  public Order deliveredOrder(Long orderId) throws OrderException {

    Order order = findOrderById(orderId);
    order.setOrderStatus("DELIVERED");

    return orderRepository.save(order);
  }

  @Override
  public Order cancledOrder(Long orderId) throws OrderException {

    Order order = findOrderById(orderId);
    order.setOrderStatus("CANCELLED");

    return orderRepository.save(order);
  }

  @Override
  public List<Order> getAllOrders() {
    return orderRepository.findAll();
  }

  @Override
  public void deleteOrder(Long orderId) throws OrderException {

    Order order = findOrderById(orderId);
    orderRepository.deleteById(order.getId());
  }

}
