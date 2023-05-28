import Banner from "../../Components/Shared/Banner/Banner";
import Category from "../Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu";
import Testmonials from "./Testmonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;