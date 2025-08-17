import { useContext } from "react";
import { MyContext } from "../../App";
import Slider from "./Slider";

const Articles = ({articles}) => {
// const {articles} = useContext(MyContext);

    return(
        <div className="article w-full px-[40%] sm:px-[25%] py-4">
            <h2 className="text-right mb-[50px] text-[var(--gray-2)]">آخرین مقالات</h2>
            <Slider articles={articles}/>
        </div>
    )
}
export default Articles;