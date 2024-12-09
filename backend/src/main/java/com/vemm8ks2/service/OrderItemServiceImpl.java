package com.vemm8ks2.service;

import org.springframework.stereotype.Service;
import com.vemm8ks2.model.OrderItem;
import com.vemm8ks2.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderItemServiceImpl implements OrderItemService {

  private final OrderItemRepository orderItemRepository;

  @Override
  public OrderItem createOrderItem(OrderItem orderItem) {
    return orderItemRepository.save(orderItem);
  }

}
