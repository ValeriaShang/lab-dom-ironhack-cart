// ITERATION 1

function updateSubtotal(products) {
  return Array.from(products).reduce((acc, product) => {
    const price = product.querySelector('.price span');
    const quantity = product.querySelector('.quantity input');
    const subtotal = product.querySelector('.subtotal span');
    const subtotalValue = price.innerText * quantity.value;
    subtotal.textContent = subtotalValue;
    return acc + subtotalValue;
  }, 0);
}

function calculateAll() {
  // ITERATION 2 // ITERATION 3
  const products = document.getElementsByClassName('product');
  const total = document.getElementById('total-value').querySelector('span');
  total.textContent = updateSubtotal(products);
}

// ITERATION 4

function removeProduct({ target }) {
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.getElementById('createName');
  const price = document.getElementById('createPrice');
  const products = document.querySelectorAll('.product');

  const product = `
  <tr class="product">
    <td class="name">
    <span>${name.value}</span>
    </td>
    <td class="price">
    $<span>${price.value}</span>
    </td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">
    $<span>0</span>
    </td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `;
  products[products.length - 1].insertAdjacentHTML('afterend', product);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const btRemove = document.getElementsByClassName('btn-remove');
  const create = document.getElementById('create');

  create.addEventListener('click', createProduct);
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.querySelector('tbody').addEventListener('click', (e) => {
    if (e.target.className !== 'btn btn-remove') return;
    removeProduct(e);
  });
});
