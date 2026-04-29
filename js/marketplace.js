// detect so that it can filter within the academic / tech category

const isAcademicPage = window.location.pathname.includes("academic.html");
const isTechPage = window.location.pathname.includes("tech.html");

// Global State
let suggestionsBox;
let currentKeyword = "";
let currentFilters = {
    price: null,
    condition: null
};

function getFilteredProducts() {
    let filtered = [...products];

    // 1. category filter
    if (isAcademicPage) {
        filtered = filtered.filter(p => p.category === "academic");
    } 
    else if (isTechPage) {
        filtered = filtered.filter(p => p.category === "tech");
    }

    // 2. subcategory filter (ONLY ONCE)
    if (window.currentSubcategory && window.currentSubcategory !== "all") {
        filtered = filtered.filter(
            p => p.subcategory === window.currentSubcategory
        );
    }

    // 3. search
    if (currentKeyword?.trim()) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(currentKeyword.toLowerCase())
        );
    }

    // 4. condition
    if (currentFilters.condition) {
        filtered = filtered.filter(p =>
            p.condition?.toLowerCase() === currentFilters.condition.toLowerCase()
        );
    }

    // 5. price sort
    if (currentFilters.price === "high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentFilters.price === "low") {
        filtered.sort((a, b) => a.price - b.price);
    }

    return filtered;
}

// Render Products

function renderProducts(list, containerId) {
    const container = document.getElementById(containerId);

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
            </div>
        </a>

        <div class="buttons">
            <button class="buy">Buy Now</button>
            <button class="cart">Add to Cart</button>
        </div>

        <div class="favorite" data-product="${p.id}">
            <i data-lucide="heart"></i>
        </div>

    </div>
    `;
    }).join("");

    lucide.createIcons();
}

// Initial Load (Homepage + Setup)

document.addEventListener("DOMContentLoaded", function () {

    // Homepage Sections
    const trending = products.filter(p => p.badge === "trending");
    const recent = products.filter(p => p.badge === "new");
    const recommend = products.filter(p => p.recommended === true);

    //  render homepage
    renderProducts(trending, "trendingContainer");
    renderProducts(recent, "recentContainer");
    renderProducts(recommend, "recommendContainer");

    //  search setup
    const searchInput = document.getElementById("searchInput");
    suggestionsBox = document.getElementById("searchSuggestions");

    searchInput.addEventListener("input", function () {
        currentKeyword = this.value.toLowerCase();

        if (currentKeyword === "") {
            suggestionsBox.style.display = "none";
            suggestionsBox.innerHTML = "";
            return;
        }

        const suggestions = products.filter(p =>
            p.name.toLowerCase().includes(currentKeyword)
        );

        suggestionsBox.innerHTML = suggestions.map(p => `
            <div class="suggestion-item">${p.name}</div>
        `).join("");

        suggestionsBox.style.display = "block"; 
    });

    suggestionsBox.addEventListener("click", function (e) {
        if (e.target.classList.contains("suggestion-item")) {
            const selected = e.target.textContent;

            searchInput.value = selected;
            currentKeyword = selected.toLowerCase();

            const results = products.filter(p =>
                p.name.toLowerCase().includes(currentKeyword)
            );

            showResults(results);
            suggestionsBox.style.display = "none";
        }
    });

    // filter Dropdown
    const filterBtn = document.getElementById("filterBtn");
    const filterDropdown = document.getElementById("filterDropdown");

    filterBtn.addEventListener("click", function (e) {
        e.stopPropagation();

        const isOpen = filterDropdown.style.display === "block";

        if (isOpen) {
            filterDropdown.style.display = "none";
            return;
        }

        // FIRST position it
        positionDropdown();

        // THEN show it
        filterDropdown.style.display = "block";
    });

    // prevent closing when clicking inside
    filterDropdown.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    // Dropdown Positioning

    function positionDropdown() {
        if (filterDropdown.style.display !== "block") return;

        const rect = filterBtn.getBoundingClientRect();
        const dropdownWidth = filterDropdown.offsetWidth;

        const padding = 10;

        let left = rect.left;
        let top = rect.bottom + 8;

        // prevent overflow right
        if (left + dropdownWidth > window.innerWidth - padding) {
            left = window.innerWidth - dropdownWidth - padding;
        }

        // prevent overflow left
        if (left < padding) {
            left = padding;
        }

        filterDropdown.style.top = top + "px";
        filterDropdown.style.left = left + "px";
    }

    window.addEventListener("resize", () => {
        requestAnimationFrame(positionDropdown);
    });

    window.addEventListener("scroll", positionDropdown);

    // Filter logic
    const priceRadios = document.querySelectorAll('input[name="price"]');
    const conditionRadios = document.querySelectorAll('input[name="condition"]');

    priceRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            currentFilters.price = e.target.value.toLowerCase(); 
            applyAll();
        });
    });

    conditionRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            currentFilters.condition = e.target.value;
            applyAll();
        });
    });
});

// global click handler (Buy / cart / close dropdown)

document.addEventListener("click", function (e) {
    console.log("Clicked:", e.target);

    const buyBtn = e.target.closest(".buy");
    const cartBtn = e.target.closest(".cart");

    if (buyBtn) {
        e.preventDefault();

        const card = buyBtn.closest(".product-card");
        const name = card?.querySelector(".name")?.textContent;

        console.log("BUY CLICKED:", name);
        alert("Buying: " + name);
        return; // stop further logic
    }

    if (cartBtn) {
        e.preventDefault();

        const card = cartBtn.closest(".product-card");
        const name = card?.querySelector(".name")?.textContent;

        console.log("CART CLICKED:", name);
        alert("Added to cart: " + name);
        return;
    }

    //  only run this if NOT clicking buttons
    const filterDropdown = document.getElementById("filterDropdown");
    if (filterDropdown) {
        filterDropdown.style.display = "none";
    }

    // close filter dropdown

    document.getElementById("filterDropdown").style.display = "none";

    // close search suggestion box when clicking outside
    if (!e.target.closest("#searchInput") && !e.target.closest("#searchSuggestions")) {
        suggestionsBox.style.display = "none";
    }
});

// Main filter engine

function applyAll() {
    const filtered = getFilteredProducts();
    showResults(filtered);
}

// title changes based on search or filter, search result display

function showResults(list) {
    const section = document.getElementById("resultsSection");
    const title = document.getElementById("resultsTitle");

    if (!list.length) {
        section.style.display = "none";
        return;
    }

    section.style.display = "block";

    const mode = getMode();

    if (mode === "search") {
        title.textContent = "Search Results";
    } else if (mode === "filter") {
        title.textContent = "Filter Results";
    } else if (mode === "both") {
        title.textContent = "Search & Filter Results";
    } else {
        title.textContent = "All Products";
    }

    renderProducts(list, "resultsContainer");
}

function getMode() {
    const hasSearch = currentKeyword?.trim().length > 0;

    const hasFilter =
        currentFilters.price !== null ||
        currentFilters.condition !== null;

    const hasSub =
        window.currentSubcategory &&
        window.currentSubcategory !== "all";

    if (hasSearch && (hasFilter || hasSub)) return "both";
    if (hasSearch) return "search";
    if (hasFilter || hasSub) return "filter";

    return "all";
}











