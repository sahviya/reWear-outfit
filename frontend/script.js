// ReWear - Sustainable Preloved Fashion Marketplace
// Core frontend logic and dynamic interactions

const DEFAULT_PRODUCTS = [
    {
        id: "oversized-tee",
        title: "Oversized Beige Cotton T-Shirt",
        category: "T-Shirts",
        gender: "Men",
        price: 139,
        originalPrice: 799,
        discount: "-56%",
        rating: 4.5,
        reviewsCount: 12,
        condition: "New without tags",
        brand: "Unbranded",
        image: "assets/product-oversized-tee.png",
        images: ["assets/product-oversized-tee.png"],
        colors: ["#d2b48c"],
        sizes: ["L", "XL"],
        description: "Comfortable oversized beige t-shirt, breathable cotton. Never worn, trendy drop shoulder fit.",
        seller: "Rahul M.",
        location: "Delhi, IN"
    },
    {
        id: "plain-tees-pack",
        title: "Pack of 2 Plain T-Shirts (Black & White)",
        category: "T-Shirts",
        gender: "Men",
        price: 199,
        originalPrice: 999,
        discount: "-50%",
        rating: 4.9,
        reviewsCount: 45,
        condition: "Worn Once",
        brand: "H&M",
        image: "assets/product-plain-tees.png",
        images: ["assets/product-plain-tees.png"],
        colors: ["#000000", "#ffffff"],
        sizes: ["M", "L"],
        description: "Essential black and white plain t-shirts. Excellent condition.",
        seller: "Rahul M.",
        location: "Delhi, IN"
    },
    {
        id: "kids-striped-sweats",
        title: "Kids Striped Sweat Suit",
        category: "Kids",
        gender: "Kids",
        price: 239,
        originalPrice: 1299,
        discount: "-54%",
        rating: 4.7,
        reviewsCount: 8,
        condition: "Good",
        brand: "Zara Kids",
        image: "assets/product-kids-sweats.png",
        images: ["assets/product-kids-sweats.png"],
        colors: ["#ffffff", "#000000"],
        sizes: ["Age 4-5"],
        description: "Cute striped sweat suit for kids. Warm and cozy.",
        seller: "Priya S.",
        location: "Mumbai, MH"
    },
    {
        id: "yellow-jumpsuit",
        title: "Yellow Summer Jumpsuit",
        category: "Jumpsuits",
        gender: "Women",
        price: 359,
        originalPrice: 999,
        discount: "-10%",
        rating: 4.8,
        reviewsCount: 214,
        condition: "Worn Once",
        brand: "Zara",
        image: "assets/hero-fashion.jpg",
        images: ["assets/hero-fashion.jpg", "assets/product-anarkali.jpg"],
        colors: ["#ffd700", "#1b4332", "#ffffff"],
        sizes: ["Free Size"],
        description: "A bright yellow summer jumpsuit with wide legs and a comfortable fit. Perfect for daytime outings and vacations. Lightweight breathable fabric, draped only once.",
        seller: "Anjali Gupta",
        location: "Varanasi, UP"
    },
    {
        id: "mysore-saree",
        title: "Mysore Royal Blue Silk Saree",
        category: "Sarees",
        gender: "Women",
        price: 299,
        originalPrice: 899,
        discount: "-17%",
        rating: 4.6,
        reviewsCount: 142,
        condition: "Good",
        brand: "Mysore Silks",
        image: "assets/mysore-blue-saree.png",
        images: ["assets/mysore-blue-saree.png", "assets/hero-fashion.jpg"],
        colors: ["#0000ff", "#00008b", "#c9a84c"],
        sizes: ["Free Size"],
        description: "A rich Mysore silk saree in a royal blue color, adorned with a traditional silver zari border. Lightweight, elegant, and comfortable to carry all day. Worn twice.",
        seller: "Meera Nair",
        location: "Mysore, KA"
    },
    {
        id: "rose-pink-anarkali",
        title: "Gulaab Rose Pink Anarkali",
        category: "Gowns",
        gender: "Women",
        price: 339,
        originalPrice: null,
        discount: "NEW",
        rating: 4.9,
        reviewsCount: 88,
        condition: "New",
        brand: "Gulaab Studio",
        image: "assets/product-anarkali.jpg",
        images: ["assets/product-anarkali.jpg", "assets/womens-top.jpg"],
        colors: ["#ec4899", "#fffbf0", "#800020"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "A flowing floor-length anarkali in soft pink georgette with delicate aari embroidery and matching dupatta. Features a modern silhouette while retaining classic style.",
        seller: "ReWear Boutique",
        location: "New Delhi, DL"
    },
    {
        id: "pink-lehenga",
        title: "Rani Pink Bridal Lehenga",
        category: "Gowns",
        gender: "Women",
        price: 399,
        originalPrice: 1199,
        discount: "-17%",
        rating: 4.7,
        reviewsCount: 178,
        condition: "Worn Once",
        brand: "Sabyasachi Design",
        image: "assets/product-lehenga.png",
        images: ["assets/product-lehenga.png", "assets/product-anarkali.jpg"],
        colors: ["#ff1493", "#ffd700", "#ffffff"],
        sizes: ["S", "M", "L"],
        description: "A stunning Rani Pink bridal lehenga featuring heavy gold thread embroidery, matching choli, and a sheer georgette dupatta. Makes a bold statement at weddings.",
        seller: "Komal Kapur",
        location: "Chandigarh, PB"
    },
    {
        id: "peach-joggers",
        title: "Peach Jogger Pants",
        category: "Pants & Jeans",
        gender: "Women",
        price: 199,
        originalPrice: 599,
        discount: "-25%",
        rating: 4.5,
        reviewsCount: 311,
        condition: "Good",
        brand: "Urban Basics",
        image: "assets/product-kurta.jpg",
        images: ["assets/product-kurta.jpg"],
        colors: ["#ffdab9", "#ffffff"],
        sizes: ["S", "M", "L", "XL"],
        description: "Comfortable and stylish peach jogger pants with practical front pockets. Perfect for casual wear and lounging.",
        seller: "Rahul Sharma",
        location: "Jaipur, RJ"
    },
    {
        id: "purple-saree",
        title: "Purple Silk Saree",
        category: "Sarees",
        gender: "Women",
        price: 499,
        originalPrice: null,
        discount: "NEW",
        rating: 4.9,
        reviewsCount: 187,
        condition: "New",
        brand: "Weavers Loom",
        image: "assets/product-sherwani.jpg",
        images: ["assets/product-sherwani.jpg"],
        colors: ["#800080", "#000000", "#ffd700"],
        sizes: ["Free Size"],
        description: "A gorgeous purple silk saree featuring an intricate gold border. Makes a stunning statement for any festive occasion.",
        seller: "Aditya Verma",
        location: "Lucknow, UP"
    },
    {
        id: "red-jutti",
        title: "Punjabi Red Embroidered Jutti",
        category: "Accessories",
        gender: "Women",
        price: 159,
        originalPrice: 549,
        discount: "-27%",
        rating: 4.9,
        reviewsCount: 421,
        condition: "Good",
        brand: "Patiala Juttis",
        image: "assets/punjabi-red-jutti.png",
        images: ["assets/punjabi-red-jutti.png", "assets/emerald-kundan-necklace.png"],
        colors: ["#ff0000", "#ffd700", "#ffffff"],
        sizes: ["M", "L"],
        description: "Authentic Punjabi juttis in vibrant red leather, showcasing delicate gold and white thread embroidery. Cushioned sole for ultimate comfort.",
        seller: "Gurpreet Kaur",
        location: "Amritsar, PB"
    },
    {
        id: "kundan-necklace",
        title: "Emerald Kundan Necklace Set",
        category: "Accessories",
        gender: "Women",
        price: 399,
        originalPrice: null,
        discount: null,
        rating: 4.9,
        reviewsCount: 67,
        condition: "New",
        brand: "Jewels of India",
        image: "assets/emerald-kundan-necklace.png",
        images: ["assets/emerald-kundan-necklace.png", "assets/punjabi-red-jutti.png"],
        colors: ["#005c29", "#ffd700"],
        sizes: ["Free Size"],
        description: "A royal Kundan necklace set embellished with emerald green beads and intricate gold plating. Includes matching drop earrings.",
        seller: "Rajesh Jewellers",
        location: "Mumbai, MH"
    },
    {
        id: "retro-graphic-tee",
        title: "Retro Vintage Graphic Tee",
        category: "T-Shirts",
        gender: "Men",
        price: 59,
        originalPrice: 299,
        discount: "-50%",
        rating: 4.7,
        reviewsCount: 95,
        condition: "Good",
        brand: "Thrift Threads",
        image: "assets/mens-tshirt.jpg",
        images: ["assets/mens-tshirt.jpg", "assets/mens-pants.jpg"],
        colors: ["#000000", "#ffffff"],
        sizes: ["S", "M", "L", "XL"],
        description: "Super comfy cotton graphic tee with a distressed retro print. Perfectly broken-in feel, no stains or tears.",
        seller: "Thrift Threads Store",
        location: "Kolkata, WB"
    },
    {
        id: "classic-denim-jeans",
        title: "Classic Straight-Fit Denim Jeans",
        category: "Pants & Jeans",
        gender: "Men",
        price: 119,
        originalPrice: 599,
        discount: "-50%",
        rating: 4.5,
        reviewsCount: 110,
        condition: "Excellent",
        brand: "Levis",
        image: "assets/mens-pants.jpg",
        images: ["assets/mens-pants.jpg", "assets/mens-tshirt.jpg"],
        colors: ["#0000ff", "#ffffff"],
        sizes: ["S", "M", "L"],
        description: "Classic blue straight-fit denims. Durable cotton construction, minimal signs of wear on the cuffs. Fits true to size.",
        seller: "Denim Heaven",
        location: "Bengaluru, KA"
    },
    {
        id: "pastel-crop-top",
        title: "Pastel Lavender Summer Top",
        category: "T-Shirts",
        gender: "Women",
        price: 59,
        originalPrice: 199,
        discount: "-35%",
        rating: 4.8,
        reviewsCount: 64,
        condition: "Like New",
        brand: "Zara",
        image: "assets/womens-top.jpg",
        images: ["assets/womens-top.jpg", "assets/womens-dress.jpg"],
        colors: ["#e6e6fa", "#ffffff"],
        sizes: ["XS", "S", "M"],
        description: "Lightweight summer crop top in a beautiful pastel lavender shade. Worn once for a photoshoot, in pristine condition.",
        seller: "Aisha Khan",
        location: "Hyderabad, TS"
    },
    {
        id: "classic-oxford-shirt",
        title: "Classic Oxford Blue Button-Down Shirt",
        category: "Men's Wear",
        gender: "Men",
        price: 99,
        originalPrice: 499,
        discount: "-50%",
        rating: 4.6,
        reviewsCount: 72,
        condition: "Good",
        brand: "H&M",
        image: "assets/mens-shirt.jpg",
        images: ["assets/mens-shirt.jpg", "assets/mens-jacket.jpg"],
        colors: ["#87ceeb", "#ffffff"],
        sizes: ["M", "L", "XL"],
        description: "Premium cotton Oxford shirt in sky blue. A versatile closet staple with a comfortable fit. Gentle wear.",
        seller: "Karan Johar",
        location: "Mumbai, MH"
    },
    {
        id: "floral-summer-dress",
        title: "Chic Floral Summer Dress",
        category: "Gowns",
        gender: "Women",
        price: 139,
        originalPrice: 799,
        discount: "-56%",
        rating: 4.7,
        reviewsCount: 45,
        condition: "Worn Once",
        brand: "Zara",
        image: "assets/womens-dress.jpg",
        images: ["assets/womens-dress.jpg", "assets/womens-top.jpg"],
        colors: ["#ffffff", "#ffc0cb", "#008000"],
        sizes: ["S", "M", "L"],
        description: "A breezy floral summer dress with a beautiful print and tiered hem. Ideal for brunches or daytime events.",
        seller: "Priya Sharma",
        location: "Delhi, DL"
    },
    {
        id: "royal-gold-sherwani",
        title: "Royal Gold Embroidered Sherwani",
        category: "Sherwanis",
        gender: "Men",
        price: 519,
        originalPrice: 1999,
        discount: "-35%",
        rating: 4.9,
        reviewsCount: 29,
        condition: "Approved",
        brand: "Manyavar",
        image: "assets/product-sherwani.jpg",
        images: ["assets/product-sherwani.jpg", "assets/product-kurta.jpg"],
        colors: ["#ffd700", "#ffffff"],
        sizes: ["M", "L", "XL"],
        description: "An elegant gold sherwani with hand embroidery around collar and buttons. Perfect groom or groomsman attire.",
        seller: "Aditya Verma",
        location: "Lucknow, UP"
    },
    {
        id: "casual-denim-jacket",
        title: "Casual Denim Jacket",
        category: "Men's Wear",
        gender: "Men",
        price: 199,
        originalPrice: 1200,
        discount: "-58%",
        rating: 4.5,
        reviewsCount: 81,
        condition: "Good",
        brand: "Levi's",
        image: "assets/mens-jacket.jpg",
        images: ["assets/mens-jacket.jpg", "assets/mens-shirt.jpg"],
        colors: ["#0000ff", "#ffffff"],
        sizes: ["M", "L"],
        description: "Sturdy classic denim jacket with front button closures and chest pockets. Shows nice vintage fading.",
        seller: "Kabir Malhotra",
        location: "Mumbai, MH"
    },
    {
        id: "designer-georgette-gown",
        title: "Designer Georgette Gown",
        category: "Gowns",
        gender: "Women",
        price: 479,
        originalPrice: 2499,
        discount: "-52%",
        rating: 4.8,
        reviewsCount: 19,
        condition: "Excellent",
        brand: "Label Ritu Kumar",
        image: "assets/womens-gown.jpg",
        images: ["assets/womens-gown.jpg", "assets/womens-dress.jpg"],
        colors: ["#800020", "#ffd700"],
        sizes: ["S", "M", "L"],
        description: "A gorgeous flowing georgette gown in deep burgundy with subtle gold zari patterns around the neckline.",
        seller: "Shanaya Kapoor",
        location: "Mumbai, MH"
    }
];


window.ALL_PRODUCTS = [...DEFAULT_PRODUCTS];

// Read unified products list
function getProducts() {
    return window.ALL_PRODUCTS;
}

let activeClosetSeller = '';

// Render marketplace products dynamically
function renderMarketplaceProducts(productsList) {
    const grid = document.getElementById('marketplaceGrid') || document.getElementById('categories');
    if (!grid) return;

    grid.innerHTML = '';

    if (productsList.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted); border: 1px dashed var(--border); border-radius: 8px; width: 100%;">
                <p style="font-size: 16px;">No products match the selected criteria.</p>
            </div>
        `;
        return;
    }

    productsList.forEach(product => {
        const card = document.createElement('div');
        const categoryData = `${product.category || ''} ${product.gender || ''}`.toLowerCase();
        const sizesData = (product.sizes || []).join(' ').toLowerCase();
        
        card.className = 'product-card-item';
        card.setAttribute('data-category', categoryData);
        card.setAttribute('data-price', product.price || 0);
        card.setAttribute('data-sizes', sizesData);
        card.setAttribute('data-seller', product.seller || '');

        const badgeHtml = product.discount ? 
            `<span class="product-card-v2__badge ${product.discount.startsWith('-') ? 'badge-discount' : 'badge-new'}">${product.discount}</span>` : '';
        const wasPriceHtml = product.originalPrice ? 
            `<span class="price-was">₹${product.originalPrice}</span>` : '';

        // Star rating
        const ratingVal = product.rating || 5;
        const filledStars = '★'.repeat(Math.round(ratingVal));
        const emptyStars = '☆'.repeat(5 - Math.round(ratingVal));

        card.innerHTML = `
            <a href="product-detail.html?id=${product.id}" class="product-card-link">
                <article class="product-card-v2">
                    <div class="product-card-v2__image-container">
                        <img src="${product.image}" alt="${product.title}" class="product-card-v2__img">
                        ${badgeHtml}
                        <button class="product-card-v2__wishlist-btn" type="button" aria-label="Add to wishlist" onclick="event.preventDefault(); toggleWishlist(this, '${product.id}');">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                        <div class="condition-tag" style="bottom: 12px; left: 12px;">${product.condition || 'Good'}</div>
                    </div>
                    <div class="product-card-v2__details">
                        <h3 class="product-card-v2__title">${product.title}</h3>
                        <div class="product-card-v2__rating">
                            <div class="stars-gold">${filledStars}${emptyStars}</div>
                            <span class="rating-text">${ratingVal} (${product.reviewsCount || 1})</span>
                        </div>
                        <div style="font-size: 12px; color: var(--text-dim); margin-bottom: 8px;">
                            Seller: ${product.seller || 'ReWear'} · ${product.location || 'India'}
                        </div>
                        <div class="product-card-v2__pricing">
                            <span class="price-now">₹${product.price}</span>
                            ${wasPriceHtml}
                        </div>
                    </div>
                </article>
            </a>
        `;
        grid.appendChild(card);
    });
}

function renderClosetsShowcase() {
    const scrollContainer = document.getElementById('closetsScroll');
    if (!scrollContainer) return;

    const products = getProducts();
    
    // Extract unique sellers with locations
    const sellersMap = {};
    products.forEach(p => {
        if (p.seller) {
            const sellerKey = p.seller.trim();
            if (!sellersMap[sellerKey]) {
                sellersMap[sellerKey] = {
                    name: sellerKey,
                    location: p.location || "India",
                    initials: sellerKey.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
                };
            }
        }
    });

    scrollContainer.innerHTML = '';

    // Create an "All Closets" card
    const allCard = document.createElement('div');
    allCard.className = `closet-card ${activeClosetSeller === '' ? 'active' : ''}`;
    allCard.innerHTML = `
        <div class="closet-card__avatar" style="background: linear-gradient(135deg, var(--gold) 0%, #333 100%);">ALL</div>
        <div class="closet-card__name">All Closets</div>
        <div class="closet-card__location">Platform</div>
    `;
    allCard.addEventListener('click', () => selectCloset(''));
    scrollContainer.appendChild(allCard);

    // Create cards for each seller
    Object.values(sellersMap).forEach(seller => {
        const card = document.createElement('div');
        card.className = `closet-card ${activeClosetSeller === seller.name ? 'active' : ''}`;
        card.innerHTML = `
            <div class="closet-card__avatar">${seller.initials}</div>
            <div class="closet-card__name">${seller.name}</div>
            <div class="closet-card__location">${seller.location}</div>
        `;
        card.addEventListener('click', () => selectCloset(seller.name));
        scrollContainer.appendChild(card);
    });
}

function selectCloset(sellerName) {
    activeClosetSeller = sellerName;
    
    // Update closet cards visual state
    document.querySelectorAll('.closet-card').forEach(card => {
        const nameEl = card.querySelector('.closet-card__name');
        if (nameEl) {
            const isAll = sellerName === '' && nameEl.textContent === 'All Closets';
            const isMatch = nameEl.textContent === sellerName;
            if (isAll || isMatch) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        }
    });

    // Handle filter banner visibility
    const filterBanner = document.getElementById('closetFilterBanner');
    const filterText = document.getElementById('closetFilterText');
    if (filterBanner && filterText) {
        if (sellerName) {
            filterText.textContent = `Showing items from ${sellerName}'s Closet`;
            filterBanner.style.display = 'flex';
        } else {
            filterBanner.style.display = 'none';
        }
    }

    // Re-apply filters including the closet filter
    applyFilters();
}

function clearClosetFilter() {
    selectCloset('');
}

// Setup Authentication State in Navbar
function setupNavbarAuth() {
    const navActions = document.querySelector('.nav-actions');
    if (!navActions) return;

    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        // 1. If we have a sign-in button, replace it
        const signInBtn = navActions.querySelector('a[href="login.html"]');
        if (signInBtn) {
            signInBtn.remove();
            
            const userSpan = document.createElement('span');
            userSpan.style.cssText = 'font-size: 13px; color: var(--text-muted); margin-right: 8px; font-weight: 500;';
            userSpan.textContent = loggedInUser;
            
            const logoutLink = document.createElement('a');
            logoutLink.href = '#';
            logoutLink.className = 'btn btn-outline btn-sm';
            logoutLink.textContent = 'Logout';
            logoutLink.style.cursor = 'pointer';
            logoutLink.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('loggedInUser');
                showNotification('Logged out successfully.');
                setTimeout(() => window.location.reload(), 1000);
            });
            
            navActions.appendChild(userSpan);
            navActions.appendChild(logoutLink);
        } else {
            // 2. If it's a dashboard page with a hardcoded user name, update the user name span
            const userSpan = navActions.querySelector('span');
            if (userSpan) {
                userSpan.textContent = loggedInUser;
            }
            
            // Set up click listener for the logout button if present
            const logoutBtn = navActions.querySelector('a[href="login.html"]');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    localStorage.removeItem('loggedInUser');
                    showNotification('Logged out successfully.');
                    setTimeout(() => window.location.href = 'index.html', 1000);
                });
            }
        }
    } else {
        // If on a dashboard page, redirect to login page
        const isDashboard = document.getElementById('my-products') || document.querySelector('.dashboard-header');
        if (isDashboard) {
            window.location.href = 'login.html';
        }
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    setupHeaderScroll();
    setupTabNavigation();
    
    // Removed backend fetch for products to run flawlessly as a frontend-only application
    
    // Check if on marketplace/shop page
    const isMarketplace = document.getElementById('categoryFilter') || document.getElementById('closetsScroll');
    if (isMarketplace) {
        // Render initial products and closets
        const products = getProducts();
        renderMarketplaceProducts(products);
        renderClosetsShowcase();
    }

    // Dynamic Auth Navigation setup
    setupNavbarAuth();

    // Search & Filter functionality
    setupFilters();
    setupSearch();
    
    // Form submissions
    setupForms();
    
    // Load detail page details if on detail page
    if (document.getElementById('mainProductImage')) {
        loadProductDetail();
    }

    // Load seller product lists if on seller dashboard
    if (document.getElementById('my-products')) {
        renderSellerProducts();
    }

    // Load buyer orders list if on buyer dashboard
    if (document.querySelector('#orders .order-list')) {
        renderBuyerOrders();
    }

    if (document.querySelector('#wishlist .wishlist-grid')) {
        renderBuyerWishlist();
    }

    initWishlistIcons();
    setupHeroCarousel();
    setupGlobalBackButton();
});

// Global Back Button
function setupGlobalBackButton() {
    // Don't show on home page
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('/') || path === '') return;

    const backBtn = document.createElement('button');
    backBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>';
    
    // Styling the button to be floating on the top left (below header)
    Object.assign(backBtn.style, {
        position: 'fixed',
        top: '100px',
        left: '30px',
        zIndex: '9999',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'var(--gold, #c9a84c)',
        color: '#fff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        transition: 'transform 0.2s ease, background-color 0.2s ease'
    });

    backBtn.onmouseover = () => {
        backBtn.style.transform = 'scale(1.1)';
        backBtn.style.backgroundColor = '#b09240';
    };
    backBtn.onmouseout = () => {
        backBtn.style.transform = 'scale(1)';
        backBtn.style.backgroundColor = 'var(--gold, #c9a84c)';
    };

    backBtn.onclick = () => window.history.back();
    
    document.body.appendChild(backBtn);
}

// Hero Image Carousel
function setupHeroCarousel() {
    const heroImg = document.querySelector('.hero__media img');
    if (!heroImg) return;

    const images = [
        "assets/carousel-1.png", // Red Saree
        "assets/carousel-2.png", // White Lehenga
        "assets/carousel-3.png"  // Green Dress
    ];
    let currentIndex = 0;

    // Apply smooth CSS transition
    heroImg.style.transition = 'opacity 1s ease-in-out';

    setInterval(() => {
        // Fade out
        heroImg.style.opacity = '0';
        
        setTimeout(() => {
            // Change source and fade back in
            currentIndex = (currentIndex + 1) % images.length;
            heroImg.src = images[currentIndex];
            heroImg.style.opacity = '1';
        }, 1000); // Wait for fade-out to finish (matches the 1s transition)
    }, 3000); // 3 seconds interval
}

// Scroll Header effect
function setupHeaderScroll() {
    const siteTop = document.getElementById('siteTop');
    if (!siteTop) return;

    window.addEventListener('scroll', function() {
        siteTop.classList.toggle('is-scrolled', window.scrollY > 40);
    }, { passive: true });
}

// Tab navigation for dashboards
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Search box perform search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-btn');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keyup', performSearch);
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card-item');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        
        if (title.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter drop-downs
function setupFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (sizeFilter) sizeFilter.addEventListener('change', applyFilters);
}

function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sizeFilter = document.getElementById('sizeFilter');
    
    const selectedCategory = categoryFilter ? categoryFilter.value : '';
    const selectedPrice = priceFilter ? priceFilter.value : '';
    const selectedSize = sizeFilter ? sizeFilter.value : '';
    
    const cards = document.querySelectorAll('.product-card-item');
    
    cards.forEach(card => {
        let show = true;
        
        // 1. Category Filter
        if (selectedCategory !== '') {
            const cardCat = card.getAttribute('data-category').toLowerCase();
            const filterCat = selectedCategory.toLowerCase();
            
            let match = cardCat.includes(filterCat);
            if (filterCat === 'men') {
                match = cardCat.includes('men');
            } else if (filterCat === 'women') {
                match = cardCat.includes('women');
            } else if (filterCat === 'gowns') {
                match = cardCat.includes('gowns') || cardCat.includes('lehengas');
            }
            
            if (!match) show = false;
        }
        
        // 2. Price Filter
        if (selectedPrice !== '' && show) {
            const price = parseFloat(card.getAttribute('data-price') || '0');
            const [min, max] = selectedPrice.split('-').map(Number);
            if (max) {
                if (price < min || price > max) show = false;
            } else {
                if (price < min) show = false;
            }
        }
        
        // 3. Size Filter
        if (selectedSize !== '' && show) {
            const cardSizes = card.getAttribute('data-sizes').toLowerCase();
            const filterSize = selectedSize.toLowerCase();
            if (!cardSizes.includes(filterSize) && !cardSizes.includes('free')) {
                show = false;
            }
        }
        
        // 4. Closet (Seller) Filter
        if (activeClosetSeller !== '' && show) {
            const cardSeller = card.getAttribute('data-seller') || '';
            if (cardSeller.toLowerCase() !== activeClosetSeller.toLowerCase()) {
                show = false;
            }
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

// Notification system
function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 24px;
        right: 24px;
        background: var(--gold);
        color: #0a0a0a;
        font-weight: 500;
        padding: 14px 28px;
        border-radius: 4px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        z-index: 2000;
        animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(120%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Wishlist clicks toggling
function toggleWishlist(button, id) {
    button.classList.toggle('active');
    const isSaved = button.classList.contains('active');
    
    const fillState = isSaved ? 'currentColor' : 'none';
    const heartSvg = button.querySelector('svg');
    if (heartSvg) heartSvg.setAttribute('fill', fillState);
    
    let wishlist = JSON.parse(localStorage.getItem('userWishlist') || '[]');
    if (isSaved) {
        if (!wishlist.includes(id)) wishlist.push(id);
    } else {
        wishlist = wishlist.filter(item => item !== id);
    }
    localStorage.setItem('userWishlist', JSON.stringify(wishlist));
    
    showNotification(isSaved ? "Saved to your Wishlist!" : "Removed from Wishlist.");
    
    // re-render if on dashboard
    if (document.querySelector('#wishlist .wishlist-grid')) {
        renderBuyerWishlist();
    }
}

function initWishlistIcons() {
    const wishlist = JSON.parse(localStorage.getItem('userWishlist') || '[]');
    const buttons = document.querySelectorAll('.product-card-v2__wishlist-btn, .icon-btn[aria-label="Wishlist"]');
    buttons.forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes('toggleWishlist')) {
            const match = onclickAttr.match(/toggleWishlist\([^,]+,\s*'([^']+)'\)/);
            if (match && match[1]) {
                const id = match[1];
                if (wishlist.includes(id)) {
                    btn.classList.add('active');
                    const svg = btn.querySelector('svg');
                    if (svg) svg.setAttribute('fill', 'currentColor');
                }
            }
        }
    });
}

// Dynamic load product details page
function loadProductDetail() {
    let productId = 'rose-pink-anarkali'; // default
    const params = new URLSearchParams(window.location.search);
    if (params.has('id')) {
        productId = params.get('id');
    } else if (window.location.href.includes('?id=')) {
        productId = window.location.href.split('?id=')[1].split('&')[0];
    }
    
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showNotification("Product not found!");
        return;
    }
    
    // Set breadcrumbs
    document.getElementById('breadcrumbCategoryLink').textContent = product.gender + "'s Occasion Wear";
    document.getElementById('breadcrumbCategoryLink').href = "marketplace.html?cat=" + product.category.toLowerCase();
    document.getElementById('breadcrumbCurrent').textContent = product.title;
    
    // Set images
    const mainImg = document.getElementById('mainProductImage');
    mainImg.src = product.image;
    mainImg.alt = product.title;
    
    // Render thumbnails
    const thumbsContainer = document.getElementById('productThumbnails');
    thumbsContainer.innerHTML = '';
    
    const imagesList = product.images && product.images.length > 0 ? product.images : [product.image];
    imagesList.forEach((imgSrc, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `product-gallery__thumb ${idx === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${imgSrc}" alt="Thumbnail View">`;
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.product-gallery__thumb').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImg.src = imgSrc;
        });
        thumbsContainer.appendChild(thumb);
    });
    
    // Details panel details
    document.getElementById('productCategoryText').textContent = product.category;
    document.getElementById('productTitleText').textContent = product.title;
    
    // Stars formatting
    const starsContainer = document.getElementById('ratingStars');
    const ratingVal = product.rating || 5;
    const filledCount = Math.round(ratingVal);
    starsContainer.textContent = '★'.repeat(filledCount) + '☆'.repeat(5 - filledCount);
    document.getElementById('ratingScoreText').textContent = `${ratingVal} (${product.reviewsCount || 0})`;
    
    // Prices
    document.getElementById('productPriceText').textContent = `₹${product.price}`;
    const origPriceEl = document.getElementById('productOrigPriceText');
    if (product.originalPrice) {
        origPriceEl.textContent = `₹${product.originalPrice}`;
    } else {
        origPriceEl.textContent = '';
    }
    
    document.getElementById('productDescText').textContent = product.description;
    
    // Seller Info box
    document.getElementById('sellerNameText').textContent = product.seller || "ReWear Boutique";
    document.getElementById('sellerLocationText').textContent = product.location || "New Delhi, IN";
    document.getElementById('productConditionText').textContent = `Condition: ${product.condition || 'New'}`;
    
    // Colors swatches
    const colorsContainer = document.getElementById('colorSwatchesContainer');
    colorsContainer.innerHTML = '';
    const colorsList = product.colors || ["#c9a84c"];
    document.getElementById('selectedColorName').textContent = 'Default';
    
    colorsList.forEach((hex, idx) => {
        const swatch = document.createElement('div');
        swatch.className = `color-swatch ${idx === 0 ? 'active' : ''}`;
        swatch.style.background = hex;
        swatch.addEventListener('click', function() {
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('selectedColorName').textContent = hex;
        });
        colorsContainer.appendChild(swatch);
    });
    
    // Sizes pills
    const sizesContainer = document.getElementById('sizePillsContainer');
    sizesContainer.innerHTML = '';
    const sizesList = product.sizes || ["Free Size"];
    
    sizesList.forEach((sz, idx) => {
        const pill = document.createElement('button');
        pill.className = `size-pill ${idx === 0 ? 'active' : ''}`;
        pill.textContent = sz;
        pill.type = "button";
        pill.addEventListener('click', function() {
            document.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
        sizesContainer.appendChild(pill);
    });
}

// Add Product upload form submissions
function setupForms() {
    const listingForm = document.getElementById('listingForm');
    const imageInput = document.getElementById('addProductImage');
    const imagePreview = document.getElementById('imagePreview');
    const previewContainer = document.getElementById('imagePreviewContainer');
    
    let uploadedImageBase64 = '';
    
    if (imageInput && imagePreview) {
        imageInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.addEventListener('load', function() {
                    uploadedImageBase64 = this.result;
                    imagePreview.src = this.result;
                    previewContainer.style.display = 'block';
                });
                reader.readAsDataURL(file);
            }
        });
    }
    
    if (listingForm) {
        listingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('addProductName').value;
            const category = document.getElementById('addProductCategory').value;
            const brand = document.getElementById('addProductBrand').value;
            const size = document.getElementById('addProductSize').value;
            const condition = document.getElementById('addProductCondition').value;
            const origPrice = parseFloat(document.getElementById('addProductOrigPrice').value);
            const price = parseFloat(document.getElementById('addProductPrice').value);
            const desc = document.getElementById('addProductDesc').value;
            const seller = document.getElementById('addProductSeller').value;
            const location = document.getElementById('addProductLocation').value;
            
            // Format size and discount
            const discountPct = Math.round(((origPrice - price) / origPrice) * 100);
            const discountLabel = discountPct > 0 ? `-${discountPct}%` : 'NEW';
            
            const newProduct = {
                id: 'prod_' + Date.now(),
                title: name,
                category: category.charAt(0).toUpperCase() + category.slice(1),
                gender: (category === 'kurtas' || category === 'sherwanis') ? 'Men' : 'Women',
                price: price,
                originalPrice: origPrice,
                discount: discountLabel,
                rating: 5.0,
                reviewsCount: 1,
                condition: condition,
                brand: brand,
                image: uploadedImageBase64 || 'assets/hero-fashion.jpg',
                images: [uploadedImageBase64 || 'assets/hero-fashion.jpg'],
                colors: ["#c9a84c"],
                sizes: [size.toUpperCase()],
                description: desc,
                seller: seller,
                location: location
            };
            
            // Save to localStorage
            const userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
            userProducts.push(newProduct);
            localStorage.setItem('userProducts', JSON.stringify(userProducts));
            
            showNotification('Your thrift listing is now live!');
            listingForm.reset();
            if (previewContainer) previewContainer.style.display = 'none';
            uploadedImageBase64 = '';
            
            // Switch tabs to My Products list
            setTimeout(() => {
                const myProductsBtn = document.querySelector('[data-tab="my-products"]');
                if (myProductsBtn) {
                    myProductsBtn.click();
                    renderSellerProducts();
                }
            }, 500);
        });
    }
}

// Render dynamic user-submitted product lists on Seller Dashboard
function renderSellerProducts() {
    const listContainer = document.querySelector('.product-list');
    if (!listContainer) return;
    
    // Clear list but keep static layout header if any
    listContainer.innerHTML = '';
    
    const userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
    
    if (userProducts.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 40px; border: 1px dashed var(--border); border-radius: 8px; color: var(--text-muted);">
                <p>You have not listed any items for sale yet.</p>
                <button type="button" class="btn btn-gold btn-sm" style="margin-top: 12px;" onclick="document.querySelector('[data-tab=add-product]').click()">List a Product</button>
            </div>
        `;
        return;
    }
    
    userProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h4>${product.title}</h4>
                <p>Category: ${product.category}</p>
                <p>Brand: ${product.brand}</p>
                <p>Thrift Price: ₹${product.price}</p>
                <p>Status: <span class="status available">Active Listing</span></p>
                <div class="product-actions" style="margin-top: 12px; display: flex; gap: 8px;">
                    <button class="btn view-btn btn-sm" onclick="window.location.href='product-detail.html?id=${product.id}'">View Page</button>
                    <button class="btn delete-btn btn-sm" style="border-color: var(--danger); color: var(--danger);" onclick="deleteListing('${product.id}')">Delete</button>
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Delete user listing
function deleteListing(id) {
    if (confirm("Are you sure you want to delete this listing?")) {
        let userProducts = JSON.parse(localStorage.getItem('userProducts') || '[]');
        userProducts = userProducts.filter(p => p.id !== id);
        localStorage.setItem('userProducts', JSON.stringify(userProducts));
        showNotification("Listing deleted successfully.");
        renderSellerProducts();
    }
}

// Render dynamic user orders on Buyer Dashboard
function renderBuyerOrders() {
    const orderList = document.querySelector('#orders .order-list');
    if (!orderList) return;

    let orders = JSON.parse(localStorage.getItem('userOrders'));
    if (!orders) {
        // Initialize default orders in Rupees
        orders = [
            {
                id: "#1234",
                product: "Elegant Evening Dress",
                image: "assets/product-anarkali.jpg",
                qty: 1,
                size: "M",
                color: "Midnight Black",
                total: 299,
                type: "Purchase",
                date: "Jan 15, 2024",
                status: "Delivered"
            },
            {
                id: "#1235",
                product: "Classic Black Suit",
                image: "assets/product-sherwani.jpg",
                qty: 1,
                size: "L",
                color: "Navy Blue",
                total: 105,
                type: "Rental",
                date: "Jan 20, 2024",
                status: "Confirmed"
            }
        ];
        localStorage.setItem('userOrders', JSON.stringify(orders));
    }

    orderList.innerHTML = '';
    orders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'order-card';
        card.innerHTML = `
            <div style="display: flex; gap: 16px; align-items: center;">
                <img src="${order.image}" alt="${order.product}" style="width: 50px; height: 65px; object-fit: cover; border-radius: 4px; border: 1px solid var(--border); background: var(--bg-card);">
                <div class="order-info">
                    <h4>Order ${order.id}</h4>
                    <p>Product: <strong>${order.product}</strong></p>
                    <p>Type: ${order.type} ${order.size ? `· Size: ${order.size}` : ''} ${order.color ? `· Color: ${order.color}` : ''}</p>
                    <p>Total: <strong style="color: var(--gold);">₹${order.total}</strong></p>
                    <p style="margin-top: 4px;">Status: <span class="status ${order.status.toLowerCase()}">${order.status}</span></p>
                </div>
            </div>
            <div class="order-date">${order.date}</div>
        `;
        orderList.appendChild(card);
    });
}

// Render Wishlist on Buyer Dashboard
function renderBuyerWishlist() {
    const wishlistGrid = document.querySelector('#wishlist .wishlist-grid');
    if (!wishlistGrid) return;
    
    const wishlistIds = JSON.parse(localStorage.getItem('userWishlist') || '[]');
    
    wishlistGrid.innerHTML = '';
    
    if (wishlistIds.length === 0) {
        wishlistGrid.innerHTML = '<p style="grid-column: 1/-1; color: var(--text-muted);">Your wishlist is empty.</p>';
        return;
    }

    // Call getProducts if it exists
    const products = typeof getProducts === 'function' ? getProducts() : [];
    
    wishlistIds.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product) {
            const card = document.createElement('div');
            card.className = 'product-card-v2';
            card.innerHTML = `
                <div class="product-card-v2__image-container">
                    <img src="${product.image}" alt="${product.title}" class="product-card-v2__img">
                    <button class="product-card-v2__wishlist-btn active" type="button" aria-label="Remove from wishlist"
                        onclick="event.preventDefault(); toggleWishlist(this, '${product.id}');">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </button>
                </div>
                <div class="product-card-v2__info">
                    <h3 class="product-card-v2__title">${product.title}</h3>
                    <p class="product-card-v2__brand">${product.brand || 'Unbranded'}</p>
                    <div class="product-card-v2__price-row">
                        <span class="product-card-v2__price">₹${product.price}</span>
                    </div>
                </div>
            `;
            // Wrap in anchor
            const link = document.createElement('a');
            link.href = 'product-detail.html?id=' + product.id;
            link.className = 'product-card-link';
            link.appendChild(card);
            
            wishlistGrid.appendChild(link);
        }
    });
}

// Cart Page Logic
function renderCartPage() {
    const container = document.getElementById('cartContainer');
    if (!container) return;
    
    let cart = JSON.parse(localStorage.getItem('userCart') || '[]');
    const products = typeof getProducts === 'function' ? getProducts() : [];
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-msg">
                <p>Your cart is empty.</p>
                <a href="marketplace.html" class="btn btn-gold">Continue Shopping</a>
            </div>
        `;
        container.style.gridTemplateColumns = '1fr';
        return;
    }
    
    container.style.gridTemplateColumns = '';
    let subtotal = 0;
    let itemsHtml = '<div class="cart-items">';
    
    cart.forEach((item, index) => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const itemTotal = product.price * (item.qty || 1);
            subtotal += itemTotal;
            itemsHtml += `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${product.title}</h4>
                        <p class="cart-item-meta">Size: ${item.size || 'Free Size'} · Color: ${item.color || 'Default'}</p>
                        <p class="cart-item-meta">Qty: ${item.qty || 1}</p>
                        <p class="cart-item-price">₹${product.price}</p>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Remove item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>
            `;
        }
    });
    
    itemsHtml += '</div>';
    
    const shipping = subtotal > 499 ? 0 : 50;
    const grandTotal = subtotal + shipping;
    
    const summaryHtml = `
        <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="summary-totals">
                <div class="totals-row">
                    <span>Subtotal</span>
                    <span>₹${subtotal}</span>
                </div>
                <div class="totals-row">
                    <span>Shipping</span>
                    <span>${shipping === 0 ? 'Free' : '₹' + shipping}</span>
                </div>
                <div class="totals-row grand-total">
                    <span>Grand Total</span>
                    <span>₹${grandTotal}</span>
                </div>
            </div>
            <button class="btn btn-gold btn-block" style="margin-top: 24px;" onclick="window.location.href='checkout.html?fromCart=true'">Proceed to Checkout</button>
            <p style="font-size: 11px; color: var(--text-dim); text-align: center; margin-top: 16px;">
                Taxes calculated at checkout if applicable.
            </p>
        </div>
    `;
    
    container.innerHTML = itemsHtml + summaryHtml;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('userCart') || '[]');
    cart.splice(index, 1);
    localStorage.setItem('userCart', JSON.stringify(cart));
    showNotification('Item removed from cart.');
    renderCartPage();
}
