import { FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";


const HeaderLogo = () => {

    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    

    return(
        <div className="header-logo flex items-center gap-10">
            <img className=" w-[96px] h-[40px]" src="images/logo.png" alt="" />
            <div className="hidden sm:flex flex-3 text-[var(--gray-2)]">
                <div className="-ml-6 mt-3 z-50 text-[18px]"><FiSearch /></div>
                <input className="bg-[#f7f8fa] shadow-2xs rounded-[10px] flex px-7 py-2 w-full" type="text"  placeholder="جستجو محصولات"/>
            </div>

            <div className="flex flex-5 gap-2 sm:gap-7 text-[var(--gray-1)] text-[14px]">
                <a className="hover:text-[var(--gray-2)]" href="#">باشگاه مشتریان</a>
                <a className="hover:text-[var(--gray-2)]" href="#">بلاگ</a>
                <a className="hover:text-[var(--gray-2)]" href="#">ارتباط ما</a>
                <a className="hover:text-[var(--gray-2)]" href="">درباره ما</a>
            </div>

            <div className="flex flex-2">
                <div className="cart flex justify-center items-center text-white rounded-full p-3 w-[15px] h-[15px] shadow-lg bg-[var(--red)] -ml-3 -mt-3 z-50"><span className="text-[11px] mt-1">{cart}</span></div>
                <div className="bg-[#f7f8fa] p-3 rounded-[10px] shadow-lg ml-3">
                    <div className="text-[var(--red)] text-[20px]"><HiShoppingCart /></div>
                </div>
                
                <button className="bg-[var(--blue)] text-white p-3">ورود و ثبت‌نام</button>
            </div>

        </div>
    )
}
export default HeaderLogo;