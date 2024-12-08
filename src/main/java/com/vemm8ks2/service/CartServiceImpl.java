package com.vemm8ks2.service;

import org.springframework.stereotype.Service;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.CartItem;
import com.vemm8ks2.model.Product;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.CartRepository;
import com.vemm8ks2.request.AddItemRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

  private final CartRepository cartRepository;
  private final CartItemService cartItemService;
  private final ProductService productService;

  @Override
  public Cart createCart(User user) {

    Cart cart = new Cart();

    cart.setUser(user);

    return cartRepository.save(cart);
  }

  @Override
  public String addCartItem(Long userId, AddItemRequest req) throws ProductException {

    Cart cart = cartRepository.findByUserId(userId);
    Product product = productService.findProductById(req.getProductId());

    CartItem isPresent = cartItemService.isExistingCartItem(cart, product, req.getSize(), userId);

    if (isPresent == null) {
      CartItem cartItem = new CartItem();

      cartItem.setProduct(product);
      cartItem.setCart(cart);
      cartItem.setQuantity(req.getQuantity());
      cartItem.setUserId(userId);
      
      int price = req.getQuantity() * product.getDiscountPrice();
      
      cartItem.setPrice(price);
      cartItem.setSize(req.getSize());
      
      CartItem createdCartItem = cartItemService.createCartItem(cartItem);
      
      cart.getCartItems().add(createdCartItem);
    }

    return "Item add to cart";
  }

  @Override
  public Cart findUserCart(Long userId) {

    Cart cart = cartRepository.findByUserId(userId);
    
    int totalPrice = 0;
    int totalDiscountPrice = 0;
    int totalItem = 0;
    
    for (CartItem cartItem : cart.getCartItems()) {
      totalPrice += cartItem.getPrice();
      totalDiscountPrice += cartItem.getDiscountPrice();
      totalItem += cartItem.getQuantity();
    }
    
    cart.setTotalDiscountPrice(totalDiscountPrice);
    cart.setTotalItem(totalItem);
    cart.setTotalPrice(totalPrice);
    cart.setDiscount(totalPrice - totalDiscountPrice);
    
    return cartRepository.save(cart);
  }

}
