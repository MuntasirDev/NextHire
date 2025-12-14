import React, { use, useContext } from 'react';
import registerLottie from "../../assets/Lotties/newregister.json"; 
import LottieWrapper from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Lottie = LottieWrapper.default || LottieWrapper;


const Register = () => {
  const {createUser} = useContext(AuthContext);
  const handleRegister = e =>
  {
    e.preventDefault();
    const form = e.target;
    const email = form.mail.value;
    const password = form.password.value;
    console.log(email,password)




createUser(email,password).then(result => {
  console.log(result.user)
}).catch (error => {
  console.log(error)
})



  }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    
                    <Lottie style={{width:"300px"}} animationData={registerLottie} loop={true} ></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Register Now!</h1>
                        <form onSubmit={handleRegister}>
                          <fieldset className="fieldset">
                            <label  className="label">Email</label>
                            <input type="email" className="input" name="mail" placeholder="Email" />
                            <label  className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                           
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;