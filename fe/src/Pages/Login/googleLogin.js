import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import styles from './Login.module.css';
import { Button } from 'react-bootstrap';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

const Google = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: googleClientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    navigate('/home-user');
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId={googleClientId}
        cookiePolicy={'single_host_origin'}
        onSuccess={onSuccess}
        render={(renderProps) => (
          <Button
            onClick={renderProps.onClick}
            className={styles['button-sign-in-google']}
            variant="primary"
            type="submit"
          >
            Sign in with Google
          </Button>
        )}
      />
    </div>
  );
};

export default Google;
