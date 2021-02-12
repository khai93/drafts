import React from 'react';
import { RegisterForm } from './RegisterForm';

import "../LoginScreen/Login.css";


export interface RegisterLayoutProps {

}

export const RegisterLayout: React.FC<RegisterLayoutProps> = (props: RegisterLayoutProps) => {
    return (
        <div className="login__ctn">
            <RegisterForm />
        </div>
    )
}