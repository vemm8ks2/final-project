package com.vemm8ks2.service;

import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.User;
import com.vemm8ks2.request.AddItemRequest;

public interface CartService {

  public Cart createCart(User user);

  public String addCartItem(Long userId, AddItemRequest req) throws ProductException;

  public Cart findUserCart(Long userId);
}
