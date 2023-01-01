import { useRef, useContext } from 'react';
import AuthContext from '../../Store/authContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordInputref = useRef()
 const  authCtx = useContext(AuthContext)
  const submitHandler = event => {
    event.preventDefault()
const enteredNewPassword = newPasswordInputref.current.value
fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBWSS3XN_E1xvIXEOThRk9X6SqgWpzUdRw", {
  method: 'POST',
  body: JSON.stringify( 
    {
      idToken: authCtx.token,
    password: enteredNewPassword,
    returnSecureToken: false
  }
    )
 ,
  headers: {
    "Content-Type": 'application/json'
  }
}).then (res => {



})
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref ={ newPasswordInputref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
