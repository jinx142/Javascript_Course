let cartQuantity = 0;

function showQuantity() {
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addToCart() {
    if (cartQuantity + 1 > 10) {
        alert('The cart is full');
    } else {
        cartQuantity++;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function plusTwo() {
    if (cartQuantity + 2 > 10) {
        alert('The cart is full');
    } else {
        cartQuantity += 2;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function plusThree() {
    if (cartQuantity + 3 > 10) {
        alert('The cart is full');
    } else {
        cartQuantity += 3;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function plusFour() {
    if (cartQuantity + 4 > 10) {
        alert('The cart is full');
    } else {
        cartQuantity += 4;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function plusFive() {
    if (cartQuantity + 5 > 10) {
        alert('The cart is full');
    } else {
        cartQuantity += 5;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function minusOne() {
    if (cartQuantity - 1 < 0) {
        alert('Not enough items in the cart');
    } else {
        cartQuantity --;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function minusTwo() {
    if (cartQuantity - 2 < 0) {
        alert('Not enough items in the cart');
    } else {
        cartQuantity -= 2;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function minusThree() {
    if (cartQuantity - 3 < 0) {
        alert('Not enough items in the cart');
    } else {
        cartQuantity -= 3;
        console.log(`Cart quantity: ${cartQuantity}`);
    }
}

function resetCart() {
    cartQuantity = 0;
    console.log('Cart was reset.');
    console.log(`Cart quantity: ${cartQuantity}`);
}