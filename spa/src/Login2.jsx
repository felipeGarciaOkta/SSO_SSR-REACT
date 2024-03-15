import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import '@okta/okta-signin-widget/css/okta-sign-in.min.css';
import Spinner from './Spinner';

const RequestToken = () => {
  const { oktaAuth } = useOktaAuth();
  const [loading, setLoading] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const sessionToken = params.get('sessionToken');

  const handleLogin = async() => {
    sessionStorage.clear();
      setLoading(true);
      oktaAuth.signInWithRedirect({ sessionToken });
  };

  useEffect(() => {
    handleLogin();
  }, [oktaAuth]);

  if (loading) {
    return <Spinner />;
  }

  return (
      <h2>Login</h2>
  );
};

export default RequestToken;