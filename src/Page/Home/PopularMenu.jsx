import MenuItemsCart from "../../Components/Shared/MenuItems/MenuItemsCart";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(items => items.category === "popular");

    return (
        <div>
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 py-7 px-2">
                {
                    popular.map(items => <MenuItemsCart items={items} key={items._id}
                    ></MenuItemsCart>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;