import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileDropdown = ({ item }) => {
  const [open, setOpen] = useState(false);

  console.log("آیتم در موبایل:", item);

  return (
    <div className="border-b border-gray-200">
      <div className="flex justify-between items-center py-2">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `block text-right flex-1 ${
              isActive ? "text-blue-600 font-bold" : "text-gray-800"
            }`
          }
          end={!item.subMenu} // فقط اگر زیرمنو نداشت exact بزن
          onClick={() => setOpen(false)} // بستن منو روی کلیک لینک
        >
          {item.label}
        </NavLink>

        {item.subMenu && (
          <button
            onClick={() => setOpen(!open)}
            className="px-3 text-gray-600"
            aria-label={open ? "بستن زیرمنو" : "باز کردن زیرمنو"}
            type="button"
          >
            {open ? "▲" : "▼"}
          </button>
        )}
      </div>

{open && (
  <div className="pr-4 space-y-2">
    {item.type === "mega" && item.columns ? (
      // ✅ پشتیبانی از منوی مگامنو با ستون‌ها در موبایل
      item.columns.map((col, idx) => (
        <div key={idx}>
          <div className="text-gray-600 font-semibold mb-1">{col.title}</div>
          <div className="pl-2 space-y-1">
            {col.links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className="block text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ))
    ) : item.subMenu ? (
      // حالت معمول برای آیتم‌های ساده یا تودرتو
      item.subMenu.map((child, idx) => (
        <MobileDropdown key={idx} item={child} />
      ))
    ) : null}
  </div>
)}


    </div>
  );
};

export default MobileDropdown;
