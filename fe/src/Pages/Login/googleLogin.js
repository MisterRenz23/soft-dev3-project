import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import styles from "./Login.module.css";
import { Button } from "react-bootstrap";
import { gapi } from "gapi-script";
import API from "../../API";
import { useNavigate } from "react-router-dom";
// get env vars
const Google = () => {

    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const navigate = useNavigate();


    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: googleClientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
        navigate('/home-user');

    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
        <div className="App">
            <GoogleLogin
                clientId={googleClientId}
                cookiePolicy={'single_host_origin'}
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(renderProps) => (
                    <Button
                        onClick={renderProps.onClick}

                        // disabled={renderProps.disabled}
                        className={styles["button-sign-in-google"]}
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