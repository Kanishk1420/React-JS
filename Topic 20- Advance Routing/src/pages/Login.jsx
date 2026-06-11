import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const user = import.meta.env.VITE_USERNAME;
    const pass = import.meta.env.VITE_PASSWORD;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        setUsername("");
        setPassword("");
    };
    const login = () => {
        if (username === user && password === pass) {
            localStorage.setItem("token", true);
            navigate("/");
        } else {
            alert("Invalid username or password");
        }
    };
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <input
                    id = "username"
                    type="text"
                    placeholder="Username"
                    required
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    value={username}
                />
                <br />
                <input
                   id = "password"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                />
                <br />
                <button onClick={login}>Login</button>
            </form>
        </div>
    );
};

export default Login;
