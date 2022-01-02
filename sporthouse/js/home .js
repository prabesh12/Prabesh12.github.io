const productList = [

  {
 " id": 1,
 title: "Mens Jersy",
 name: "Jermany Jersy",
 src: "img/18_21.jpg",
 price: " price 500",
 description:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde vero. Corporis, vero. Doloremque consequuntur, tenetur magni obcaecati distinctio officiis blanditiis recusandae aspernatur illo ipsam quam ex earum dolorum facere.",
},
{
 " id": 2,
 title: "Mens Jersy",
 name: "Brazil Jersy",
 src: "img/18_21.jpg",
 price: " price 500",
 description:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde vero. Corporis, vero. Doloremque consequuntur, tenetur magni obcaecati distinctio officiis blanditiis recusandae aspernatur illo ipsam quam ex earum dolorum facere.",
},
{
 " id": 3,
 title: "Mens Jersy",
 name: "Portugal Jersy",
 src: "img/18_21.jpg",
 price: " price 500",
 description:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde vero. Corporis, vero. Doloremque consequuntur, tenetur magni obcaecati distinctio officiis blanditiis recusandae aspernatur illo ipsam quam ex earum dolorum facere.",
},
{
 " id": 4,
 title: "Mens Jersy",
 name: "hungary Jersy",
 src: "img/18_21.jpg",
 price: " price 500",
 description:
   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde vero. Corporis, vero. Doloremque consequuntur, tenetur magni obcaecati distinctio officiis blanditiis recusandae aspernatur illo ipsam quam ex earum dolorum facere.",
}

]

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

