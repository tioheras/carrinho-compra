// casos de uso dos items
// criar item com subtotal calculado

//criar item com subottal
async function createItem(name, price, quantity){
    return {                                                   // retorna um objeto
        name,
        price,
        quantity,
        subtotal: () => price * quantity,                      // retornau ma função dentro de um item que calcula o subtotal
    };
}

export default createItem