import React, { useState } from "react"
import { UserAuth } from '../context/Authcontext';
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar";

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/accueil')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  

    return(
        <>
            <Navbar />
            <div className="home-bg">
                <div className="main">
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
                    <div className="signup-container">
                    {error && <div className='alert' variant="danger">{error}</div>}
                        <form onSubmit={handleSubmit} className="signup-form">
                            <div className="email">
                                <input  type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="password">
                                <input type="password"  id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <button className="signup-btn" type='submit'>SIGN UP</button>
                        </form>
                        <div className='sublog-container'>
                            <div className='forgot'>
                                <Link to='/mymovies/'>Already have an account ?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}