import React from 'react';
import Modal from '../../components/UI/Modal/Modal.jsx';
import Aux from '../auxilliary.js';
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (ComponentToBeWrapped, axios) => {
    return props => {
        const [errorValue, userAcknowledgesError] = useHttpErrorHandler(axios);
        return (
            <Aux>
                <Modal show={errorValue}
                       modalClosed={userAcknowledgesError}>
                    {showError(errorValue)}
                </Modal>
                <ComponentToBeWrapped  {...props} />
            </Aux>
        );
    };
};

const showError = (error) => (error) && error.message;

export default withErrorHandler;
