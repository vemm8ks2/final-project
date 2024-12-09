package com.vemm8ks2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.User;
import com.vemm8ks2.request.AddItemRequest;
import com.vemm8ks2.response.ApiResponse;
import com.vemm8ks2.service.CartService;
import com.vemm8ks2.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

  private final CartService cartService;
  private final UserService userService;

  @GetMapping
  public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt)
      throws UserException {

    User user = userService.findUserProfileByJwt(jwt);
    Cart cart = cartService.findUserCart(user.getId());

    return new ResponseEntity<>(cart, HttpStatus.OK);
  }

  @PutMapping("/add")
  public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
      @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

    User user = userService.findUserProfileByJwt(jwt);

    cartService.addCartItem(user.getId(), req);

    ApiResponse res = new ApiResponse();

    res.setMessage("Item added to cart!");
    res.setStatus(true);

    return new ResponseEntity<>(res, HttpStatus.OK);
  }


}
