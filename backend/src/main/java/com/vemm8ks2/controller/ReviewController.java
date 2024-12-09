package com.vemm8ks2.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.exception.ReviewRequest;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.Review;
import com.vemm8ks2.model.User;
import com.vemm8ks2.service.ReviewService;
import com.vemm8ks2.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/reivews")
@RequiredArgsConstructor
public class ReviewController {

  private final ReviewService reviewService;
  private final UserService userService;

  @PostMapping("/create")
  public ResponseEntity<Review> createReview(@RequestBody ReviewRequest req,
      @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

    User user = userService.findUserProfileByJwt(jwt);
    Review review = reviewService.createReview(req, user);

    return new ResponseEntity<>(review, HttpStatus.CREATED);
  }

  @GetMapping("/product/{productId}")
  public ResponseEntity<List<Review>> getProductsReview(@PathVariable Long productId)
      throws UserException, ProductException {

    List<Review> reviews = reviewService.getAllReview(productId);

    return new ResponseEntity<>(reviews, HttpStatus.ACCEPTED);
  }

}
