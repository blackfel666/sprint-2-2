import { products } from './products.js';

const cart = [];

/**
 * @param {number} id 
 */

const buy = (id) => {
    const productToAdd = products.find(p => p.id === id)
        if (productToAdd){
            const cartItem =cart.find(p => p.id === id)
            if (cartItem){
                cartItem.quantity++
            } else {
                cart.push( { ...productToAdd, quantity: 1 })
            }
            applyPromotionsCart();
            printCart();
        }
}       

const cleanCart = () =>  {
    cart.length = 0
    applyPromotionsCart()
    printCart()
}

const calculateTotal = () => {
    const total = cart.reduce((acumulador, item)=>{
        return acumulador + (item.price * item.quantity)
    }, 0)
    return total
}

const applyPromotionsCart = () =>  {
    cart.forEach(item => {
        item.subtotal = calculateTotal()
        if (item.offer && item.quantity >= item.offer.number ) {
            const discountPercentage = item.offer.percent;
            const discountFactor = ( 100 - discountPercentage) / 100;
            item.subtotalWithDiscount = item.subtotal * discountFactor;
        } else {
            delete item.subtotalWithDiscount;
        }
    })
}

const printCart = () => {
    const cartList = document.getElementById('cart_list')
    const totalPrice= document.getElementById('total_price')
    const countProduct = document.getElementById('count_product')
    applyPromotionsCart()
    let totalWithDiscounts = 0
    cartList.innerHTML = '';

    cart.forEach (item => {

        const finalSubtotal =
            item.subtotalWithDiscount !== undefined
                ? item.subtotalWithDiscount 
                : item.price * item.quantity; 

        totalWithDiscounts += finalSubtotal;
        const row = document.createElement('tr')

    row.innerHTML =`
        <th scope="row">${item.name}</th>
		<td>$${item.price.toFixed(2)}</td>
		<td>
            <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})"> − </button>
            <span class="mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-outline-danger" onclick="addToCart(${item.id})"> + </button>
        </td>
        <td>
		    $${finalSubtotal.toFixed(2)} 
            ${item.subtotalWithDiscount ? '<span class="badge ms-2 text-primary">Offer</span>' : ''}
        </td>
    `;

    cartList.appendChild(row)

    })

    if(totalPrice){
        totalPrice.textContent = totalWithDiscounts.toFixed(2);
    }

    const totalItems = cart.reduce((acc, item)=> acc + item.quantity, 0)
    
    if (countProduct){
        countProduct.textContent = totalItems
    }    
}

const addToCart =(id) =>{buy(id)}

const removeFromCart = (id) => {
    const index= cart.findIndex( item => item.id === id);
    if (index !== -1) {
        const product = cart[index]
        if(product.quantity > 1){ 
            product.quantity--   
        }else{
            cart.splice(index , 1)
        }
        applyPromotionsCart()
        printCart()
    }
}

const open_modal = () =>  {
    printCart();
}

const setupModalListeners = () => {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('show.bs.modal', open_modal);
    }
};

const setupEventListeners = () => {

    const buyButtons = document.querySelectorAll('.add-to-cart');
    buyButtons.forEach ( button => {
        const productId = parseInt(button.getAttribute('data-product-id'));
        button.addEventListener('click', () => { buy(productId); });
    });
    
    const cleanButton = document.getElementById('clean-cart');
    if (cleanButton) {
        cleanButton.addEventListener('click', cleanCart);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    setupModalListeners(); 
});

window.removeFromCart = removeFromCart;
window.printCart = printCart;
window.applyPromotionsCart = applyPromotionsCart;
window.addToCart = addToCart;