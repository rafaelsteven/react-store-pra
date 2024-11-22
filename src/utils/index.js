

/**
 * This Function calculates total price of a new order
 * @param {Array} products 
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    let total = 0 ;
    products.forEach( product=>
        total += product.price * product.countProduct
    )
    return total;
}