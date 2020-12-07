export const showError = (errorObject) => {
    return (errorObject.error) ? errorObject.error.message : null;
}