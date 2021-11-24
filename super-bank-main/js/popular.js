
var products = JSON.parse(localStorage.getItem("products"));
console.log(products)
const loadPopularItem = () => {
    let product_cards = "";
    products.forEach( product => {
        if (product.rating > 0) {
    product_cards += `<div class="col mb-5">
    <div class="card h-100" >
        <!-- Sale badge-->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${product.prevPrice ? "Sale" : ""}</div>
        <!-- Product image-->
        <img class="card-img-top" src="${product.productImage}" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">${product.productTitle}</h5>`;
        if (product.rating > 0) {

                product_cards += `<!-- Product reviews-->
                <div class="d-flex justify-content-center small text-warning mb-2">`;

                product_cards += [...Array(product.rating).keys()].reduce(
                    (acc, index) => acc + `<div class="bi-star-fill"></div>`, `<div class="bi-star-fill"></div>`
                );
                
                product_cards += `</div>`;
        }
        product_cards += `<!-- Product price-->
                <span class="text-muted text-decoration-line-through">
                    ${product.prevPrice ? product.prevPrice : ""}
                </span>
                ${product.productPrice}
                <div>
                    Quantity: <select  id="mySelect${product.id}" >
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center"><a id="${'cart_'+product.id}" class="add-cart btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
        </div>
    </div>
</div>`
    }
    });
    document.getElementById("content_holder").innerHTML = product_cards;
}
loadPopularItem(); 
welcomeLoggedUser();
function welcomeLoggedUser() {
    let logged_member = JSON.parse(localStorage.getItem('logged_member'));
    console.log(logged_member)
    if (logged_member) {
        document.getElementById('logged_member').innerHTML = `Welcome ${logged_member.name} `;
    }
}