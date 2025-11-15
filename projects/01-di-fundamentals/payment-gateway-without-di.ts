// Concrete implementation
class StripeGateway {
  pay(amount: number) {
    console.log(`Processing Stripe payment: $${amount}`);
  }
}

class PayPalGateway {
  pay(amount: number) {
    console.log(`Processing PayPal payment: $${amount}`);
  }
}

// Transaction handler (tightly coupled)
class TransactionHandler {
  process(amount: number, method: 'stripe' | 'paypal') {
    let gateway;

    if (method === 'stripe') {
      gateway = new StripeGateway(); // Direct instantiation 
    } else {
      gateway = new PayPalGateway(); // dependency 
    }

    gateway.pay(amount);
  }
}

// Usage
const handler = new TransactionHandler();
handler.process(100, 'stripe');


/*
Problems in this version

Every class knows which gateway it uses

Switching gateways = modifying every handler

Adding new gateways requires changing existing code

Hard to unit test (real gateways execute)
*/
