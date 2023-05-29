
const MenuItemsCart = ({ items }) => {
    const { name, recipe, image, price } = items;
    return (
        <div className="flex space-x-3 p-3">
            <img style={{borderRadius:"0 200px 200px 200px"}} src={image} alt="" className="w-[110px]"/>
            <div className="">
                <h3 className="uppercase font-serif">{name}----------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500 ">${price}</p>
        </div>
    );
};

export default MenuItemsCart;