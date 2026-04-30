let currentProducts = [];
let currentPriceSort = "none";
let selectedCondition = "all";

// use full dataset
let allProducts = products;

// INIT
document.addEventListener("DOMContentLoaded", () => {
    filterSubcategory("all");

    // FILTER DROPDOWN TOGGLE
    const filterBtn = document.getElementById("filterBtn");
    const filterDropdown = document.getElementById("filterDropdown");

    filterBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        filterDropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
        filterDropdown?.classList.remove("show");
    });
});


// SUBCATEGORY FILTER
function filterSubcategory(subcategory) {

    document.querySelectorAll(".sidebar li")
        .forEach(i => i.classList.remove("active"));

    document.querySelector(`[data-subcategory="${subcategory}"]`)
        ?.classList.add("active");

    let filtered = allProducts.filter(p =>
        (p.category || "").toLowerCase() === "tech"
    );

    if (subcategory !== "all") {
        filtered = filtered.filter(p =>
            (p.subcategory || "").toLowerCase() === subcategory.toLowerCase()
        );
    }

    currentProducts = filtered;
    applySortAndRender();
}


// SORT
function applySortAndRender() {
    let list = [...currentProducts];

    if (currentPriceSort === "low") {
        list.sort((a, b) => a.price - b.price);
    }

    if (currentPriceSort === "high") {
        list.sort((a, b) => b.price - a.price);
    }

    renderProducts(list);
}


// PRICE FILTER
document.querySelectorAll('input[name="price"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        currentPriceSort = e.target.value;
        applySortAndRender();
    });
});


// CONDITION (optional)
document.querySelectorAll('input[name="condition"]').forEach(radio => {
    radio.addEventListener("change", (e) => {
        selectedCondition = e.target.nextElementSibling.textContent;
    });
});


// RENDER
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

            <div class="favorite" data-product="${p.id}">
                <i data-lucide="heart"></i>
            </div>

        </div>
        `;
    }).join("");

    lucide.createIcons();
}


// SIDEBAR TOGGLE
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("active");
}