// Square payment form configuration
const paymentForm = new SqPaymentForm({
  // Replace with your own Square application ID
  applicationId: sandbox-sq0idb-SxCNOFUeEWH1PpkYm-adSw,
  inputClass: 'sq-input',

  // Replace with your own location ID
  locationId: 	MXTZFCBBGMG84,
  autoBuild: false,

  // Replace with the ID of your payment form
  paymentFormId: 'checkout-form',

  // Replace with your own callback functions
  callbacks: {
    methodsSupported: function (methods) {},
    createPaymentRequest: function () {},
    cardNonceResponseReceived: function (errors, nonce, cardData) {},
    paymentFormLoaded: function () {},
  },
});

// Build Square payment form
paymentForm.build();
