const app = Vue.createApp({
  data: function () {
    return {
      product: "Socks",
      description: "Very cool socks..",
      image: "./assets/images/socks_green.jpg",
      url: "https://github.com/",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 1, color: "green" },
        { id: 2, color: "blue" },
      ],
      sizes: ["Small", "Medium", "Large"],
    };
  },
});
