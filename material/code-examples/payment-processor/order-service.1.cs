class OrderService : IOrderService
{
  IPaymentService paymentService; // injected by IoC
  ...

  public ProcessOrder(...) {
    ...
    paymentService.SetPaymentInfo(orderPaymentInfo);
    paymentService.CalculateTax();
    paymentService.Charge();
    ...
  }
}
