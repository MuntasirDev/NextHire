import React, { useContext } from 'react'; 

import SignInLottie from "../../assets/Lotties/sign in.json"; 
import LottieWrapper from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

import { Link } from 'react-router-dom'; 


const Lottie = LottieWrapper.default || LottieWrapper;


const SignIn = () => {
    
    const { signInUser } = useContext(AuthContext); 
    const handleSignIn = e =>
    {
        e.preventDefault();
        const form = e.target;
        
       
        const email = form.mail.value; 
        
        const password = form.password.value;
        console.log("Attempting Sign In with:", email, password);

        
        signInUser(email,password).then(result => {
            console.log("User Created/Signed In:", result.user)
        }).catch (error => {
            console.error("Authentication Error:", error)
        })

    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{width:"300px"}} animationData={SignInLottie} loop={true} ></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold text-center mb-4">Sign In Now!</h1>
                        
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset space-y-3">
                                <label className="label block">
                                    <span className="label-text">Email</span>
                                   
                                    <input type="email" name="mail" className="input input-bordered w-full" placeholder="Email" required />
                                </label>
                                
                                <label className="label block">
                                    <span className="label-text">Password</span>
                                    <input type="password" name="password" className="input input-bordered w-full" placeholder="Password" required />
                                </label>
                                
                                <div className="text-right">
                                    <a className="link link-hover text-sm">Forgot password?</a>
                                </div>
                                
                                <button type="submit" className="btn btn-primary w-full mt-4">Sign In</button>
                            </fieldset>
                        </form>
                        
                       
                        <div className="text-center mt-4 text-sm">
                            New here? 
                            <a href="/register" className="link link-hover font-bold text-primary ml-1">
                                Create an account
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;