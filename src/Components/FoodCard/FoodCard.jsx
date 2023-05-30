import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [,refetch]=useCart();
    const location = useLocation();
    const navigate = useNavigate()
    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { foodId: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch() //refetch cart to update the number of items i 
                        Swal.fire({
                            
                            position:'top-center',
                            icon:'success',
                            title: 'Food Add On The Cart',
                            showConfirmButton:false,
                            timer:1500

                            // showClass: {
                            //     popup: 'animate__animated animate__fadeInDown'
                            // },
                            // hideClass: {
                            //     popup: 'animate__animated animate__fadeOutUp'
                            // }
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login & Order Food?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure className="px-5 py-5">
                <img src={image} alt="Shoes" className="rounded-xl md:w-[300px]" />
            </figure>
            <p className="absolute right-0 mr-12 mt-8 px-2 rounded bg-slate-800 text-white ">{price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;