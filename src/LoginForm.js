import name_icon from './images/name-icon.png';
import email_icon from './images/email-icon.png';
import pass_icon from './images/pass-icon.png';
import './LoginForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [action, setAction] = useState("Sign Up");

    const [ name, setName ]= useState("");
    const [ validname, setValidName] = useState(false);

    const [ email, setEmail ]= useState("");
    const [ validemail, setValidEmail] = useState(false);

    const [ pass, setPass ]= useState("");
    const [ validpass, setValidPass] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, pass });
        navigate("/home");
    };
    // const validateInputs = () => {
    //     // Validate username: non-empty
    //     setValidName(name.trim() !== '');
    //     // Validate email: simple regex check
    //     setValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    //     // Validate password: at least 6 characters
    //     setValidPass(pass.length >= 6);
    // };

    return ( 
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    { action === "Login" ? <div></div> : (
                        <div className="input">
                            <img src={name_icon} alt="Username icon" />
                            <input type="text"  value={name} placeholder="Username" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                    )}
                    <div className="input">
                        <img src={email_icon} alt="Email icon" />
                        <input type="email" value={email} placeholder="Email ID" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input">
                        <img src={pass_icon} alt="Password icon" />
                        <input type="password" value={pass} placeholder="Password" onChange={(e) =>setPass(e.target.value)}
                                required/>
                    </div>
                    { action === "Sign Up" ? <div></div> : <div className="forgotpassword">Forgot Password?<span>Click Here</span></div>}
                </div>
                <div className="submit-container">
                <button 
                        type="button" 
                        className={action === "Login" ? "submit gray" : "submit"} 
                        onClick={() => {
                            setAction("Sign Up");
                        }} 
                        // disabled={!validname|| !validemail || !validpass} 
                    >
                        Sign Up
                    </button>
                    <button 
                        type="button" 
                        className={action === "Sign Up" ? "submit gray" : "submit"} 
                        onClick={() => {
                            setAction("Login");
                        }} 
                        // disabled={!validemail || !validpass} 
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;