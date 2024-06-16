/**
 * The PaymentGatewayFacade class provides a simple interface to the complex
 * process of making payments using various payment methods. It shields the
 * client from the complexity of interacting with different payment providers
 * and managing the payment process.
 */
// A single class that represents an entire subsystem
var PaymentGatewayFacade = /** @class */ (function () {
    function PaymentGatewayFacade() {
        this.paypalGateway = new PayPalGateway();
        this.stripeGateway = new StripeGateway();
    }
    /**
     * The processPayment method serves as a convenient shortcut for the client
     * to initiate the payment process. It delegates the payment operation to
     * the appropriate payment provider based on the selected method.
     */
    PaymentGatewayFacade.prototype.processPayment = function (method, amount) {
        var result = "";
        switch (method) {
            case "paypal":
                result += this.paypalGateway.makePayment(amount);
                break;
            case "stripe":
                result += this.stripeGateway.makePayment(amount);
                break;
            default:
                result += "Invalid payment method: ".concat(method);
        }
        return result;
    };
    return PaymentGatewayFacade;
}());
/**
 * The PayPalGateway class provides functionality to make payments using PayPal.
 */
var PayPalGateway = /** @class */ (function () {
    function PayPalGateway() {
    }
    PayPalGateway.prototype.makePayment = function (amount) {
        return "Payment made using PayPal: $".concat(amount);
    };
    return PayPalGateway;
}());
/**
 * The StripeGateway class provides functionality to make payments using Stripe.
 */
var StripeGateway = /** @class */ (function () {
    function StripeGateway() {
    }
    StripeGateway.prototype.makePayment = function (amount) {
        return "Payment made using Stripe: $".concat(amount);
    };
    return StripeGateway;
}());
/**
 * The client code interacts with the PaymentGatewayFacade to initiate the
 * payment process without having to deal with the complexities of interacting
 * with different payment gateways directly.
 */
function clientCode(paymentGateway, method, amount) {
    console.log(paymentGateway.processPayment(method, amount));
}
/**
 * Example usage of the PaymentGatewayFacade to process payments using different
 * payment methods.
 */
var paymentGateway = new PaymentGatewayFacade();
clientCode(paymentGateway, "paypal", 100);
clientCode(paymentGateway, "stripe", 150);
//# sourceMappingURL=facade.js.map