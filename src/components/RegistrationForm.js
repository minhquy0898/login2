import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
    const navigate = useNavigate(); // Thêm dòng này để sử dụng hook Navigate

    const handleLoginLinkClick = () => {
        navigate('/login'); // Gọi hook Navigate để chuyển hướng đến trang đăng nhập
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [registered, setRegistered] = useState(false);

    const handleSubmit = () => {
        setEmailError('');
        setPasswordError('');

        if (!isValidEmail(email)) {
            setEmailError('Email không hợp lệ');
            return;
        }

        if (localStorage.getItem(email)) {
            setEmailError('Email đã tồn tại');
            return;
        }

        if (!isValidPassword(password)) {
            setPasswordError('Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        localStorage.setItem(email, password);
        setRegistered(true);
    };

    if (registered) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="form-container">
            <div className='p-4'>
                <h1 className='text-center'>Đăng ký</h1>

                <input
                    type="text"
                    placeholder="Email address  "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error">{emailError}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="error">{passwordError}</p>}
                <button onClick={handleSubmit}>Đăng ký</button>
                <p className='register_nav'>Đã có tài khoản?  <span onClick={handleLoginLinkClick} className="link"> Đăng nhập</span></p>
            </div>

        </div>
    );
};

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPassword = (password) => {
    return password.length >= 6;
};

export default RegistrationForm;
