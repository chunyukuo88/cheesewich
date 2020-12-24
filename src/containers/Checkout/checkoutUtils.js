export const getIngredientsFromURI = props => {
    const ingredients = {};
    let price = 0;
    console.log('props.location: ', props.location);
    const query = new URLSearchParams(props.location.search);
    extractPriceAndIngredients(ingredients, price, query);
    return { ingredients, price };
}

const extractPriceAndIngredients = (ingredients, price, query) => {
    for (const param of query.entries()) {
        if (param[0] === 'price') {
            price = param[1];
        } else {
            ingredients[param[0]] = +param[1];
        }
    };   
}