// Select all increment buttons
const incrementButtons = document.querySelectorAll('.fa-plus-circle');

// Add event listener to each increment button
incrementButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentElement.querySelector('.qute');
    const currentQuantity = parseInt(quantityElement.innerText);
    const newQuantity = currentQuantity + 1;
    quantityElement.innerText = newQuantity;
    updateTotal();
  });
});

// Select all decrement buttons
const decrementButtons = document.querySelectorAll('.fa-minus-circle');

// Add event listener to each decrement button
decrementButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const quantityElement = button.parentElement.querySelector('.qute');
    const currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 0) {
      const newQuantity = currentQuantity - 1;
      quantityElement.innerText = newQuantity;
      updateTotal();
    }
  });
});

// Select all delete buttons
const deleteButtons = document.querySelectorAll('.fa-trash-alt');

// Add event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const row = button.parentElement.parentElement;
    row.remove();
    updateTotal();
  });
});

// Function to update the total price of the cart
function updateTotal() {
  let totalPrice = 0;
  const rows = document.querySelector('.total-price');
  rows.forEach((row) => { 
    const quantity = parseInt(document.querySelector('.qute').innerText);
    const price = parseFloat(document.querySelector('td:nth-of-type(3)').innerText.replace('$', ''));
    const total = quantity * price;
    row.querySelector('td:nth-of-type(4)').innerText = `$${total.toFixed(2)}`;
    totalPrice = totalPrice + total;
  });
  document.querySelector('.total-price').innerText = `$${totalPrice.toFixed(2)}`;
}