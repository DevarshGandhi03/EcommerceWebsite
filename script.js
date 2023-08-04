function reload() {
  let itemCards = document.querySelectorAll(".itemCard");
  let homeBtn = document.querySelector(".logo");
  let orignalMain = document.querySelector("main").innerHTML;
  
  console.log();
  let main = document.querySelector("main");
  let imageUrl;
  let shoeName;
  let currentPrice;
  let originalPrice;


  itemCards.forEach((e) => {
    console.log(e);
    e.addEventListener("click", () => {
      imageUrl = e.querySelector("img").src;
      shoeName = e.querySelector(".itemName").innerHTML;
      currentPrice = e.querySelector(".itemPrice").innerHTML;
      console.log(currentPrice);

      main.innerHTML = `<div class="heading">
        <h1 class="heading-2">${shoeName}</h1>
      </div>
      <div class="itemPage">
        <div class="itemPageImage">
            <img
            class="_2r_T1I _396QI4"
            alt=""
            src="${imageUrl}"
          />
        </div>
        <div class="itemInfo">
          <h3>Adidas</h3>
          <p class="itemName">${shoeName}</p>
            <p class="itemPrice">
              ${currentPrice} 
            </p>
            <div class="buttons">
                <button class="addToCart btn pageBtn">Add to cart</button>
                <button class="moveToWishlist btn pageBtn ">Wishlist</button>
            </div>
        </div>
        
      </div>`;
    });
  });

  homeBtn.addEventListener("click", () => {
    main.innerHTML = orignalMain;
    reload()
  });
}

reload()