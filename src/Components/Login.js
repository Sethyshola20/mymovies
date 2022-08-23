import Navbar from './Navbar';
import React, { useState } from "react";
import { UserAuth } from '../context/Authcontext';
import { Link, useNavigate } from "react-router-dom";


export default function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { signIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(email, password)
          navigate('/accueil')
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
      };

    return(
        <>
            <Navbar />
            <div className="home-bg">
                <div className='main'>
                    <div className="home-presentation">
                        <h1>Mymovies</h1>
                        <h2>Share your favourite movies
                            <div className="scroller">
                                <span>
                                with your friends<br/>
                                with your family<br/>
                                with your colleagues<br/>
                                </span>
                            </div>
                        </h2>
                    </div>
                    <div className="login-container">
                    {error && <div className='alert' variant="danger">{error}</div>}
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="email">
                                <input type="text" id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="password">
                                <input type="password"  id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button className="login-btn" >LOGIN</button>
                        </form>
                        <div className='sublog-container'>
                            <div className='line'></div>
                            <button className='new-btn'><Link to='/signup'>Create a new account</Link> </button>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}