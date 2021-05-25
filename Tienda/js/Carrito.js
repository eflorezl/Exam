const AgregarCarrito = document.querySelectorAll('.addToCart');
      AgregarCarrito.forEach(addToCartButton => {
        
        addToCartButton.addEventListener('click', addtocartClicked)
});

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addtocartClicked(event) {
    const button = event.target;
    const post = button.closest('.post');

    const postname = post.querySelector('.post-name').textContent;
    const postPrice = post.querySelector('.post-precios').textContent;
    const postImage = post.querySelector('.post-Image').src;

    addItemToShoppingCart(postname, postPrice, postImage);

}

function addItemToShoppingCart (postname, postPrice, postImage){
   const shoppingCartRow = document.createElement('div');
   const shoppingCartContent = `
   <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
					<img src=${postImage} alt="Buzo" style="width: 100px; height:auto;">
                    <p class="post-name">${postname}</p>
       </div>
   </div>
   <div class="col-2">
       <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="post-precios">${postPrice}</p>
       </div>
   </div>
   <div class="col-4">
       <div
           class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
           <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
               value="1">
           <button class="btn btn-danger buttonDelete" type="button">X</button>
       </div>
   </div>
</div>`;
shoppingCartRow.innerHTML = shoppingCartContent;
shoppingCartItemsContainer.append(shoppingCartRow);
}