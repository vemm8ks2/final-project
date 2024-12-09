package com.vemm8ks2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.CartItemException;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.CartItem;
import com.vemm8ks2.model.User;
import com.vemm8ks2.response.ApiResponse;
import com.vemm8ks2.service.CartItemService;
import com.vemm8ks2.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cart-items")
@RequiredArgsConstructor
public class CartItemController {

  private final UserService userService;
  private final CartItemService cartItemService;

  @DeleteMapping("/{cartItemId}")
  public ResponseEntity<ApiResponse> deleteCartitem(@PathVariable("cartItemId") Long cartItemId,
      @RequestHeader("Authorization") String jwt) throws UserException, CartItemException {

    User user = userService.findUserProfileByJwt(jwt);
    cartItemService.removeCartItem(user.getId(), cartItemId);

    ApiResponse res = new ApiResponse();

    res.setMessage("Item removed to cart!");
    res.setStatus(true);

    return new ResponseEntity<>(res, HttpStatus.OK);
  }

  @PutMapping("/{cartItemId}")
  public ResponseEntity<CartItem> updateCartItem(@RequestBody CartItem cartItem,
      @PathVariable Long cartItemId, @RequestHeader("Authorization") String jwt)
      throws UserException, CartItemException {

    User user = userService.findUserProfileByJwt(jwt);
    CartItem updatedCartItem = cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);

    return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
  }

}
