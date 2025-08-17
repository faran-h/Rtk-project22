const WhyDastresi = () => {
  return (
    <div className="why-dastresi w-full px-[25%] text-center">
      <h3 className="mb-[50px] text-center">چرا دسترسی رو برای خرید انتخاب کنیم؟</h3>
      <div className="flex flex-col md:flex-row items-center gap-5 leading-8">
        <div className="flex-1">
          <img
            className="block mx-auto w-[25%]"
            src="images/WhyDastresi/icon4.png"
            alt=""
          />
          <div className="text-[var(--gray-2)] font-bold">امکان خرید حضوری</div>
          <div className="text-[14px]">
            مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت
            مراجعه نمایید.
          </div>
        </div>
        <div className="flex-1">
          <img
            className="block mx-auto w-[25%]"
            src="images/WhyDastresi/icon3.png"
            alt=""
          />
          <div className="text-[var(--gray-2)] font-bold">ارسال سریع</div>
          <div className="text-[14px]">
            ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت می
            گیرد.
          </div>
        </div>
        <div className="flex-1">
          <img
            className="block mx-auto w-[25%]"
            src="images/WhyDastresi/icon1.png"
            alt=""
          />
          <div className="text-[var(--gray-2)] font-bold">
            قیمت مناسب با بالاترین کیفیت
          </div>
          <div className="text-[14px]">
            گروه دسترسی در تلاش است که کالای با کیفیت را با مناسب‌ترین قیمت به
            دست شما برساند.
          </div>
        </div>
        <div className="flex-1">
          <img
            className="block mx-auto w-[25%]"
            src="images/WhyDastresi/icon2.png"
            alt=""
          />
          <div className="text-[var(--gray-2)] font-bold">
            مشاوره تخصصی برای خرید محصول
          </div>
          <div className="text-[14px]">
            برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب رو
            انجام دهید.
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyDastresi;
