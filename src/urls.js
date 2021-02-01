const urls = {
    axiosInstance: 'https://cheesewich-49a69-default-rtdb.firebaseio.com/',
    ordersBaseUrl: 'cheesewich-49a69-default-rtdb',
    firebaseIngredients: 'https://cheesewich-49a69-default-rtdb.firebaseio.com/ingredients.json',
    authSignIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AUTH_KEY}`,
    authSignUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_AUTH_KEY}`,
};

export default urls;
