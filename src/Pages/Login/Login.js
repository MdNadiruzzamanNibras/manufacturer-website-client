import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data?.email , data?.password)
    };
    const navigate= useNavigate()
    const [token]= useToken(user)
    if(token){
    navigate('/')
    }
 console.log(user);
    return (
       <div  className='flex justify-center items-center min-h-screen'>
            <div className="card w-96 bg-primary ">
  <div className="card-body">
  <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Email</span>
            
          </label>
          <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                       value: true,
                                       message:'Email is required'
                                    }
                                   
                                })}
                            />
          <label className="label">
          {errors?.email?.type === 'required' && <span className="label-text-alttext-red-500">{errors?.email?.message}</span>}  
          </label>
          </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-white">Password</span>
            
          </label>
          <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                       value: true,
                                       message:'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'password min length 6 caractor'
                                    }
                                })}
                            />
          <label className="label">
          {errors?.password?.type === 'required' && <span className="label-text-alttext-red-500">{errors?.password?.message}</span>}
          {errors?.password?.type === 'minLength' && <span className="label-text-alttext-red-500">{errors?.password?.message}</span>}
          
            
          </label>
          </div>
        
          
          <input className='btn max-w-xs text-white' type="submit" value="Login" />
    </form>
    <div class="divider text-white">OR</div>

    <p><small>New to The AutoMobile <Link className='text-white' to='/signup'>Create Account</Link></small></p>

    </div>
  </div>
  </div>
            
       
    );
};

export default Login;

