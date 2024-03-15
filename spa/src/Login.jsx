import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import '@okta/okta-signin-widget/css/okta-sign-in.min.css';
import Spinner from './Spinner';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { authState } = useOktaAuth();
  const history = useHistory();

  useEffect(() => {
    if (authState) {
      if(authState.isAuthenticated){
        history.push('/');
      }else{
        window.location = 'http://localhost:8080/login?redirect=http://localhost:5050/requestToken';
      }
    }
  }, [authState]);


  return <Spinner />;
};

export default Login;
