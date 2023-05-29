
const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
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
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400">Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;