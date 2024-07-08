// Product array
const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    { id: '3', name: 'Product 3' }
];

// Populate product options
const productNameSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// Track reviews in localStorage
document.getElementById('reviewFormElement').addEventListener('submit', function(event) {
    event.preventDefault();

    // Update review count in localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Redirect to review.html
    window.location.href = 'review.html';
});
