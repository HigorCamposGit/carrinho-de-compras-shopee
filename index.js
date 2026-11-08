import * as cartService from "./src/services/cart.js";
import createItem from "./src/services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!\n");

// 1. Criando e adicionando itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Exibe o carrinho inicial
await cartService.displaycart(myCart);
await cartService.calculateTotal(myCart);

// 2. Simulando a remoção de unidades
console.log("\n--------------------------------------------------");
console.log("🔄 Simulando remoção de 1 unidade da Lamborghini...");
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);
await cartService.calculateTotal(myCart);

// 3. Simulando a exclusão completa de um item pelo nome
console.log("\n--------------------------------------------------");
console.log("🗑️ Simulando exclusão completa do item: hotwheels ferrari...");
await cartService.deleteItem(myCart, "hotwheels ferrari");

await cartService.displaycart(myCart);
await cartService.calculateTotal(myCart);