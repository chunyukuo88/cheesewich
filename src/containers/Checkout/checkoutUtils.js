export const getIngredientsFromURI = props => {
    const ingredients = {};
    const query = new URLSearchParams(props.location.search);
    for (const param of query.entries()) {
        ingredients[param[0]] = +param[1];
    };
    return ingredients;
}
