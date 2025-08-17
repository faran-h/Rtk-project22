import { IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { MyContext } from "../../App";
import Slider from "./Slider";

const BestSellers = ({bestSellers}) => {

// const { bestSellers } = useContext(MyContext);


  return (
    <div className="best-sellers w-full px-[40%] sm:px-[25%]">
      <div className="rounded-[15px] p-8 bg-[var(--gray-0)]">
              <div className="flex justify-between mb-4">
        <div className="flex items-center text-[var(--gray-2)] font-bold">
            <div className="border-1 border-[var(--gray-1)] p-1 rounded-[5px] mr-1"><IoIosArrowBack /></div>
            <div><a href="#" className="">مشاهده همه محصولات</a></div>
        </div>
        <div className="flex items-center">
          <h2 className="font-bold mr-2 text-[var(--gray-2)]">
            پرفروش‌ترین محصولات
          </h2>
        </div>
      </div>
      
    
        <div className="flex gap-4 w-full max-w-[1200px] mx-auto">
                   
        <Slider bestSellers={bestSellers}/>
       
    
        </div>
      </div>
      

    </div>
  );
};
export default BestSellers;
