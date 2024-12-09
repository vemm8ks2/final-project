package com.vemm8ks2.controller;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.model.Product;
import com.vemm8ks2.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@Slf4j
public class ProductController {

  private final ProductService productService;

  @GetMapping("/")
  public ResponseEntity<Page<Product>> findProductByCategoryHandler(@RequestParam String category,
      @RequestParam List<String> colors, @RequestParam List<String> sizes,
      @RequestParam Integer minPrice, @RequestParam Integer maxPrice,
      @RequestParam Integer minDiscount, @RequestParam String sort, @RequestParam String stock,
      @RequestParam Integer pageNumber, @RequestParam Integer pageSize) {

    Page<Product> result = productService.getAllProduct(category, colors, sizes, minPrice, maxPrice,
        minDiscount, sort, stock, pageNumber, pageSize);

    log.info("|| --- findProductByCategoryHandler");

    return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
  }

  @GetMapping("/id/{productId}")
  public ResponseEntity<Product> findProductByIdHandler(@PathVariable Long productId)
      throws ProductException {

    Product product = productService.findProductById(productId);

    log.info("|| --- findProductByIdHandler");

    return new ResponseEntity<>(product, HttpStatus.ACCEPTED);
  }
}
