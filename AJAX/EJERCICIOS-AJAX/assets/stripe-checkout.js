//Este objeto contiene las llaves privadas y públicas dadas por stripe
import STRIPE_KEYS from "./strip-keys.js";

const d = document, 
$tacos = d.getElementById("tacos"), 
$template = d.getElementById("taco-template").content, 
$fragment = d.createDocumentFragment();
fetchOptions = {
    headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
}//Bearer es parte de la documentación de stripe 
};
let prices, products; 

//Modificar el precio 
const moneyFormat = num => `${num.slice(0, -2)}.${num.slice(-2)}`;

//Acceder a los productos. Esta api no da acceso a los precios de los productos
//Acceder a los precios. En stripe los últimos dos dígitos son flotantes.
Promise.all([
    fetch("https://api.stripe.com/v1/products", fetchOptions),
    fetch("https://api.stripe.com/v1/prices", fetchOptions),
]).then((responses) => {
    Promise.all(responses.map((res) => res.json()));
}).then(json => {
    console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices);

    prices.forEach(el=>{
        let productData = products.filter(product => product.id === el.product);
        console.log(productData);

        $template.querySelector(".taco").setAttribute("data-price", el.id);
        $template.querySelector("img").src = productData[0].images[0];
        $template.querySelector("img").alt = productData[0].name;
        $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}</br>
        <b>${moneyFormat(el.unit_amount_decimal)} ${el.currency}</b>`;


        let $clone = d.importNode($template, true),
        $fragment = d.appendChild($clone);
    });
    $tacos.appendChild($fragment);

}).catch(err => {
    console.log(err); 
    let message = err.statusText || "Ocurrió un error al conectarse con el API de Stripe."
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
});

    d.addEventListener("click", e => {
        if(e.target.matches(".taco *")){
            let price = e.target.parentElement.getAttribute("data-price");
            Stripe(STRIPE_KEYS.public)
            .redirectToCheckout({
                lineItems: [{
                    price,
                    quantity: 1,
                    mode: "subscription", 
                    successUrl: "http://127.0.0.1:5500/JavaScript/AJAX/EJERCICIOS-AJAX/assets/stripe-success.html",
                    cancelUrl: "http://127.0.0.1:5500/JavaScript/AJAX/EJERCICIOS-AJAX/assets/stripe-cancel.html",
                }]
            })
            .then(res => {
                if(res.error){
                    $tacos.insertAdjacentHTML("afterend", res.error.message);
                }
            })
        }
    })

 

