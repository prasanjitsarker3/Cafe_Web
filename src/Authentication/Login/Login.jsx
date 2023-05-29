import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from =location?.state?.from?.pathname || "/";
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLoginUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from,{replace: true})
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleValidation = (e) => {
        const userValidation = e.target.value;
        if (validateCaptcha(userValidation) === true) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="py-12">
            <div className=" bg-base-200">
                <div className="col md:flex justify-center items-center gap-5 p-10">
                    <div className="text-center md:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0  md:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleLoginUser} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Enter Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input onBlur={handleValidation} type="text" name="" placeholder="Type Captcha" className="input input-bordered pb-2" />
                                {/* <button  className="btn btn-outline btn-xs mt-3">Validation</button> */}

                            </div>
                            <div className="form-control mt-4">
                                <button disabled={disabled} type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'>New here?<Link to='/register' className=' text-blue-500 underline text-center'>Create a New Account</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;