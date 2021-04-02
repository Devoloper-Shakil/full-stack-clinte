import React from 'react';
import './Login.css';
import firebaseConfig from './firebase';
import "firebase/auth";
import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import { faFacebook, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const Login = () => {



    const [loginUser, setLoginUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const hendelGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const singUser = { name: displayName, email: email, photoURL: photoURL }
                setLoginUser(singUser);
                history.replace(from);
                // console.log(result.user)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }

    //facebook login firebase login
    var fbprovider = new firebase.auth.FacebookAuthProvider();
    const hendelfb = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const singUser = { name: displayName, email: email, photoURL: photoURL }
                setLoginUser(singUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div className="login">

            <div>
                <h1>LOGIN A SITE</h1>
                <button onClick={hendelGoogle} type="button" class="btn btn-success login-mathot"> <FontAwesomeIcon icon={faGooglePlusSquare} />  sing withe google</button>
            </div>

            <div>
                <button onClick={hendelfb} type="button" class="btn btn-success login-mathot"> <FontAwesomeIcon icon={faFacebook} />  sing withe Facebook</button>
            </div>
        </div>
    );
};

export default Login;