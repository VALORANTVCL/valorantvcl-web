import React from 'react';
import '../css/Login.css';
import jettImg from '../img/jett.png';

let Login = () => {
    return (
        <div className='main-content'>
            <div className='left'>
                <div className='background-content'>
                    <img src={jettImg} alt="" />
                </div>

                <div className='form'>
                    <div className='login-form-input'>
                        <label htmlFor="username">Email</label>
                        <input type="text" name="username" id="" />
                    </div>

                    <div className='login-form-input'>
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" id="input1" />
                    </div>
                    <button className='waves-effect waves-light btn'>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;