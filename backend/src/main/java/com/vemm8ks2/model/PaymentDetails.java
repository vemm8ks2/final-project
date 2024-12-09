package com.vemm8ks2.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDetails {

  private String paymentMethod;

  private String status;

  private String paymentId;

  private String razorpayPaymentLinkId;

  private String razorpayPaymentLinkReferenceId;

  private String razorpayPaymentLinkStatus;

  private String razorpayPaymentId;

}
