package com.vemm8ks2.service;

import com.vemm8ks2.exception.CartItemException;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.CartItem;
import com.vemm8ks2.model.Product;

public interface CartItemService {

  public CartItem createCartItem(CartItem cartItem);

  public CartItem updateCartItem(Long userId, Long id, CartItem cartItem)
      throws CartItemException, UserException;
  
  public CartItem isExistingCartItem(Cart cart, Product product, String size, Long userId);
  
  public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException;
  
  public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
