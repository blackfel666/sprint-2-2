# 🛒 ShopNow - E-commerce Shopping Cart

A modern, fully functional shopping cart application built with vanilla JavaScript, featuring dynamic cart management, product filtering, promotional discounts, and robust form validation.

---

## ✨ Features

### Core Functionality

* **Dynamic Shopping Cart:** Add, remove, and **update product quantities** in real-time directly from the cart modal.
* **Smart Promotions:** Automatic discount application based on quantity thresholds.
* **Product Categories:** Organized product listings across **Grocery**, **Beauty**, and **Clothes**.
* **Real-time Totals:** Live cart updates and total calculation with promotions factored in.
* **Form Validation:** Complete checkout form validation using custom **Regex patterns** for data integrity.

### Technical Highlights

* **ES6 Modules** architecture (`type="module"`).
* Event-driven programming for decoupled interactions.
* **Bootstrap 5** for a responsive and clean design.
* **Vanilla JavaScript (ES6+):** No external libraries required beyond Bootstrap/Font Awesome assets.
* Semantic HTML5 structure.

---

## 🛠️ Technologies

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **JavaScript** | ES6+ | Core business logic, cart management, and validation. |
| **HTML5** | Semantic | Structure and accessibility. |
| **CSS3** | Bootstrap 5.3.0 | Framework for responsive styling. |
| **Font Awesome** | 6.4.0 | Iconography. |

---

## 📁 Project Structure

SPRINT-2.2/ 
├── css/
│ └── styles.css 
├── images/ 
│ ├── favicon.ico 
│ ├── product.svg 
│ ├── img-1.jpg
│ └── logo.png
├── js/ 
│ ├── checkout.js 
│ ├── products.js 
│ └── shop.js
├── checkout.html
├── index.html
└── jsconfig.json

---

## 🚀 Getting Started

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge).
* A local web server (required for ES6 Modules and CORS policies).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/blackfel666/sprint-2-2.git
    cd sprint-2-2
    ```
---

## 💡 Usage

Github Pages https://blackfel666.github.io/sprint-2-2/

### Shopping Flow

1.  Browse products on `index.html`.
2.  Click **"Add to cart"** to purchase items.
3.  Open the shopping cart modal via the top-right button.
4.  **Adjust quantities** directly in the modal using the **`+`** (plus) and **`-`** (minus) buttons.
5.  Proceed to `checkout.html` and complete the form.

### Promotional System

Discounts are automatically applied based on the quantity of these items in the cart:

| Product | Offer |
| :--- | :--- |
| **Cooking Oil** | **20% off** when buying **3 or more** units. |
| **Instant Cupcake Mixture** | **30% off** when buying **10 or more** units. |

---

## 🎯 Key Functions

### Cart Management (`shop.js`)

| Function | Description |
| :--- | :--- |
| `buy(id)` | Adds or increments a product's quantity in the cart. |
| `removeFromCart(id)` | Decrements product quantity; removes the product if the quantity reaches zero. |
| `cleanCart()` | Clears the entire cart array. |
| `calculateTotal()` | Computes the subtotal sum of all items. |
| `applyPromotionsCart()` | Applies quantity-based discounts to eligible items. |
| `printCart()` | Renders the cart modal UI, updating the product list and totals. |

### Form Validation (`checkout.js`)

| Function | Description |
| :--- | :--- |
| `validate(event)` | Triggers full form validation on submission. |

---

## 🤝 Contributing

This is an educational project developed for the **IT Academy Barcelona's Frontend Development course**.

---

## 👨‍💻 Author

**blackfel666**
* GitHub: **`@blackfel666`**