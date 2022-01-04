import { createNav } from "./nav.js";
import { createFooter } from "./footer.js";
import { productList } from "./list.js";
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
console.log(myParam)

const productdetail = document.getElementById("product-deatil")
    
productList.forEach(e => {
     if(e.id){
  const singleProductCard = document.getElementsByClassName("single-product-card")
  const productImage = document.createElement("img");
  productImage.setAttribute("class", "single-product-image")
  productImage.src= e.src;
  singleProductCard.appendChild(productImage);
     }
});