package com.vemm8ks2.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.vemm8ks2.exception.CartItemException;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.CartItem;
import com.vemm8ks2.model.Product;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.CartItemRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {

  private final CartItemRepository cartItemRepository;
  private final UserService userService;

  @Override
  public CartItem createCartItem(CartItem cartItem) {

    cartItem.setQuantity(1);
    cartItem.setPrice(cartItem.getProduct().getPrice() * cartItem.getQuantity());
    cartItem.setDiscountPrice(cartItem.getProduct().getDiscountPrice() * cartItem.getQuantity());

    return cartItemRepository.save(cartItem);
  }

  @Override
  public CartItem updateCartItem(Long userId, Long id, CartItem cartItem)
      throws CartItemException, UserException {

    CartItem item = findCartItemById(id);
    User user = userService.findUserById(item.getUserId());

    if (user.getId().equals(userId)) {
      item.setQuantity(cartItem.getQuantity());
      item.setPrice(item.getQuantity() * item.getProduct().getPrice());
      item.setDiscountPrice(item.getProduct().getDiscountPrice() * item.getQuantity());
    }

    return cartItemRepository.save(item);
  }

  @Override
  public CartItem isExistingCartItem(Cart cart, Product product, String size, Long userId) {

    return cartItemRepository.isCartItemExist(cart, product, size, userId);
  }

  @Override
  public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {

    CartItem cartItem = findCartItemById(cartItemId);

    User user = userService.findUserById(cartItem.getUserId());
    User requestUser = userService.findUserById(userId);

    if (user.getId().equals(requestUser.getId())) {
      cartItemRepository.deleteById(cartItemId);
    } else {
      throw new UserException("You can't remove item");
    }
  }

  @Override
  public CartItem findCartItemById(Long cartItemId) throws CartItemException {
    
    Optional<CartItem> optional = cartItemRepository.findById(cartItemId);
    
    if (optional.isPresent()) {
      return optional.get();
    }

    throw new CartItemException("Cart item not found with id: " + cartItemId);
  }

}
