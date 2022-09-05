
document.getElementById("coupoon").addEventListener("keyup", function(e) { 
    let priceElement = document.getElementById("price");
    let priceString = priceElement.innerText;
    let price = parseFloat(priceString);
    let coupoon = e.target.value;
    let discount = document.getElementById("discount");
    if (coupoon === "DOM") {
        discount.removeAttribute("disabled")
    } else {
        discount.setAttribute("disabled",true);
    }
    
})
document.getElementById("discount").addEventListener("click", function(e) { 
    let priceElement = document.getElementById("price");
    let priceString = priceElement.innerText;
    let price = parseFloat(priceString);
    price = 500 - (500 * (30 / 100))
    priceElement.innerText = price;
})