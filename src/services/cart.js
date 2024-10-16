// quais ações o carrinho deve fazer:
//  add item ; deletar item ; remover um item ; calcular o total

// adicionando item
async function addItem(userCart, item){                       // é um vetor, useCart.push(item), push adiciona um elemento dentro de um vetor no JS
    userCart.push(item);
}

//calcular o total do carrinho 
async function calculateTotal(userCart){         // reduce interage com os itens como se fosse um for e fazer uma ação com cada item lá dentro e reduzir isto a um valor
    console.log("\n Shoppe cart total is: ")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

// deletando item do carrinho
async function deleteItem(userCart, name){                                       // função para deletar um item cujo name é name, fornecido pelo usuário
    const index = userCart.findIndex((item) => item.name === name);                //userCart é um array e chamamos findIndex dentro de userCart para procurar um item dentro do array apartir de um name de entrada
                                                        //ele vai percorrer item a item do array até encontrar o item necessário para deletar
    if (index !== -1){                                // aqui é feito uma verificação. se o índice for diferente de -1, significa que o item existe no carrinho
        userCart.splice(index, 1);           // função splice para deletar. caso a verificação acima esteja ok, ele corta fora o index que veio de um item.name, e o 1 é o argumento que é necessário apenas 1 delete pela função
    }
}

// remover um item - diminui um item do carrinho. index do item, como se fosse o numero do item!
async function removeItem(userCart, item){
        // 1. primeiro devemos encontrar o índice do item a ser removido
    const indexFound = userCart.findIndex((p) => p.name === item.name);
        // 2. caso não encontre o item
    if (indexFound == -1){
        console.log("item não encontrado");
        return;
    }
        //3. se item > 1, deve-se subtrair um item. Se item = 1, deve-se deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }
        //4. caso o item seja = 1, deletar o item.
    if(userCart[indexFound].quantity = 1){
        userCart.splice(indexFound, 1);
    }
}
async function displaycart(userCart) {
    console.log("\n Shoppe cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = ${item.subtotal()}`)
    })
}

export default {
    addItem,
    calculateTotal,
    deleteItem,
    displaycart,
    removeItem
};