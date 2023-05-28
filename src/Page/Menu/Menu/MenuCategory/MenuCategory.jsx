import { Link } from "react-router-dom";
import Cover from "../../../../Components/Shared/Cover/Cover";
import MenuItemsCart from "../../../../Components/Shared/MenuItems/MenuItemsCart";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="py-8 px-8">
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-6 py-7 px-6 mt-16">
                {
                    items.map(items => <MenuItemsCart items={items} key={items._id}
                    ></MenuItemsCart>)
                }
            </div>
            <div className="flex justify-center text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 uppercase">Order Your favourite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;