
const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure >
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-2 rounded bg-slate-800 text-white ">{price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;