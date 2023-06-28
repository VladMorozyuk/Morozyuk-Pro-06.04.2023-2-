var categories = {
    "Електроніка": ["Смартфон", "Ноутбук", "Телевізор"],
    "Одяг": ["Футболка", "Джинси", "Світшот"],
    "Косметика": ["Помада", "Маска для обличчя", "Крем для рук"]
};

function showProducts(category) {
    var productList = document.getElementById("productList");
    productList.innerHTML = "";

    var products = categories[category];
    products.forEach(product => {
        var li = document.createElement("li");
        li.textContent = product;
        li.onclick = function () {
            showProductDetails(product);
        };
        productList.appendChild(li);
    });
}

function showProductDetails(product) {
    var productName = document.getElementById("productName");
    productName.textContent = product;

    var productDetails = document.getElementById("productDetails");
    productDetails.style.display = "block";
}

function buyProduct() {
    alert("Товар куплений.");
    resetProgram();
}

function resetProgram() {
    var productList = document.getElementById("productList");
    productList.innerHTML = "";

    var productName = document.getElementById("productName");
    productName.textContent = "";

    var productDetails = document.getElementById("productDetails");
    productDetails.style.display = "none";
}

resetProgram();