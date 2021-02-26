import React, { useEffect } from 'react';
import Button from '../../components/UI/Button/Button.jsx';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input.jsx';
import * as authActions from '../../store/actions/auth';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Auth.css';
import { setAuthRedirectPath } from '../../store/actions/auth';
import { updateObject, checkValidity } from '../../utils/utils';

const Auth = () => {
    const [ controls, setControls] = React.useState(inputBoxData);
    const [ isSignup, setIsSignup ] = React.useState(true);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const error = useSelector(state => state.auth.error);
    const isAuthenticated = useSelector(state => state.auth.token !== null);
    const cheesewichIsBeingBuilt = useSelector(state => state.builder.cheesewichIsBeingBuilt);
    const authRedirectPath = useSelector(state => state.auth.authRedirectPath);

    useEffect(()=>{
        if (!cheesewichIsBeingBuilt && authRedirectPath !== '/') {
            dispatch(setAuthRedirectPath('/'));
        };
    }, [cheesewichIsBeingBuilt, authRedirectPath]);

    const submitHandler = (event) => {
        event.preventDefault();
        const email = controls.email.value;
        const password = controls.password.value;
        dispatch(authActions.auth(email, password, isSignup));
    };

    const switchAuthMode = () => {
        (isSignup ? setIsSignup(false) : setIsSignup(true));
    };

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
    const form = getFormContent(loading, formElementsArray, inputChangedHandler);
    const errorMessage = getError(error);
    const redirect = getRedirectWhenSignedOut(isAuthenticated, authRedirectPath);
    const componentHeading = getComponentHeading(isSignup);
    const switchOption = getSwitchOption(isSignup);

    return (
        <div className={classes.Auth}>
            {redirect}
            <div>{componentHeading}</div>
            {errorMessage}
            <form data-test="form" onSubmit={submitHandler}>
                {form}
                <Button data-test="submit-button" buttonType="green">Submit</Button>
            </form>
            <Button data-test="switcher" clicked={switchAuthMode} buttonType="red">Switch to {switchOption}</Button>
        </div>
    );
}

const inputBoxData = {
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

const getRedirectWhenSignedOut = (isAuthenticated, authRedirectPath) => {
    return (isAuthenticated) && <Redirect to={authRedirectPath}/>;
}

const getError = (error) => (error) && <p data-test="auth-error">{error}</p>;

const getFormContent = (loading, formArray, inputChangedHandler) => {
    return (loading)
        ? <div data-test="spinner"><Spinner/></div>
        : formArray.map(formElement => (
            <Input
                data-test={formElement.id}
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

export default Auth;
