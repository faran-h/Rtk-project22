import Slider from "./Slider";

const SelectedCat = () => {
    return(
        <div className="selected-cat w-full px-[40%] sm:px-[25%] py-4">
            <h3 className="mb-4">دسته‌بندی‌های منتخب</h3>
            <Slider />
        </div>
    )
}
export default SelectedCat;