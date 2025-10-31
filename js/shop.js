// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

/**
 * Adds a product to the shopping cart
 * @param {number} id - Product ID to add
 */

// Exercise 1
const buy = (id) => {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
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

        

// Exercise 2
const cleanCart = () =>  {
    cart.length = 0
    applyPromotionsCart()
    printCart()
}

// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
    const total = cart.reduce((acumulador, item)=>{
        return acumulador + (item.price * item.quantity)
    }, 0)
    console.log(total)
    return total
}

// Exercise 4
const applyPromotionsCart = () =>  {
    // Apply promotions to each item in the array "cart"
    cart.forEach(item => {
        item.subtotal = item.price * item.quantity;
        if (item.offer && item.quantity >= item.offer.number ) {
            const discountPercentage = item.offer.percent;
            const discountFactor = ( 100 - discountPercentage) / 100;
            item.subtotalWithDiscount = item.subtotal * discountFactor;
        } else {
            delete item.subtotalWithDiscount;
        }
    })
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom

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
            ${item.subtotalWithDiscount ? '<span class="badge ms-2">OFFER</span>' : ''}
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


// ** Nivell II **

// Exercise 7
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