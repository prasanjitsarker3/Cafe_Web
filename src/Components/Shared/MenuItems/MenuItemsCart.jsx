
const MenuItemsCart = ({ items }) => {
    const { name, recipe, image, price } = items;
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius:"0 200px 200px 200px"}} src={image} alt="" className="w-[120px]"/>
            <div>
                <h3 className="uppercase">{name}---------------------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItemsCart;