import { products } from "../products.js";
import { Cart, funMatchingItem } from "../cart.js";

let productHTML = "";

products.forEach((products) => {
  productHTML += ` <div class="product-container">
	 <div class="product-image-container">
		 <img class="product-image"
			 src=${products.img}>
	 </div>

	 <div class="product-name limit-text-to-2-lines">
	 ${products.name}
	 </div>

	 <div class="product-rating-container">
	 <img class="product-rating-stars"
		 src="images/ratings/rating-${products.rating.star * 10}.png">
	 <div class="product-rating-count link-primary">
	 ${products.rating.count}
	 </div>
 </div>

	 <div class="product-price">
		 $${(products.priceCent / 100).toFixed(2)}

	 </div>

	 <div class="product-quantity-container">
		 <select class="js-quantity-selector-${products.id}">
			 <option selected value="1">1</option>
			 <option value="2">2</option>
			 <option value="3">3</option>
			 <option value="4">4</option>
			 <option value="5">5</option>
			 <option value="6">6</option>
			 <option value="7">7</option>
			 <option value="8">8</option>
			 <option value="9">9</option>
			 <option value="10">10</option>
		 </select>
	 </div>

	 <div class="product-spacer"></div>

	 <div class="added-to-cart">
		 <img src="images/icons/checkmark.png">
		 Added
	 </div>

	 <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = '${
     products.id
   }'>
		 Add to Cart
	 </button>
 </div>`;
});

function incQuentity() {
  let cartQuantity = 0;
  Cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

document.querySelector(".products-grid").innerHTML = productHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    let productId = button.dataset.productId;

    funMatchingItem(productId);
    incQuentity();
  });
});
