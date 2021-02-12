import React, { useState } from 'react';
import Logo from '../../assets/images/Drafts.png';

export interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    return (
        <form className="login__form">
             <img src={Logo}></img><br></br>
             <input type="text" placeholder="Username" name="username"></input>
             <input type="password" placeholder="Password" name="password"></input>
             <span><a href="#">Forgot password?</a></span>
             <input type="submit" value="Login"></input>
             <span className="login__account">Don't have an account? <a href="/signup">Sign Up</a></span>
        </form>
    )
}