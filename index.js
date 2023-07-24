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

function buyProduct() {
    var productDetails = document.getElementById("productDetails");
    productDetails.style.display = "none";

    var orderForm = document.getElementById("orderForm");
    orderForm.style.display = "block";
}

function submitOrder() {
    var fullName = document.getElementById("fullName").value;
    var city = document.getElementById("city").value;
    var postOffice = document.getElementById("postOffice").value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    var quantity = document.getElementById("quantity").value;
    var comment = document.getElementById("comment").value;


    if (!fullName || !city || !postOffice || !paymentMethod || !quantity) {
        alert("Будь ласка, заповніть всі обов'язкові поля.");
        return false;
    }


    var orderDetails = document.getElementById("orderDetails");
    orderDetails.innerHTML = `
        <h3>Інформація про замовлення:</h3>
        <p>Товар: ${productName.textContent}</p>
        <p>ПІБ покупця: ${fullName}</p>
        <p>Місто: ${city}</p>
        <p>Склад Нової пошти: ${postOffice}</p>
        <p>Спосіб оплати: ${paymentMethod.value}</p>
        <p>Кількість: ${quantity}</p>
        <p>Коментар: ${comment}</p>
    `;

    var orderForm = document.getElementById("orderForm");
    orderForm.style.display = "none";

    var orderDetails = document.getElementById("orderDetails");
    orderDetails.style.display = "block";

    return false;
}