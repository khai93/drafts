import React from 'react';
import { LoginForm } from './LoginForm';

import "./Login.css";

export interface LoginLayoutProps {

}

export const LoginLayout: React.FC<LoginLayoutProps> = (props: LoginLayoutProps) => {
    return (
        <div className="login__ctn">
            <LoginForm />
        </div>
    )
}