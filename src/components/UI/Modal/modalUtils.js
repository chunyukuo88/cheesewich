export const modalStyle = modalShouldBeDisplayed => {
    return {
        transform: modalShouldBeDisplayed  ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: modalShouldBeDisplayed ? '1' : '0'
    };
};

export const childrenOrShowHaveChanged = (nextProps, props) => {
    return (nextProps.show !== props.show || nextProps.children !== props.children);
};