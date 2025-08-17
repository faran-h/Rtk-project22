import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const FooterContact = () => {
  return (
    <div className="footer-contact text-[var(--gray-2)] w-full px-[40%] sm:px-[25%] flex flex-col md:flex-row gap-20 justify-center py-[30px] bg-[var(--gray-0)]">
      <div className="flex">
        <div className="mr-3">
          تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع
        </div>
        <div className="text-[20px]"><IoLocationOutline /></div>
      </div>

      <div className="flex">
        <div className="mr-3">
          شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه ها از 10 صبح الی
          ساعت 16
        </div>
        <div className="text-[20px]"><IoMdTime /></div>
      </div>

      <div className="flex">
        <div className="mr-3">۰۲۱-۳۳۹۰۲۶۴۶</div>
        <div className="text-[20px]"><MdOutlinePhoneEnabled /></div>
      </div>
    </div>
  );
};
export default FooterContact;
