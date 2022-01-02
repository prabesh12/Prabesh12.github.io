const searchItem = document.querySelector(".search-bar")
const searchBtn = document.querySelector(".search-btn")

getRandomProduct()

async function getRandomProduct(){
    const res = await fetch ("Endpoint")
    const resData = await res.json();

    const randomProduct = resData;

    addProduct(randomProduct, true)
}

async function getProductById(id){
    const res = await fetch("Endpoint="+ id )
    const resData = await res.json()
    const product = resData.array[0]

    return product;

}

async function getProductByTerm(term)
{
    const res = await fetch("Apis endpoint" + term)
    const resData = await res.json()
   const products = resData.products;
   return products;
}

function addProduct(productData , random = false)
{
    
}