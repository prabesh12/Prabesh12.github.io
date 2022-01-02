

function creatProductGrdi(n){
  for (let i =0; i<n; i++){
    
    let main = document.querySelector(".main");
let section = document.createElement("section");
section.setAttribute("class", "container");
let heading = document.createElement("h2");
let productContainer = document.createElement("div");
productContainer.setAttribute("class", "product-container");

productList.forEach((element) => {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let img = document.createElement("img");
  img.setAttribute("class","product-img")
  img.src = element.src;
  let prodName = document.createElement("h4");
  let price = document.createElement("p");
  let viewDetail = document.createElement("button");
  viewDetail.innerText = "View Detail";
  viewDetail.setAttribute("class", "view-detail");
  card.append(img, prodName, price, viewDetail);
  main.appendChild(section);
  section.append(heading, productContainer);
  productContainer.appendChild(card);
  prodName.textContent = element.name;
  heading.textContent = element.title;
  price.textContent = element.price;
  main.appendChild(section);
  viewDetail.addEventListener("click",  () => {
    location.replace(`singleproductpage.html?id=${element.id}`);
  });
});
  }
}
creatProductGrdi(5);

