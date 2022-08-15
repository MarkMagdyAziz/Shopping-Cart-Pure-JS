// shopping cart function handler
 const storedIDsArray = JSON.parse(localStorage.getItem('productsIDs'))

document.addEventListener('DOMContentLoaded', function (e) {
     e.preventDefault()
       for (let id of storedIDsArray) {
       getSingleProduct(id)
}
    
}, false);



// Show Single Product

// Request Single Product From API with ID
function getSingleProduct(id)
{
   

    var xhttp=new XMLHttpRequest()
    xhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {
            var product = JSON.parse(this.responseText)
            handleProductAfterRequest(product)
          
        }
       
        
    }
    xhttp.open("GET",`https://fakestoreapi.com/products/${id}`,true)
    xhttp.send()

 
  
}

// Handle Product After Request

// Handler Showing Product After Request API
function handleProductAfterRequest(product) {
    var productsDiv = document.getElementById("myproducts")
                 productsDiv.innerHTML += `<div class="column">
                                <div class="card">
                                    <img src="${product.image}"
                                        " alt="Denim Jeans">
                                    <h1>${(product.title).slice(" ", 29)}</h1>
                                    <p class="price">$${product.price}</p>
                                        <p >${(product.description).slice(0, 90)}</p>
                                    
                                    <div id="removeIcon">
                                   <a href="#" >
                                           <i class="material-icons"   onclick="removeProduct(${product.id},${product.price})">
                                        delete  </i>
                                    </a>
                                    </div>
                                     <a href="productDetails/id:${product.id}/" >Details</a>
                                </div>
                               
                            </div>`;

     
       
      
}
// handle backArrow
const backArrow = document.getElementById("backArrow")
backArrow.addEventListener("click", (event) => {
    event.preventDefault()
const nextURL = 'http://127.0.0.1:5500/Home.html';
    window.location.assign(nextURL);
     

})

// Handle Remove Product From Cart

function removeProduct(id,price) {
    
    const storedIDs = JSON.parse(localStorage.getItem('productsIDs'))
    localStorage.removeItem("productsIDs");
    const filteredArray = storedIDs.filter(e => e !== id)
    localStorage.setItem('productsIDs', JSON.stringify(filteredArray));

    

    
    handleRemovingPrice(price)
    
    // Reload the page to handle Local Storage Again
    const nextURL = 'http://127.0.0.1:5500/ShoppingCart.html';
    window.location.reload(nextURL)    
}

// Show Total price
function handleTotalPrice() {
  
   let totalPrice = 0
    const storedPrices = JSON.parse(localStorage.getItem('productsPrices'))
    
    storedPrices.forEach(price => {
        totalPrice = totalPrice +=price
    });

      const totalPriceShowing = document.getElementById("totalP")
    totalPriceShowing.innerHTML = totalPrice
}

handleTotalPrice()
// Handle remove from total Price

function handleRemovingPrice(price) {


     const storedPrices = JSON.parse(localStorage.getItem('productsPrices'))
    localStorage.removeItem("productsPrices");


    const filteredArray = storedPrices.filter(e => e !== price)
    localStorage.setItem('productsPrices', JSON.stringify(filteredArray));
    handleTotalPrice()
      const nextURL = 'http://127.0.0.1:5500/ShoppingCart.html';
    window.location.reload(nextURL)    
    
}