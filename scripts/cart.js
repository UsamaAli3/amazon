export let Cart = JSON.parse(localStorage.getItem("Cart"));
if (!Cart) {
  Cart = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}
function saveToStorage() {
  localStorage.setItem("Cart", JSON.stringify(Cart));
}
export function funMatchingItem(productId) {
  let matchingItem;

  Cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += 1;
    matchingItem.quantity += quantity;
  } else {
    Cart.push({
      productId: productId,
      quantity: 1,
      quantity: quantity,
    });
  }
  saveToStorage();
}
export function removeItem(productId) {
  const newCart = [];
  Cart.forEach((cartItem) => {
    if (cartItem.id !== productId) {
      newCart.push(cartItem);
    }
  });
  Cart = newCart;
  saveToStorage();
}
