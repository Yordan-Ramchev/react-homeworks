export default {
  home() {
    return '/';
  },

  menu() {
    return '/menu';
  },

  menuItem(menu) {
    return `/menu/${menu.id}`;
  },

  ourStory() {
    return '/our-story';
  },

  contactUs() {
    return '/contact-us';
  },

  checkoutShoppingCart() {
    return '/checkout/shopping-cart';
  },

  checkoutPaymentInfo() {
    return '/checkout/payment-info';
  },

  checkoutOrderReview() {
    return '/checkout/order-review';
  },

  checkoutThankYou() {
    return '/checkout/thank-you';
  }
};
