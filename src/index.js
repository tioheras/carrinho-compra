// carrinho é um array que começa vazio
// index vai chamar os elementos de services.
// onde o usuário vai utilizar

import createItem from "./services/item.js";
import cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

const item1 = await createItem("teclado", 100.99, 1);                                // importante os atributos de objetos do item la de item.js
const item2 = await createItem("mouse", 125.00, 1);  
const item3 = await createItem("fone", 110.0, 1);                                // colocar o await pois deve esperar o item ser criado primeiro. no JS tudo acontece ao mesmo tempo, precisa parametrizar a espera
                                                                                    // await espera o item ser criado para poder ser utilizado
//add dois itens ao carrinho

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

//deletar itens do carrinho
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item3);
//await cartService.deleteItem(myCart)


//remove item


await cartService.displaycart(myCart);

await cartService.calculateTotal(myCart);




