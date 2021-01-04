import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input.jsx';
import Button from '../../components/UI/Button/Button.jsx';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as authActions from '../../store/actions/auth';
import { connect } from 'react-redux';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail address',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    validPassword: true,
                },
                valid: false,
                touched: false,
            },
        },
        isSignup: true,
    }

    submitHandler = (event) => {
        event.preventDefault();
        const email = this.state.controls.email.value;
        const password = this.state.controls.password.value;
        this.props.onAuth(email, password, this.state.isSignup);
    };

    switchAuthMode = () => {
        this.setState(prevState => {
            return {
                isSignup: !prevState.isSignup,
            };
        });
    };

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) return isValid;
        if (rules.required) isValid = value.trim() !== '' && isValid;
        if (rules.minLength) isValid = value.length >= rules.minLength && isValid
        if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid
        return isValid;
    };

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true,
            },
        };
        this.setState({controls: updatedControls});
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        };
        const form = getFormContent(this.props, formElementsArray);

        return (
            <div className={classes.Auth}>
                <div>{getTitle(this.state.isSignup)}</div>
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button buttonType="green">Submit</Button>
                </form>
                <Button clicked={this.switchAuthMode} buttonType="red">Switch to {getSwitchOption(this.state.isSignup)}</Button>
            </div>
        );
    }
}

const getFormContent = (props, formArray) => {
    return (props.loading)
        ? <Spinner/>
        : formArray.map(formElement =>  (
            <Input
                changed={event => this.inputChangedHandler(event, formElement.id)}
                elementConfig={formElement.config.elementConfig}
                elementType={formElement.config.elementType}
                invalid={!formElement.config.valid}
                key={formElement.id}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                value={formElement.config.value}/>
        ));
};

const getTitle = (isSignup) => (!isSignup) ? 'Sign up!' : 'Sign in!';

const getSwitchOption = (isSignup) => isSignup ? 'Sign up' : 'Sign in';

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(authActions.auth(email, password, isSignup)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
