import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal/Modal.jsx';
import Aux from '../auxilliary.js';

const withErrorHandler = (ComponentToBeWrapped, axios) => {
    return props => {
        const [ errorValue, setErrorValue] = useState(null);

        const userAcknowledgesError = () => setErrorValue(null);

        const reqInterceptor = axios.interceptors.request.use(req => {
            setErrorValue(null);
            return req;
        });
        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setErrorValue(err);
        });

        useEffect(()=> {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.request.eject(resInterceptor);
            };
        }, [reqInterceptor, resInterceptor]);

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
