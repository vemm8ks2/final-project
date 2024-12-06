package com.vemm8ks2.service;

import org.springframework.stereotype.Service;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.User;
import com.vemm8ks2.request.AddItemRequest;

@Service
public class CartServiceImpl implements CartService {

  @Override
  public Cart createCart(User user) {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
    // TODO Auto-generated method stub
    return null;
  }

  @Override
  public Cart findUserCart(Long userId) {
    // TODO Auto-generated method stub
    return null;
  }

}
