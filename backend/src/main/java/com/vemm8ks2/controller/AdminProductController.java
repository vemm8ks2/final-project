package com.vemm8ks2.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.model.Product;
import com.vemm8ks2.request.CreateProductRequest;
import com.vemm8ks2.response.ApiResponse;
import com.vemm8ks2.service.ProductService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin/products")
@RequiredArgsConstructor
public class AdminProductController {

  private final ProductService productService;

  @PostMapping("/")
  public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest req) {

    Product product = productService.createProduct(req);

    return new ResponseEntity<>(product, HttpStatus.CREATED);
  }

  @DeleteMapping("/{productId}/delete")
  public ResponseEntity<ApiResponse> deleteProduct(@PathVariable("productId") Long productId)
      throws ProductException {

    System.out.println("|| --- deleteProduct : " + productId);

    productService.deleteProduct(productId);

    ApiResponse res = new ApiResponse();

    res.setMessage("Product deleted successfully!");
    res.setStatus(true);

    return new ResponseEntity<>(res, HttpStatus.OK);
  }

  @GetMapping("/all")
  public ResponseEntity<List<Product>> findAllProduct() {

    List<Product> products = productService.findAllProducts();

    return new ResponseEntity<>(products, HttpStatus.OK);
  }

  @PutMapping("/{productId}/update")
  public ResponseEntity<Product> updateProduct(@RequestBody Product req,
      @PathVariable Long productId) throws ProductException {

    Product product = productService.updateProduct(productId, req);

    return new ResponseEntity<>(product, HttpStatus.CREATED);
  }

  @PostMapping("/multiple")
  public ResponseEntity<ApiResponse> createMultipleProduct(
      @RequestBody CreateProductRequest[] req) {

    for (CreateProductRequest product : req) {
      productService.createProduct(product);
    }

    ApiResponse res = new ApiResponse();

    res.setMessage("Products created successfully!");
    res.setStatus(true);

    return new ResponseEntity<>(res, HttpStatus.CREATED);
  }
}

