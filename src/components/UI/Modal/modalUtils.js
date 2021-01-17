export const modalStyle = modalShouldBeDisplayed => {
    return {
        transform: modalShouldBeDisplayed  ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: modalShouldBeDisplayed ? '1' : '0'
    };
};

export const childrenOrShowHaveChanged = (prevProps, nextProps) => (
    prevProps.show === nextProps.show && prevProps.children === nextProps.children
);
