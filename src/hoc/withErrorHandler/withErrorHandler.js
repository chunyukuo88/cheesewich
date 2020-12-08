import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal.jsx';
import Aux from '../auxilliary.js';
import { showError } from './withErrorHandlerUtils';

const withErrorHandler = (ComponentToBeWrapped, axios) => {
    //NOTE: `withErrorHandler` is a class factory.
    return class extends Component {
        state = {
            error: null,
            test: 42
        };
        componentDidMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
                console.error('=== Error ===', error);
            });
        }

        userAcknowledgesError = () => {
            this.setState({ error: null });
        }

        render(){
            return (
                <Aux>
                    <Modal show={this.state.error}
                           modalClosed={this.userAcknowledgesError}>
                        {showError(this.state)}
                    </Modal>
                    <ComponentToBeWrapped  {...this.props} />
                </Aux>
            );
        }
    }
}


export default withErrorHandler;
