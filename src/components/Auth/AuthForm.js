import { useRef, useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {

const emailInputRef = useRef();
const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] =useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault()
const enteredEmail = emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;
setIsLoading(true)
if(isLogin){}
else {
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw',{
    method: 'POST',
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true
    }),
    headers: {
     'Content-Type': "application/json"
    }
  }).then(response => {
    setIsLoading(false)
    if(response.ok) {

    } else {
      response.json().then(data => {
        let errorMessage = "Authentication Error"
        if(data && data.error && data.error.message){
        errorMessage = data.error.message
        console.log(data)
        }
        alert(errorMessage)
      })
    }
  })
}
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
         { !isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
         {isLoading &&  <p>sending request</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;