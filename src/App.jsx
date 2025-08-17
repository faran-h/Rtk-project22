import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
export let MyContext = React.createContext();

function App() {
  // const [dailyDiscountRight, setDailyDiscountRight] = useState([]);
  // const [dailyDiscountLeft, setDailyDiscountLeft] = useState([]);
  // const [availableNow, setAvailableNow] = useState([]);
  // const [bestSellers, setBestSellers] = useState([]);
  // const [articles, setArticles] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     let res = await fetch("../db.json");
  //     let data = await res.json();
  //     setDailyDiscountRight(data.dailyDiscount.right);
  //     setDailyDiscountLeft(data.dailyDiscount.left);
  //     setAvailableNow(data.availableNow);
  //     setBestSellers(data.bestSellers);
  //     setArticles(data.articles)
  //     // console.log(articles)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };


  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Provider store={store}>
    <BrowserRouter basename="/dastresi">
      {/* <MyContext
        value={{
          dailyDiscountRight: dailyDiscountRight,
          dailyDiscountLeft: dailyDiscountLeft,
          availableNow: availableNow,
          bestSellers: bestSellers,
          articles: articles
        }}
      > */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      {/* </MyContext> */}
    </BrowserRouter>
    </Provider>
  );
}

export default App;
