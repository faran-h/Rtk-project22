import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { FaPercent } from "react-icons/fa";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/products/ProductsSlice";

const DailyDiscount = ({dailyDiscountRight, dailyDiscountLeft}) => {
  // const { dailyDiscountRight } = useContext(MyContext);
  // const { dailyDiscountLeft } = useContext(MyContext);



  return (
    <div className="daily-discount w-full px-[40%] sm:px-[25%] ">
      <div className="rounded-[15px] p-8 bg-[var(--gray-0)]">
        <div className="flex justify-between mb-4">
          <CountdownTimer initialSeconds={5400} />
          <div className="flex items-center">
            <h2 className="font-bold mr-2 text-[var(--gray-2)]">
              تخفیف‌های روزانه دسترسی
            </h2>
            <div className="text-[var(--red)] text-[30px]">
              <FaPercent />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <div className="left flex w-full justify-center">
              <div className="flex flex-col gap-6">
                {dailyDiscountLeft?.map((item) => {
                  return (
                    <div
                      className="bg-white flex rounded-[15px] p-4 mr-5 hover:shadow-2xl hover:z-50"
                      key={item.id}
                    >
                      <div>
                        <div>{item.title}</div>
                        <div className="flex justify-between mb-4">
                          <div className="flex text-[13px] text-[var(--red)]">
                            <span className="">تومان تخفیف</span>
                            <div>{item.discount}</div>
                          </div>
                          <div className="text-[var(--gray-2)] line-through">
                            underline
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-1 text-[var(--gray-2)] text-[15px]">
                            تومان
                          </span>
                          <div className="text-[20px] font-bold text-[var(--blue)]">
                            {item.price}
                          </div>
                        </div>
                      </div>
                      <img className="w-40" src={item.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="right flex flex-col md:flex-row w-full justify-center gap-6 ">
              {dailyDiscountRight?.map((item) => {
                return (
                  <div
                    className="bg-white rounded-[15px] p-4 flex-1 hover:shadow-2xl hover:z-50 h-auto"
                    key={item.id}
                  >
                    <img src={item.image} alt="" />
                    <div className="text-right mb-29">{item.title}</div>
                    <div className="flex justify-between mb-4">
                      <div className="flex text-[var(--red)]">
                        <span>تومان تخفیف</span>
                        <div>{item.discount}</div>
                      </div>
                      <div className="text-[var(--gray-2)] line-through">
                        underline
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1 text-[var(--gray-2)] text-[15px]">
                        تومان
                      </span>
                      <div className="text-[20px] font-bold text-[var(--blue)]">
                        {item.price}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DailyDiscount;
