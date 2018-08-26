class OrderService : IOrderService
{
  IPaymentService paymentService; // injected by IoC
  ...

  public ProcessOrder(...) {
    ...
    var preTaxPaymentSummary = paymentService.CalculatePaymentInfo(orderPaymentInfo);
    var completePaymentInfo = paymentService.CalculateTax(preTaxPaymentSummary);
    return paymentService.Charge(completePaymentInfo);
  }
}
