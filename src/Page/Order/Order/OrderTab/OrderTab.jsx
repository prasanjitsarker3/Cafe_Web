import FoodCard from "../../../../Components/FoodCard/FoodCard";

const OrderTab = ({item}) => {
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                item.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;