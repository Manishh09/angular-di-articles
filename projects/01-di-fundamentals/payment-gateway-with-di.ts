// Abstraction (DI-friendly)
interface IPaymentGateway {
  pay(amount: number): void;
}

// Concrete implementations
class StripeGatewayA implements IPaymentGateway {
  pay(amount: number): void {
    console.log(`Processing Stripe payment: $${amount}`);
  }
}

class PayPalGatewayA implements IPaymentGateway {
  pay(amount: number): void {
    console.log(`Processing PayPal payment: $${amount}`);
  }
}

class InternalGateway implements IPaymentGateway {
  pay(amount: number): void {
    console.log(`Processing internal payment: $${amount}`);
  }
}


class TransactionHandlerA {
  constructor(private paymentGateway: IPaymentGateway) {}

  process(amount: number): void {
    this.paymentGateway.pay(amount);
  }
}

// Usage
// Choose gateway at runtime (config, env, strategy)
const gateway: IPaymentGateway = new StripeGateway();
// const gateway: IPaymentGateway = new PayPalGateway();
// const gateway: IPaymentGateway = new InternalGateway();

const tHandler = new TransactionHandlerA(gateway);
tHandler.process(100);

