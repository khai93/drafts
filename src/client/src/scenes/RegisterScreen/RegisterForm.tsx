import React, { useState } from 'react';
import Logo from '../../assets/images/Drafts.png';

export interface RegisterFormProps {}

export const RegisterForm: React.FC<RegisterFormProps> = (props: RegisterFormProps) => {
    return (
        <form className="login__form">
             <img src={Logo}></img>
             <input type="text" placeholder="Username" name="username"></input>
             <input type="text" placeholder="Email Address" name="email"></input>
             <input type="password" placeholder="Password" name="password"></input>
             <input type="password" placeholder="Confirm Password" name="password2"></input>
             <span><a href="#">Forgot password?</a></span>
             <input type="submit" value="Sign Up"></input>
             <span className="login__account">Already have an account? <a href="/login">Login</a></span>
        </form>
    )
}