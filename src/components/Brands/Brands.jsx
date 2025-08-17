import Slider from "./Slider";

const Brands = () => {
    return(
        <div className="Brands py-4 w-full px-[40%] sm:px-[25%]">
            <h2 className="text-[var(--gray-2)] mb-[50px] text-right">محبوب ترین برندها</h2>
            <Slider />
        </div>
    )
}
export default Brands;