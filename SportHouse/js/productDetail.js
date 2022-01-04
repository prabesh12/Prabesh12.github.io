import { createNav } from "./nav.js";
import { createFooter } from "./footer.js";
import { productList } from "./list.js";
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");
console.log(myParam)

const productdetail = document.getElementById("product-deatil")
    
productList.forEach(e => {

 if(e.id == myParam){
  const singleProductInfo = document.getElementById("sinlge-product-info")
  const singleProductCard = document.getElementById("single-product-card")
  
  const productImage = document.createElement("img");
  productImage.setAttribute("class", "single-product-image")
  productImage.src= e.src;
  const productName = document.createElement("h2")
  productName.innerText = e.name;
  const price = document.createElement("h4");
  price.innerText=e.price;
  const form = document.createElement("form")
  form.setAttribute("class", "cart-form")
  form.setAttribute("action", "")
  form.setAttribute("method", "post")
  const decrementQuantity = document.createElement("button")
  decrementQuantity.setAttribute("class", "decrement-quantity")
  decrementQuantity.setAttribute("id", "decrement-quantity")
  decrementQuantity.innerText="-"
  const productInput = document.createElement("input")
  productInput.setAttribute("type","text")
  productInput.setAttribute("class", "product-input");
  productInput.setAttribute("id", "product-input");
  const incrementQuantity = document.createElement("button")
  incrementQuantity.setAttribute("class", "increment-quantity")
  incrementQuantity.setAttribute("id", "increment-quantity")

  incrementQuantity.innerText="+"

form.append(decrementQuantity, productInput, incrementQuantity)
const descriptionTitle = document.createElement("h2")
descriptionTitle.innerText="Description"
const  descriptionContent = document.createElement("p")
descriptionContent.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus mollitia, at quam deserunt atque architecto! Rerum, labore cumque sapiente ipsam vel expedita laboriosam est eveniet velit laborum at, provident molestias"
  singleProductCard.appendChild(productImage)
  singleProductInfo.append(productName, price, form, descriptionTitle, descriptionContent)  
 }
     
});