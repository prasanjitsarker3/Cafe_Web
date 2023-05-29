import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate=useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                       console.log("User Profile Update");
                       reset();
                       Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User Create Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      navigate('/')
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <div className="py-12">
            <div className=" bg-base-200">
                <div className="col md:flex justify-center items-center gap-5 p-10">
                    <div className="text-center md:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0  md:w-1/2 mx-auto max-w-sm shadow-2xl bg-base-100 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="Type Name" className="input input-bordered" />
                                {errors.name && <span className=" text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photo && <span className=" text-red-500">Photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered" />
                                {errors.email && <span className=" text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    pattern: /(?=.*[0-9].*[0-9])/,
                                    required: true, minLength: 6, maxLength: 20
                                })} placeholder="Enter Password" className="input input-bordered" />
                                {errors.password && <span className=" text-red-500">Password Length 6 to 20 & </span>}
                                {errors.password?.type === 'pattern' && <span className=" text-red-500">Ensure string has two digits</span>}
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center'>Already registered?<Link to="/login" className=' text-blue-500 underline text-center'> Go to log in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;