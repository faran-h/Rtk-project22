const FooterBody = () => {
  return (
    <div className="footer-body flex flex-col md:flex-row gap-8 bg-[var(--gray-3)] w-full px-[40%] sm:px-[25%] leading-8 items-center">
      <div className="flex-1">
        <img className="w-[125px]" src="images/enamad.jpg" alt="" />
      </div>

      <div className="flex-1 text-right">
        <h4 className="mb-4">دسترسی سریع</h4>
        <div className="text-[var(--gray-2)]">
          <a className="block" href="#">باشگاه مشتریان</a>
          <a className="block" href="#">سوالات متداول</a>
          <a className="block" href="#">بلاگ</a>
          <a className="block" href="#">شرایط و قوانین</a>
          <a className="block" href="#">ارتباط ما</a>
          <a className="block" href="#">درباره ما</a>
        </div>
      </div>

      <div className="text-right flex-4">
        <h4 className="font-bold mb-4">فروشگاه اینترنتی دسترسی</h4>
        <div className="text-[var(--gray-2)]">
          فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا در
          حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال 1398 از
          طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه کالای اصلی و
          مشاوره های دقیق در بازه بسیار کوتاهی توانست اعتماد بسیاری از مشتریانش
          را جلب کند و سرانجام در سال 1399 فروش از طریق سایت را هم به فعالیت های
          خود اضافه کرد تا اینکه بتواند با بررسی دقیق کالاها انتخاب صحیح شما را
          به ارمغان آورد. و امروز دسترسی فعالیت خود را در زمینه آداپتور موبایل،
          کابل شارژ، پاوربانک، ساعت هوشمند، هندزفری و هدست، لوازم گیمینگ، باتری
          و شارژر، لوازم شبکه، تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران گجت
          جذاب ادامه میدهد.
        </div>
      </div>

      <div className="flex-1">
        <img className="mb-8 w-[50%] sm:w-full" src="images/logo.png" alt="logo" />
        <div className="flex justify-center items-center">
          <img className="mr-3" src="images/instagram.png" alt="logo" />
          <div>:با ما در ارتباط باشید</div>
        </div>
      </div>
    </div>
  );
};
export default FooterBody;
