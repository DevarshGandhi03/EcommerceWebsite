let cartHtml =` `;
function reload() {
  let itemCards = document.querySelectorAll(".itemCard");
  let homeBtn = document.querySelector(".logo");
  let orignalMain = document.querySelector("main").innerHTML;

  // console.log(cartBtn);

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
      // console.log(currentPrice);

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
          <p class="itemName itemCartName">${shoeName}</p>
            <p class="itemPrice itemCartPrice">
              ${currentPrice} 
            </p>
            <div class="buttons">
                <button class="addToCart btn pageBtn funcBtnCart">Add to cart</button>
                <button class="moveToWishlist btn pageBtn funcBtnWish">Wishlist</button>
            </div>
        </div>
        
      </div>`;
      CartFunc();
    });
  });

  homeBtn.addEventListener("click", () => {
    main.innerHTML = orignalMain;
    reload();
  });
}

reload();

// This is the code for addtocart section

// Buttons Functions
function CartFunc() {
  let main = document.querySelector("main");
  let wishlistBtn = document.querySelectorAll(".funcBtnWish");
  let cartBtn = document.querySelector(".Cart");
  let addCartBtn = document.querySelectorAll(".funcBtnCart");
  let removeBtn;
  let cartNo= document.querySelector(".Cart sup").innerHTML;
  
  cartBtn.addEventListener("click", () => {
    main.innerHTML = cartHtml;
    removeBtn= document.querySelectorAll(".removeBtn")
    removeBtn.forEach((e)=>{
      console.log(e.parentElement.parentElement.outerHTML);
      e.addEventListener("click",()=>{
        e.parentElement.parentElement.outerHTML=``;
        document.querySelector(".Cart sup").innerHTML= --cartNo;

      })
    })
  });
  addCartBtn.forEach((e) => {
    e.addEventListener("click", () => {
      document.querySelector(".Cart sup").innerHTML= ++cartNo;
      let itemName =
        e.parentElement.parentElement.parentElement.querySelector(
          ".itemCartName"
        ).innerHTML;
      let itemPrice =
        e.parentElement.parentElement.parentElement.querySelector(
          ".itemCartPrice"
        ).innerHTML;
      let itemImg =
        e.parentElement.parentElement.parentElement.querySelector("img").src;

      cartHtml += ` 
        <div class="cartItemPage">
          <div class="cartItemPageImage">
            <img
              class="_2r_T1I _396QI4"
              alt=""
              src="${itemImg}"
            />
          </div>
          <div class="cartItemInfo">
            <h3>Adidas</h3>
            <p class="itemCartName">${itemName}</p>
            <p class="itemCartPrice">
            ${itemPrice}
            </p>
            <button class="removeBtn">Remove</button>
          </div>
        </div>`;
    });
  });
}
