import { useDispatch, useSelector } from "react-redux";
import Articles from "../../components/Articles/Articles";
import AvailableNow from "../../components/AvailableNow/AvailableNow";
import BestSellers from "../../components/BestSellers/BestSellers";
import Brands from "../../components/Brands/Brands";
import DailyDiscount from "../../components/DailyDiscount/DailyDiscount";
import SelectedCat from "../../components/SelectedCat/SelectedCat";
import Slider from "../../components/Slider/Slider"
import WhyDastresi from "../../components/WhyDastresi/WhyDastresi";
import { useEffect } from "react";
import { fetchData } from "../../redux/products/ProductsSlice";

const Home = () => {

const dispatch = useDispatch();

  const {
    dailyDiscountRight,
    dailyDiscountLeft,
    availableNow,
    bestSellers,
    articles,
    loading,
    error,
  } = useSelector((state) => state.data);

  

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

    return(
        <div className="home pt-[150px] text-right">
            <Slider />
            <br />
            <DailyDiscount dailyDiscountRight={dailyDiscountRight} dailyDiscountLeft={dailyDiscountLeft}/>
            <br />
            <SelectedCat />
            <br />
            <AvailableNow availableNow={availableNow}/>
            <br />
            <WhyDastresi />
            <br />
            <BestSellers bestSellers={bestSellers}/>
            <br />
            <Brands />
            <br />
            <Articles articles={articles}/>
            <br />
        </div>
    )
}
export default Home;