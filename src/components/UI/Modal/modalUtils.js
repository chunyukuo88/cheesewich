export const _modalStyle = modalShouldBeDisplayed => {
    return {
        transform: modalShouldBeDisplayed  ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: modalShouldBeDisplayed ? '1' : '0'
    };
};