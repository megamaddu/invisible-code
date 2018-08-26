class PaymentService : IPaymentService
{
  Customer customer;
  BillingAddress billingAddress;
  ... // more instance fields

  public SetPaymentInfo(PaymentInfo paymentInfo)
  {
    Customer customer = new Customer { Name = paymentInfo.Name, ... };
    ... // copy all the paymentInfo data into the instance
  }

  public CalculateTax() {
    ... // pass order info to tax API, store results in the instance
  }

  public Charge() {
    ... // use all the current instance data to attempt
        // the final transaction against the 3rd-party
        // payment API
  }
}
