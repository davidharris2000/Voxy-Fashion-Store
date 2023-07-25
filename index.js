
function slidingSideBar() {
    event.preventDefault();
    document.getElementById("side_panel_container").style.display = "block";
}
function closeSlidingBar() {
    document.getElementById("side_panel_container").style.display = "none";
}


function slidingSearchBar() {
    event.preventDefault();
    document.getElementById("search_bar_container").style.display = "block";
}
function closeSearchBar() {
    document.getElementById("search_bar_container").style.display = "none";
}

function slidingCart() {
    event.preventDefault();
    document.getElementById("cart_container").style.display = "block";
}
function closeCart() {
    document.getElementById("cart__container").style.display = "none";
}

function slidingLoginPage() {
    event.preventDefault();
    document.getElementById("login_container").style.display = "block";
}
function closeLoginPage() {
    document.getElementById("login__container").style.display = "none";
}