import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Cover from "../../../Components/Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../hooks/useMenu";
// import PopularMenu from "../../Home/PopularMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* Offered Items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert Items */}
            <MenuCategory items={desserts}
                title={"dessert"} img={dessertImg}
            ></MenuCategory>
            {/* Soup Items */}
            <MenuCategory items={soup}
                title={"soup"} img={soupImg}
            ></MenuCategory>
            {/* Pizza Items */}
            <MenuCategory items={pizza}
                title={"pizza"} img={pizzaImg}
            ></MenuCategory>
            {/* Salad Items */}
            <MenuCategory items={salad}
                title={"salad"} img={saladImg}
            ></MenuCategory>
            {/* Drinks Items */}
            <MenuCategory items={drinks}
                title={"drinks"} img={dessertImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;