import { useState, useEffect } from 'react';

const useHttpErrorHandler = httpClient => {
    const [ errorValue, setErrorValue] = useState(null);

    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setErrorValue(null);
        return req;
    });

    const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
        setErrorValue(err);
    });

    useEffect(()=> {
        return () => {
            httpClient.interceptors.request.eject(reqInterceptor);
            httpClient.interceptors.request.eject(resInterceptor);
        };
    }, [reqInterceptor, resInterceptor]);

    const userAcknowledgesError = () => setErrorValue(null);

    return [errorValue, userAcknowledgesError];
};

export default useHttpErrorHandler;
