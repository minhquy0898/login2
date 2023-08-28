import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = () => {
        const storedPassword = localStorage.getItem(email);

        if (storedPassword === password) {
            setLoggedIn(true);
        }
    };

    if (loggedIn) {
        return <p>Đăng nhập thành công!</p>;
    }

    return (
        <div className="form-container">
            <h1 className='text-center'>Đăng nhập</h1>
            <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Đăng nhập</button>
        </div>
    );
};

export default LoginForm;
