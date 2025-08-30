const app = {
    // 1. Product Data Structure
    products: [
        // Array containing all product data. Each object represents a single product
        // with properties like id, name, category, price, rating, image, and description.
    { "id": 1, "name": "Nike Air Max 270", "category": "Men", "price": 8000, "rating": 4.5, "image": "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2375666/2024/12/23/330d9c1e-be14-4380-9d4b-8e1ace4178f91734932934194-Nike-Men-Black-Air-Max-270-Sneakers-8891734932933910-2.jpg", "description": "A stylish and comfortable athletic shoe for men." },
    { "id": 2, "name": "Adidas Ultraboost", "category": "Men", "price":12000, "rating": 4.8, "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzULsogPJEmnjdJ24wq7mZqMnPVv-VHUDNXJ9ufDu_KX9ScKbRtgS0FJuDC6f4a5nCtvWdtwIvkd7rPeJnQarfbFMsBD3d9GcGGLH_GfPLLrmJfaA&usqp=CAc", "description": "High-performance running shoes with a classic design." },
    { "id": 3, "name": "Timberland Boots", "category": "Men", "price": 9899, "rating": 4.7, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWWOZy--K1ySwRhNoMdfaqRbp6e3UgHj2-A&s", "description": "Durable and waterproof boots for any weather." },
    { "id": 4, "name": "Puma Suede Classic", "category": "Men", "price": 4899, "rating": 4.2, "image": "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/30165826/2025/3/4/452a73ac-ed5e-4ee7-90d0-5326d047dd111741084512564-Puma-Unisex-Suede-XL-Sneakers-4651741084512112-1.jpg", "description": "Iconic suede sneakers for a timeless casual look." },
    { "id": 5, "name": "Reebok Club C", "category": "Men", "price": 3640, "rating": 4.4, "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaNZZN0bHS-JHFvqfEB_Dc99HNj00SqfiMWkkdC5E-LAouolbRGFoEBsw5YDevsxMPA0vWITJHzHPhKDe_JmHKMkH9OWIvV7bSI2fVmof84hK6MOxQV3iywV8" },

    { "id": 6, "name": "Puma Cali Dream", "category": "Women", "price": 3000, "rating": 4.6, "image": "https://m.media-amazon.com/images/I/41oxCazgiqL.jpg", "description": "Chunky platform sneakers perfect for a modern street style." },
    { "id": 7, "name": "Converse All Star", "category": "Women", "price": 4079, "rating": 4.3, "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTuNNHnWEuZ8KKc1vA24Xl4xBhtmWl_hv84MVsJbMtDQNU2XRhePlqSr2H76Cod5mxp30pMoC03-JKWWvoEDke59gKIlk64DUyiIvQuTzGaRQ23HNxLUEb4cA", "description": "The iconic high-top sneakers, a wardrobe staple." },
    { "id": 8, "name": "New Balance 574", "category": "Women", "price": 5680, "rating": 4.7, "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqLLqvyl2qTCBdEcgvVmjh5U7JzPBoSLSK7iIuM_I_HXpMY-5tj65DM74j_ltMolmNkbgZ9Bn7tUIRU2b2qL43PBGGgCe4pFjpGrRyZcLW7o3tF-vjbWNoLg", "description": "Classic retro sneakers with comfortable cushioning." },
    { "id": 9, "name": "Vans Old Skool", "category": "Women", "price": 2000, "rating": 4.1, "image": "https://rukminim1.flixcart.com/image/800/800/k2gh30w0/shoe/3/t/y/old-skool-3-vans-old-skool-black-original-imafkzukhep9dufm.jpeg?q=90", "description": "Skate shoes with the classic Vans side stripe." },
    { "id": 10, "name": "Nike Court Legacy", "category": "Women", "price": 5809, "rating": 4.5, "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRshS2H__a88lQAdD9k8A5cSRZInKtinRMtOuMCke8JEVobcSL2GByimLe2f2yBe9FFfTKAitdN53bjRxsitoepvyGJzFD7JZujMebP28ZW86g4l8dwuMGf0Sr_plkqqa-rXc0&usqp=CAc", "description": "Vintage tennis style with modern, comfortable feel." },
    
    { "id": 16, "name": "Salomon Speedcross", "category": "Men", "price": 2599, "rating": 4.5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyDQkDRSBReox1s-YZVy6hFpzl3lGCODtOg&s", "description": "Trail running shoes with an aggressive grip for technical terrain." },
    { "id": 17, "name": "Merrell Moab", "category": "Men", "price": 10000, "rating": 4.6, "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTgpDNuMBwAFQmXunuBSNpZmisT9zr37KgZjOeRLjWOslxaM6XIcRybiQS1UKgo5dSJKdpu31_6qS5cG-2rg5h3mH8FNOuUVfaAHcjmkpfS3zYAblawBevs", "description": "Durable and waterproof hiking shoes for outdoor adventures." },
    { "id": 18, "name": "Dr. Martens 1460", "category": "Men", "price": 14700, "rating": 4.8, "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSZqehWgdJItkeAIfh3PyL-cdny4QqTgb6Fvi9gBXYkL-esXcoy8YvIzC6PXqnHrSWCuUnvv7Z1PyPuSVSiblAlCs1tFz02vrKw44YzhvvKxruJx4qyF6J8tSw", "description": "Iconic lace-up leather boots with a durable air-cushioned sole." },
    { "id": 20, "name": "Cole Haan GrandPro", "category": "Men", "price": 13580, "rating": 4.6, "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR6ptRqfuEY5-mGY8UI4-iSCiNz9i0B4Tt2HPTaON3cq54QupgfAvUvvJw7wusgQv0Fl1Y5IvESqAMyOgeiqAiseIrBLy5X8Pt_U-fo8ETqpq7-BazCYPTx7g", "description": "Lightweight sneakers with an athletic feel and stylish design." },
    
    { "id": 29, "name": "Nike", "category": "Women", "price": 2799, "rating": 4.6, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypAJYWviMYiGtlzB0bWph_AI9APuGFA6xnw&s" },
    { "id": 29, "name": "Adidas", "category": "Women", "price": 3490, "rating": 4.6, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IYhVEfBYEJbarB1pBUg7xjgcRfaI-a81hg&s" },
    { "id": 29, "name": "Puma", "category": "Women", "price": 5699, "rating": 4.6, "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/310308/08/sv04/fnd/IND/fmt/png/Skyrocket-Lite-Alt-Women's-Running-Shoes" },
    { "id": 28, "name": "Sorel Joan of Arctic", "category": "Women", "price": 5430, "rating": 4.7, "image": "https://u-mercari-images.mercdn.net/photos/m27383390599_1.jpg", "description": "A stylish and waterproof winter boot designed for cold weather." },
    { "id": 29, "name": "Nike Origin", "category": "Women", "price": 6709, "rating": 4.6, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfW5_g5w672ED_Nh7amQFIKfmVctVndLIMLQ&s" },
    { "id": 30, "name": "Puma Fancy", "category": "Women", "price": 8999, "rating": 4.9, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQShJG47n_CI-nK0JisB8HIStymYkT3TJtAg&s"}
    ],
    // The cart array to hold items added by the user
    cart: [],

    // 2. Dynamic Display & Routing
    showPage(pageId) {
        // Hides all page sections
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        // Shows the selected page by adding the 'active' class
        document.getElementById(`${pageId}-page`).classList.add('active');
        // Renders content based on the page ID
        if (pageId === 'products') {
            this.updateProducts();
        } else if (pageId === 'cart') {
            this.renderCart();
        }
    },

    renderProducts(containerId, productsToRender) {
        // Gets the container element to render products into
        const container = document.getElementById(containerId);
        if (!container) return; // Exits if the container doesn't exist

        container.innerHTML = ''; // Clears previous content
        // Displays a message if no products are found
        if (productsToRender.length === 0) {
            container.innerHTML = '<p style="text-align: center; width: 100%;">No products found.</p>';
            return;
        }

        // Loops through each product and creates a product card element
        productsToRender.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            // Populates the card's HTML with product details
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
                <p class="rating">Rating: ${'★'.repeat(Math.floor(product.rating))} (${product.rating})</p>
                <p class="description">${product.description}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            `;
            container.appendChild(card); // Appends the card to the container
        });
    },

    // Cart Functions
    addToCart(productId) {
        // Finds the product in the main products array
        const product = this.products.find(p => p.id === productId);
        if (product) {
            // Checks if the item is already in the cart
            const existingItem = this.cart.find(item => item.id === productId);
            if (existingItem) {
                // If it exists, increments the quantity
                existingItem.quantity++;
            } else {
                // If not, adds a new item to the cart with a quantity of 1
                this.cart.push({ ...product, quantity: 1 });
            }
            // Updates the cart count in the header
            document.getElementById('cartCount').textContent = this.cart.length;
            alert(`${product.name} added to cart!`);
        }
    },

    renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalContainer = document.getElementById('cart-total');

        cartItemsContainer.innerHTML = ''; // Clears previous cart items
        // Displays "Your cart is empty" if there are no items
        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotalContainer.textContent = 'Total: ₹0.00';
            return;
        }

        let total = 0;
        // Loops through each item in the cart and creates a list item element
        this.cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            // Populates the cart item's HTML with item details
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name} (${item.quantity})</span>
                <span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                <button class="remove-from-cart-btn" data-id="${item.id}">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity; // Calculates the running total
        });
        // Updates the total price displayed
        cartTotalContainer.textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
    },

    remove_from_cart(product_id) {
        // Finds the index of the item to remove
        const item_index = this.cart.findIndex(item => item.id === product_id);

        if (item_index > -1) {
            // Removes the item from the cart array using its index
            this.cart.splice(item_index, 1);

            // Updates the cart count in the header
            document.getElementById('cartCount').textContent = this.cart.length;

            // Re-renders the cart to reflect the change
            this.renderCart();
            alert('Item removed from cart.');
        }
    },

    // 3. Filtering and 4. Sorting Logic
    updateProducts() {
        let filteredProducts = [...this.products]; // Creates a copy of the products array

        // Gets current filter and sort values from the UI
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        const minPrice = parseInt(document.getElementById('minPrice').value);
        const maxPrice = parseInt(document.getElementById('maxPrice').value);
        const searchQuery = document.getElementById('searchInput').value.toLowerCase();
        const sortOption = document.getElementById('sortSelect').value;

        // Updates the displayed price values
        document.getElementById('minPriceValue').textContent = minPrice;
        document.getElementById('maxPriceValue').textContent = maxPrice;

        // Applies filters
        if (activeCategory !== 'All') {
            filteredProducts = filteredProducts.filter(p => p.category === activeCategory);
        }
        filteredProducts = filteredProducts.filter(p => p.price >= minPrice && p.price <= maxPrice);
        if (searchQuery) {
            filteredProducts = filteredProducts.filter(p =>
                p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery)
            );
        }

        // Applies sorting based on the selected option
        if (sortOption === 'priceAsc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceDesc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'ratingDesc') {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === 'nameAsc') {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        // Renders the final filtered and sorted products
        this.renderProducts('product-list-container', filteredProducts);
    },

    // Initialization
    init() {
        // Ensures the script runs only after the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Event listeners for navigation links and CTA button
            const navLinks = document.querySelectorAll('.nav-link, .cta-button');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = e.target.dataset.page;
                    if (pageId) {
                        this.showPage(pageId);
                    }
                });
            });

            // Renders a specific set of featured products on the home page
            const featured = this.products.filter(p => p.rating >= 4.7);
            this.renderProducts('featured-products', featured);

            // Event listeners for filtering, sorting, and adding to cart on the products page
            const productPageControls = document.getElementById('products-page');
            if (productPageControls) {
                productPageControls.addEventListener('click', (e) => {
                    if (e.target.matches('.filter-btn')) {
                        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                        e.target.classList.add('active');
                        this.updateProducts();
                    }
                    if (e.target.matches('.add-to-cart-btn')) {
                        const productId = parseInt(e.target.dataset.id);
                        this.addToCart(productId);
                    }
                });
                productPageControls.addEventListener('input', this.updateProducts.bind(this));
                productPageControls.addEventListener('change', this.updateProducts.bind(this));
            }


            // Event listener for removing items from the cart
            const cartPage = document.getElementById('cart-page');
            if (cartPage) {
                cartPage.addEventListener('click', (e) => {
                    if (e.target.matches('.remove-from-cart-btn')) {
                        const productId = parseInt(e.target.dataset.id);
                        this.remove_from_cart(productId);
                    }
                });
            }


            // Event listener for the contact form submission
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset(); // Resets the form fields after submission

                });
            }
        });
    }
};

// Initializes the application
app.init();