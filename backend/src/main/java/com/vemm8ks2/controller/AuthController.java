package com.vemm8ks2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.config.JwtProvider;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.Cart;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.UserRepository;
import com.vemm8ks2.request.LoginRequest;
import com.vemm8ks2.response.AuthResponse;
import com.vemm8ks2.service.CartService;
import com.vemm8ks2.service.CustomUserServiceImpl;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

  private final UserRepository userRepository;
  private final JwtProvider jwtProvider;
  private final PasswordEncoder passwordEncoder;
  private final CustomUserServiceImpl customUserServiceImpl;
  private final CartService cartService;

  @PostMapping("/signup")
  public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user)
      throws UserException {

    String email = user.getEmail();
    String password = user.getPassword();
    String firstName = user.getFirstName();
    String lastName = user.getLastName();

    User isExistingEmail = userRepository.findByEmail(email);

    if (isExistingEmail != null) {
      throw new UserException("Email is already used with another account");
    }

    User createdUser = new User();

    createdUser.setEmail(email);
    createdUser.setPassword(passwordEncoder.encode(password));
    createdUser.setFirstName(firstName);
    createdUser.setLastName(lastName);

    User savedUser = userRepository.save(createdUser);
    
    @SuppressWarnings("unused")
    Cart cart = cartService.createCart(savedUser);

    Authentication authentication =
        new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);

    String token = jwtProvider.generateToken(authentication);

    AuthResponse authResponse = new AuthResponse(token, "Signup success");

    return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.CREATED);
  };

  @PostMapping("/signin")
  public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest) {

    String username = loginRequest.getEmail();
    String password = loginRequest.getPassword();

    Authentication authentication = authenticate(username, password);
    SecurityContextHolder.getContext().setAuthentication(authentication);

    String token = jwtProvider.generateToken(authentication);

    AuthResponse authResponse = new AuthResponse(token, "Signin success");

    return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);
  }

  private Authentication authenticate(String username, String password) {

    UserDetails userDetails = customUserServiceImpl.loadUserByUsername(username);

    if (userDetails == null) {
      throw new BadCredentialsException("Invalid username");
    }

    if (!passwordEncoder.matches(password, userDetails.getPassword())) {
      throw new BadCredentialsException("Invalid password");
    }

    return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
  }
  
}
