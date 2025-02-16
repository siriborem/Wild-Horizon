// Cart count and animation logic
document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');

    // Load the cart count from localStorage
    let cartCount = parseInt(localStorage.getItem('cartCount'), 10) || 0;
    cartCountElement.textContent = cartCount;

    // Quantity adjustment logic
    const quantityElement = document.getElementById('product-quantity');
    let quantity = parseInt(quantityElement.textContent, 10) || 1;

    document.getElementById('increase-quantity').addEventListener('click', () => {
        quantity += 1;
        quantityElement.textContent = quantity;
    });

    document.getElementById('decrease-quantity').addEventListener('click', () => {
        if (quantity > 1) {
            quantity -= 1;
            quantityElement.textContent = quantity;
        }
    });

    document.getElementById('add-to-cart').addEventListener('click', (event) => {
        cartCount += quantity; // Increment the cart count by the current quantity
        cartCountElement.textContent = cartCount;

        // Save the updated cart count to localStorage
        localStorage.setItem('cartCount', cartCount);

        // Create animated item
        const button = event.target;
        const animatedItem = document.createElement('div');
        animatedItem.classList.add('animated-item');
        document.body.appendChild(animatedItem);

        // Get button and cart positions
        const buttonRect = button.getBoundingClientRect();
        const cartRect = document.getElementById('cart-link').getBoundingClientRect();

        // Set initial position of animated item
        animatedItem.style.left = `${buttonRect.left + buttonRect.width / 2 - 15}px`;
        animatedItem.style.top = `${buttonRect.top + buttonRect.height / 2 - 15}px`;
        animatedItem.style.position = 'absolute';

        // Animate to cart
        animatedItem.animate(
            [
                {
                    transform: `translate(0, 0)`
                },
                {
                    transform: `translate(${cartRect.left - buttonRect.left}px, ${cartRect.top - buttonRect.top}px)`
                }
            ],
            {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'forwards',
            }
        ).onfinish = () => {
            // Ensure the animated item is removed after animation
            animatedItem.remove();
        };
    });

    // Remove from cart logic
    const removeButton = document.getElementById('remove-from-cart');
    removeButton.addEventListener('click', () => {
        if (cartCount > 0) {
            cartCount -= 1; // Decrement the cart count
            cartCountElement.textContent = cartCount;

            // Save the updated cart count to localStorage
            localStorage.setItem('cartCount', cartCount);
        }
    });
});

// Hero Image Slideshow
const heroImage = document.querySelector('.hero-image img');
const images = [
    'Images/tent.webp',
    'Images/tent1.jpg',
    'Images/tent2.jpg',
    'Images/tent4.jpg'
];

let currentImageIndex = 0;
let slideshowInterval;

// Create overlay and slideshow elements
const overlay = document.createElement('div');
overlay.className = 'slideshow-overlay';
document.body.appendChild(overlay);

const slideshowImage = document.createElement('img');
overlay.appendChild(slideshowImage);

// Show the slideshow when hero image is clicked
heroImage.addEventListener('click', () => {
    overlay.classList.add('active');
    currentImageIndex = 0;
    slideshowImage.src = images[currentImageIndex];
    slideshowInterval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshowImage.src = images[currentImageIndex];
    }, 2000); // Change image every 3 seconds
});

// Close the slideshow when overlay is clicked
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    clearInterval(slideshowInterval);
});
