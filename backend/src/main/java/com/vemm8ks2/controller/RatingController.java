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
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.Rating;
import com.vemm8ks2.model.User;
import com.vemm8ks2.request.RatingRequest;
import com.vemm8ks2.service.RatingService;
import com.vemm8ks2.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/ratings")
@RequiredArgsConstructor
public class RatingController {

  private final UserService userService;
  private final RatingService ratingService;

  @PostMapping("/create")
  public ResponseEntity<Rating> createRating(@RequestBody RatingRequest req,
      @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

    User user = userService.findUserProfileByJwt(jwt);
    Rating rating = ratingService.createRating(req, user);

    return new ResponseEntity<>(rating, HttpStatus.CREATED);
  }

  @GetMapping("/product/{productId}")
  public ResponseEntity<List<Rating>> getProductsRating(@PathVariable Long productId,
      @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

    @SuppressWarnings("unused")
    User user = userService.findUserProfileByJwt(jwt);
    List<Rating> ratings = ratingService.getProdutsRating(productId);

    return new ResponseEntity<>(ratings, HttpStatus.CREATED);
  }
}
