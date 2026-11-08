// QUAIS AÇÕES MEU CARRINHO PODE FAZER

// ✅ Adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ Calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁 Total: R$ ${result.toFixed(2)}`);
}

// ✅ Deletar item do carrinho pelo nome
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ✅ Remover um item (diminui a quantidade ou remove se for 1)
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("Item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  userCart.splice(indexFound, 1);
}

// ✅ Mostrar todos os itens do carrinho formatados
async function displaycart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = R$ ${item.subtotal().toFixed(2)}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart };