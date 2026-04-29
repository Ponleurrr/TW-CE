const techProducts = products.filter(
    p => p.category === "tech"
);


document.addEventListener("DOMContentLoaded", () => {
    filterSubcategory("all");
});


// subcategory
function filterSubcategory(subcategory) {
    window.currentSubcategory = subcategory;

    currentKeyword = "";

    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.value = "";

    const items = document.querySelectorAll(".sidebar li");
    items.forEach(i => i.classList.remove("active"));

    const activeItem = document.querySelector(
        `[data-subcategory="${subcategory}"]`
    );

    if (activeItem) activeItem.classList.add("active");

    const filtered = getFilteredProducts();

    showResults(filtered);
}



function renderProducts(list) {
    const container = document.getElementById("productContainer");

    container.innerHTML = list.map(p => {

        let badgeHTML = "";

        if (p.badge === "trending") {
            badgeHTML = `
                <div class="badge">
                    <i data-lucide="flame"></i>
                    <p>Trend</p>
                </div>
            `;
        } else if (p.badge === "new") {
            badgeHTML = `
                <div class="new-badge">New</div>
            `;
        }

        return `
        <div class="product-card">

            <a href="product.html?id=${p.id}">

                ${badgeHTML}

                <img src="${p.image}" alt="${p.name}">

                <div class="info">

                    <div class="top-row">
                        <p class="name">${p.name}</p>
                        <p class="price">$${p.price}</p>
                    </div>

                    <p class="sold-by">Sold by ${p.seller}</p>

                    <div class="buttons">
                        <button class="buy">Buy Now</button>
                        <button class="cart">Add to Cart</button>
                    </div>

                </div>

            </a>

            <!-- FAVORITE BUTTON -->
            <div class="favorite" data-product="${p.id}">
                <i data-lucide="heart"></i>
            </div>

        </div>
        `;
    }).join("");

    //IMPORTANT: re-render icons
    lucide.createIcons();
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}