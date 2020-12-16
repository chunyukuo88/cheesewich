export const getIngredientsFromURI = props => {
    const ingredients = {};
    let price = 0;
    const query = new URLSearchParams(props.location.search);
    for (const param of query.entries()) {
        if (param[0] === 'price') {
            price = param[1];
        } else {
            ingredients[param[0]] = +param[1];
        }
    };
    return { ingredients, price };
}
