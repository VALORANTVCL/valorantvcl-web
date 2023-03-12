import React from 'react';
import '../css/Login.css';
import jettImg from '../img/jett.png';
import vcl_logo from '../img/vcl_logo.png';
import {useState} from 'react';

let Login = () => {
    let msg = "";
    const [loginDefault, newValueLogin] = useState<string>("");
    const [passDefault, newValuePass] = useState<string>("");
    const emails = ['contato.diogodev7@gmail.com', 'luandunaas@gmail.com'];

    const validateEmail = () => {
        if(!emails.includes(loginDefault)){
            msg += "Login inválido! \n"
        }
        if(msg){
            alert(msg);
        }
    }

    return (
        <div className='main-content'>
            <div className='left'>
                <div className='background-content'>
                    <img src={jettImg} alt="" />
                </div>

                <div className='form'>
                    <div className='login-form-input'>
                        <label htmlFor="username">Email</label>
                        <input type="text" name="username" id="" value={loginDefault} onChange={e => newValueLogin(e.target.value)}/>
                    </div>

                    <div className='login-form-input'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="input1" value={passDefault} onChange={e => newValuePass(e.target.value)}/>
                    </div>
                    <button className='waves-effect waves-light btn' onClick={validateEmail}>Sign In</button>
                </div>
            </div>
            <div className='right'>
                <div className='background-right'>
                    <img src={vcl_logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Login;