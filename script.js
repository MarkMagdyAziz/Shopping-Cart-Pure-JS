// Request Porducts From API
function getProductsFromApi()
{
   

    var xhttp=new XMLHttpRequest()
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
         var products =  JSON.parse(this.responseText)
            handleProductsAfterRequest(products)
          
           
        }
       
        
    }
    xhttp.open("GET","https://fakestoreapi.com/products?limit=4",true)
    xhttp.send()

 
  
}


document.addEventListener("DOMContentLoaded",getProductsFromApi)




// Button Fetch More Data From API
var loadMoreBtn = document.getElementById("moreBtn")
loadMoreBtn.addEventListener("click" , getProductsFromApi)


// Handle After Request API
function handleProductsAfterRequest(products) {
    var productsDiv = document.getElementById("myproducts")
    const createRow = document.createElement("div")
    createRow.classList.add("row")
    productsDiv.appendChild(createRow)

    products.map(product => {
        // //if you are a crazy try this code 
        /**
    //     // create column
    //     const column = document.createElement("div")
    //     column.classList.add( "column")
    //     // create div
    //     const card = document.createElement("div")
    //     card.classList.add("card")
    //     // add card into row
    //     column.appendChild(card)
        
    //     // create img
    //     const image = document.createElement("img")
    //     image.setAttribute("src",product.image)
    //     image.setAttribute("alt", product.title)
    //     // Add Image to card
    //     card.appendChild(image)

    //     // create title
    //     const h1Title = document.createElement("h1")
    //     const titleContent = document.createTextNode(product.title.slice(" ", 29))
    //       h1Title.appendChild(titleContent);

    //     // add title to the card
    //     card.appendChild(h1Title)

    //     // create product price
    //     const priceParagraph = document.createElement("p")
    //     priceParagraph.classList.add("price")
    //     // price
    //     const price = document.createTextNode(product.price)
    //     priceParagraph.appendChild(price)
    //     // add product price to card
    //     card.appendChild(priceParagraph)
    //     //product description
    //     const descParagraph = document.createElement("p")
    //     const description = document.createTextNode((product.description).slice(0, 90))  
    //     descParagraph.appendChild(description)
    //     card.appendChild(descParagraph)
    //     // create Add to Cart Button

    //      //product description
    //    const addToCartP = document.createElement("p")  
    //    const addToCartBtn = document.createElement("button")
    //     addToCartP.appendChild(addToCartBtn)
    //     addToCartBtn.textContent= 'Add to Cart'
    //      addToCartBtn.classList.add('addToCartButton')
    //    card.appendChild(addToCartP)
        
////     append card to the row
//  createRow.appendChild(card)
*/
                 createRow.innerHTML += `
                <div class="column">
                <div class="card">
                    <img src="${product.image}"
                        " alt="Denim Jeans">
                    <h1>${(product.title).slice(" ", 29)}</h1>
                    <p class="price">$${product.price}</p>
                        <p >${(product.description).slice(0, 90)}</p>


                    <p><button onclick="addToCart(${product.id},${product.price},(event))">Add to Cart</button></p>
                </div>
            </div>
                
                `;

      })
       
    
}






// Add Products to Cart
var productsIDs = []
 var productsPrices = []
function addToCart(id,price,event) {
   
     event.preventDefault()
       
// Check if Storage has this item already, then add it to localstorage
    
    
    if (!productsIDs.includes(id) ) {
        productsIDs.push(id);
         localStorage.setItem('productsIDs', JSON.stringify(productsIDs));
    }
    // Add Price to local Storage
    if (!productsPrices.includes(price)) {
        productsPrices.push(price);
         localStorage.setItem('productsPrices', JSON.stringify(productsPrices));
     }
    
}




// Handle Shoping Cart Icon On Click
const shoppingCartIcon = document.getElementById("shoppingCartIcon")
const nextURL = 'http://127.0.0.1:5500/ShoppingCart.html';


shoppingCartIcon.addEventListener("click", (event) => {
    event.preventDefault()
    window.location.assign(nextURL);
     

})