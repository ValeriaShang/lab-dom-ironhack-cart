// ITERATION 1

function updateSubtotal(product) {
  let total = 0;

  for (let x = 0; x < product.length; x++) {
    const price = product[x].querySelector('.price span');
    const quantity = product[x].querySelector('.quantity input');
    const subtotal = product[x].querySelector('.subtotal span');
    const subtotalValue = price.innerText * quantity.value;
    subtotal.textContent = subtotalValue;
    total += subtotalValue;
  }

  return total;
}

function calculateAll() {
  // ITERATION 2 // ITERATION 3
  const products = document.getElementsByClassName('product');
  const total = document.getElementById('total-value').querySelector('span');
  total.textContent = updateSubtotal(products);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.getElementById('createName');
  const price = document.getElementById('createPrice');
  const productsRoot = document.getElementsByClassName('product');

  productsRoot.insertAdjacentHTML(
    'beforeend',
    <tr class="product">
      <td class="name">
        <span>Ironhack Rubber Duck</span>
      </td>
      <td class="price">
        $<span>25.00</span>
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
  );
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const btRemove = document.getElementsByClassName('btn-remove');
  const create = document.getElementById('create');

  create.addEventListener('click', createProduct);
  calculatePricesBtn.addEventListener('click', calculateAll);
  for (let x = 0; x < btRemove.length; x++) {
    btRemove[x].addEventListener('click', removeProduct);
  }
});
