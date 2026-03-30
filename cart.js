function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let product = {
    name: name,
    price: price,
    quantity: 1
  };

  // Check if product already exists
  let existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}