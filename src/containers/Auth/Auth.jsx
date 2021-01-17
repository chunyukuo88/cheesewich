import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button.jsx';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input.jsx';
import * as authActions from '../../store/actions/auth';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import classes from './Auth.css';
import { setAuthRedirectPath } from '../../store/actions/auth';
import { updateObject, checkValidity } from '../../utils/utils';

const initialControls = {
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
};

const Auth = props => {
    const [ controls, setControls] = React.useState(initialControls);
    const [ isSignup, setIsSignup ] = React.useState(true);

    React.useEffect(()=>{
        redirectToHomeIfNotBuildingCheesewich(props, props.onSetAuthRedirectPath);
    })

    const submitHandler = (event) => {
        event.preventDefault();
        const email = controls.email.value;
        const password = controls.password.value;
        props.onAuth(email, password, isSignup);
    };

    const switchAuthMode = (prevState) => setIsSignup(!prevState.isSignup);

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(controls, {
            [controlName]: updateObject(controls[controlName],{
                value: event.target.value,
                valid: checkValidity(event.target.value, controls[controlName].validation),
                touched: true,
            }),
        });
        setControls(updatedControls);
    };

    const formElementsArray = populateElementsArray(controls);
    const form = getFormContent(props, formElementsArray, inputChangedHandler);
    const error = getError(props.error);
    const redirect = getRedirectWhenSignedOut(props);
    const componentHeading = getComponentHeading(isSignup);
    const switchOption = getSwitchOption(isSignup);

    return (
        <div className={classes.Auth}>
            {redirect}
            <div>{componentHeading}</div>
            {error}
            <form onSubmit={submitHandler}>
                {form}
                <Button buttonType="green">Submit</Button>
            </form>
            <Button clicked={switchAuthMode} buttonType="red">Switch to {switchOption}</Button>
        </div>
    );
}

const redirectToHomeIfNotBuildingCheesewich = (props, redirectCallback) => {
    if (!props.cheesewichIsBeingBuilt && props.authRedirectPath !== '/') {
        redirectCallback();
    };
};

const populateElementsArray = (controls) => {
    const formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    };
    return formElementsArray;
};

const getRedirectWhenSignedOut = ({ isAuthenticated, authRedirectPath }) => (isAuthenticated) && <Redirect to={authRedirectPath}/>;

const getError = (error) => {
    console.log('getError()');
    return (error) && <p>{error}</p>;
}

const getFormContent = (props, formArray, inputChangedHandler) => {
    return (props.loading)
        ? <Spinner/>
        : formArray.map(formElement =>  (
            <Input
                changed={event => inputChangedHandler(event, formElement.id)}
                elementConfig={formElement.config.elementConfig}
                elementType={formElement.config.elementType}
                invalid={!formElement.config.valid}
                key={formElement.id}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                value={formElement.config.value}/>
        ));
};

const getComponentHeading = (isSignup) => (!isSignup) ? 'Sign up!' : 'Sign in!';

const getSwitchOption = (isSignup) => (isSignup) ? 'Sign up' : 'Sign in';

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        cheesewichIsBeingBuilt: state.builder.cheesewichIsBeingBuilt,
        authRedirectPath: state.auth.authRedirectPath,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(authActions.auth(email, password, isSignup)),
        //TODO: Add functionality for the authFail action creator.
        onSetAuthRedirectPath: () => dispatch(setAuthRedirectPath('/')),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
