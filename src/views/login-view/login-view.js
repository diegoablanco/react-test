import React from 'react';
import FullPageLayout from '../../layouts/full-page';
import LoginContainer from '../../components/login';

const LoginView = (props) => {
    return (
        <FullPageLayout>
            <LoginContainer {...props} />
        </FullPageLayout>
    );
};

LoginView.propTypes = {};

export default LoginView;
