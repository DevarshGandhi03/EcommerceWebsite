let itemCards = document.querySelectorAll(".itemCard");
let homeBtn = document.querySelector(".logo");
let orignalMain = document.querySelector("main").innerHTML;
console.log(orignalMain);
let main = document.querySelector("main");

console.log(itemCards);
const functReact = () => {
  itemCards.forEach((e) => {
    e.addEventListener("click", (elem) => {
      console.log(e);
      let imageUrl = e.querySelector("img").src;
      let shoeName = e.querySelector(".itemName").innerHTML;
      let currentPrice = e.querySelector(".itemPrice").innerHTML;
      let originalPrice = e.querySelector(".del").innerHTML;
      console.log(originalPrice);

      main.innerHTML = `<div class="heading">
        <h1 class="heading-2">${shoeName}</h1>
      </div>
      <div class="itemPage">
        <div class="itemImage">
            <img
            class="_2r_T1I _396QI4"
            alt=""
            src="${imageUrl}"
          />
        </div>
        <div class="itemInfo">
            <h3>Adidas</h3>
            <p class="shoeName">${shoeName}</p>
            <p class="price">
            ${currentPrice} &nbsp;<del
                style="font-size: smaller; color: rgb(133, 133, 133)"
                >${originalPrice}</del
              >
            </p>
            <div class="buttons">
                <button class="addToCart btn">Add to cart</button>
                <button class="moveToWishlist btn">Wishlist</button>
              </div>
        </div>
        
      </div>`;
    });
  });
};
homeBtn.addEventListener("click", () => {
  main.innerHTML=` `;
  main.insertAdjacentHTML("afterend", orignalMain)
  functReact();
});
functReact();