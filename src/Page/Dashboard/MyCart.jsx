import { FaTrash } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="w-full h-full">
            <div className=" text-2xl px-10 uppercase flex justify-between items-center py-5 gap-5">
                <h3>Total Item: {cart.length}</h3>
                <h3>Total Price:$ {total}</h3>
                <button className="btn btn-outline btn-warning ">PAY</button>
            </div>
            <div className="overflow-x-auto px-10 w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th>#</th>
                            <th>Item image</th>
                            <th>item name</th>
                            <th>price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-20 h-20">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td> {item.name}
                                </td>
                                <td>$ {item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-circle  bg-[#D1A054]">
                                        <FaTrash className="h-6 w-6 flex items-center justify-center"></FaTrash>
                                    </button>

                                </td>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default MyCart;